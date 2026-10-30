import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGroupMemberDto } from './dto/create-group_member.dto.js';
import { UpdateGroupMemberDto } from './dto/update-group_member.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupMember } from './entities/group_member.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class GroupMembersService {
  constructor(
    @InjectRepository(GroupMember)
    private readonly groupMemberRepository: Repository<GroupMember>,
  ) {}
  async create(createGroupMemberDto: CreateGroupMemberDto) {
    const groupMember = this.groupMemberRepository.create(createGroupMemberDto);
    return this.groupMemberRepository.save(groupMember);
  }

  findAll() {
    return this.groupMemberRepository.find();
  }

  findOne(id: number) {
    return this.groupMemberRepository.findOneBy({ id });
  }
  async findUserGroup(userId : number) {
    return this.groupMemberRepository.find({
      where : {
        memberId : userId
      },
      relations: {
        Group : true
      },
      select : {
        id : true,
        Group  : true
      }
    })
  }

  async update(
    id: number,
    updateGroupMemberDto: UpdateGroupMemberDto,
    userId: number,
  ) {
    const group = await this.findOne(id);

    if (!group) throw new NotFoundException('Group Member not found');

    if (group.memberId !== userId)
      throw new BadRequestException('You are not the owner of this resource');

    const UpdatedGroup = Object.assign(group, updateGroupMemberDto);

    return this.groupMemberRepository.save(group);
  }

  async remove(id: number, userId: number) {
    const groupMember = await this.findOne(id);
    if (!groupMember) throw new NotFoundException('Group Member not found');

    if (groupMember.memberId !== userId)
      throw new BadRequestException('You are not the owner of this resource');

    return await this.groupMemberRepository.remove(groupMember); 
  }
}
