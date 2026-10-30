import { Module } from '@nestjs/common';
import { GroupMembersService } from './group_members.service.js';
import { GroupMembersController } from './group_members.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupMember } from './entities/group_member.entity.js';

@Module({
  imports : [TypeOrmModule.forFeature([GroupMember])],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
