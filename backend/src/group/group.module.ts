import { Module } from '@nestjs/common';
import { GroupService } from './group.service.js';
import { GroupController } from './group.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity.js';
import { GroupMembersService } from '../group_members/group_members.service.js';

@Module({
  imports : [TypeOrmModule.forFeature([Group])],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
