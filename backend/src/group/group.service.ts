import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Search,
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto.js';
import { UpdateGroupDto } from './dto/update-group.dto.js';
import { DataSource, FindOptionsWhere, ILike, Repository } from 'typeorm';
import { Group } from './entities/group.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupMember } from '../group_members/entities/group_member.entity.js';
import { RequestEnum } from '../group_members/enum/request.enum.js';
import { PaginationDto } from './dto/pagination.dto.js';
import { totalmem } from 'os';
import { FindGroupsDto, GroupType } from './dto/find-group.dto.js';
import { paginationResponse } from '../common/utlis/pagination.js';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createGroupDto: CreateGroupDto, userId: number) {
    return await this.dataSource.transaction(async (manager) => {
      const group = manager.create(Group, {
        ...createGroupDto,
        ownerId: userId,
      });
      const savedGroup = await manager.save(group);

      const groupMember = manager.create(GroupMember, {
        groupId: savedGroup.id,
        memberId: userId,
        request: RequestEnum.ACCEPTED,
      });
      await manager.save(groupMember);
      return await this.findOne(savedGroup.id);
    });
  }
  async findUserGroups(userId: number, query?: PaginationDto) {
    const page = query?.page ?? 1;
    const limit = query?.limit ?? 10;
    const skip = (page - 1) * limit;

    const [result, count] = await this.groupRepository.findAndCount({
      where: {
        GroupMembers: {
          memberId: userId,
        },
      },
      skip,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data: result,
      totalItems: count,
      currentPage: page,
      limit,
      totalPages: Math.ceil(count / limit),
    };
  }

  async findGroups(userId: number, query: FindGroupsDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;

    const where: FindOptionsWhere<Group> = {};

    const qb = this.groupRepository.createQueryBuilder('groups');

    if (query.type === GroupType.CREATED) {
      where.ownerId = userId;
    }

    if (query.type === GroupType.JOINED) {
      where.GroupMembers = {
        memberId: userId,
      };
    }

    if (!query.type) {
      where.GroupMembers = {
        memberId: userId,
      };

      where.ownerId = userId
    }

    if (query.search) {
      where.title = ILike(`%${query.search}%`);
    }

    const [data, total] = await this.groupRepository.findAndCount({
      where,
      relations: {GroupMembers : true},
      skip: (page - 1) * limit,
      take: limit,
    });

    return paginationResponse(data, page, limit, total);
  }

  async findAll() {
    return await this.groupRepository.find();
  }

  async findUserCreatedGroups(userId: number) {
    return await this.groupRepository.findBy({ ownerId: userId });
  }

  async findOne(id: number) {
    return await this.groupRepository.findOneBy({ id });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto, userId: number) {
    const group = await this.findOne(id);

    if (!group) throw new NotFoundException('Group not found');

    if (group.ownerId !== userId)
      throw new BadRequestException('Existing user is not the owner');

    const UpdatedGroup = Object.assign(group, updateGroupDto);

    return this.groupRepository.save(group);
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
