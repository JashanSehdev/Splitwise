import { IsEnum, IsNumber, IsOptional } from "class-validator";
import { RequestEnum } from "../enum/request.enum.js";


export class CreateGroupMemberDto {
    @IsNumber()
    groupId : number

    @IsOptional()
    @IsEnum(RequestEnum)
    request : RequestEnum
}
