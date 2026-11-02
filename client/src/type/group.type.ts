import { BaseUser } from "./user.type"

export interface BaseGroup  {
    id : number
    title : string,
    description ?: string,
    createdAt : string,
    updatedAt : string
    imageUrl : string,
    memberCount : number,
    expenses : number,
    ownerId : number
}


export interface GroupDetails extends BaseGroup {
  Owner : BaseUser
}

export interface GroupMemberRequest {
  id: number;

  Group: GroupDetails;
}
