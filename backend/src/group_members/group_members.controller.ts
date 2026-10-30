import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { GroupMembersService } from './group_members.service.js';
import { CreateGroupMemberDto } from './dto/create-group_member.dto.js';
import { UpdateGroupMemberDto } from './dto/update-group_member.dto.js';
import { Request } from 'express';

@Controller('group-members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Post()
  create(@Body() createGroupMemberDto: CreateGroupMemberDto) {
    return this.groupMembersService.create(createGroupMemberDto);
  }

  @Get()
  findAll() {
    return this.groupMembersService.findAll();
  }

  @Get('user')
  findUserGroup(@Req() req: Request & { user: any }) {
    return this.groupMembersService.findUserGroup(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupMembersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupMemberDto: UpdateGroupMemberDto,
    @Req() req: Request & { user: any },
  ) {
    return this.groupMembersService.update(
      +id,
      updateGroupMemberDto,
      req.user.id,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request & { user: any }) {
    return this.groupMembersService.remove(+id, req.user.id);
  }
}
