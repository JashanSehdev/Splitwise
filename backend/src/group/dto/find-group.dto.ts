import { IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";


export enum GroupType {
  JOINED = 'joined',
  CREATED = 'created',
}

export class FindGroupsDto {
  @IsOptional()
  @IsEnum(GroupType)
  type?: GroupType;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string;
}
