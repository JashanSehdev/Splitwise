import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto.js';
import { UpdateGroupDto } from './dto/update-group.dto.js';
import { DataSource, Repository } from 'typeorm';
import { Group } from './entities/group.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupMembersService } from '../group_members/group_members.service.js';
import { GroupMember } from '../group_members/entities/group_member.entity.js';
import { RequestEnum } from '../group_members/enum/request.enum.js';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository : Repository<Group>,
    private readonly dataSource: DataSource
  ){}

  async create(createGroupDto: CreateGroupDto, userId : number) {

    return await this.dataSource.transaction(async(manager) => {
      const group = manager.create(Group, {...createGroupDto , ownerId : userId})
      const savedGroup = await manager.save(group);

      const groupMember = manager.create(GroupMember, {groupId: savedGroup.id, memberId : userId, request:RequestEnum.ACCEPTED   })
      await manager.save(groupMember)
      return savedGroup
    })

  }

  async findAll() {
    return await this.groupRepository.find();
  }

  async findUserCreatedGroups(userId : number) {
    return await this.groupRepository.findBy({ownerId : userId})
  }

  async findOne(id: number) {
    return await this.groupRepository.findOneBy({id});
  }

  async update(id: number, updateGroupDto: UpdateGroupDto, userId : number) {

    const group = await this.findOne(id);
    
    if(!group) throw new NotFoundException('Group not found');

    if (group.ownerId !== userId) throw new BadRequestException('Existing user is not the owner');

    const UpdatedGroup = Object.assign(group, updateGroupDto);

    return this.groupRepository.save(group);
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
