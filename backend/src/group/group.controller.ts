import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { GroupService } from './group.service.js';
import { CreateGroupDto } from './dto/create-group.dto.js';
import { UpdateGroupDto } from './dto/update-group.dto.js';
import { Request } from 'express';
import { PaginationDto } from './dto/pagination.dto.js';
import { FindGroupsDto } from './dto/find-group.dto.js';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto, @Req() req : Request & {user : any}) {
    return this.groupService.create(createGroupDto, req.user.id);
  }

  @Get()
  findAll(
    @Req() req: Request & { user: any },
    @Query() query: FindGroupsDto,
  ) {
    return this.groupService.findGroups( req.user.id, query)
  }

  // @Get('user')
  // findAll(@Req() req : Request & {user : any}, @Query() query : PaginationDto) {
  //   return this.groupService.findUserGroups(req.user.id, query);
  // }

  // @Get('user/created')
  // findUserGroup(@Req() req : Request & {user : any}) {
  //   return this.groupService.findUserCreatedGroups(req.user.id);
  // }


  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto, @Req() req : Request & {user : any}) {
    return this.groupService.update(+id, updateGroupDto, req.user.id  );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
