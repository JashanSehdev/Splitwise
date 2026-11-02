import { IsOptional, IsString } from "class-validator";

export class CreateGroupDto {

    @IsString()
    title : string

    @IsOptional()
    @IsString()
    description : string
    
    @IsOptional()
    @IsString()
    imageUrl : string
}
