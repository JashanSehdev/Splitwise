import { IsOptional, isString, IsString } from "class-validator";

export class CreateGroupDto {

    @IsString()
    name : string

    @IsString()
    description : string
    
    @IsOptional()
    @IsString()
    imageUrl : string
}
