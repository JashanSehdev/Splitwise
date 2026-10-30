
export interface BaseGroup  {
    name : string,
    createdAt : string,
    imageUrl : string,
}

export interface GroupDetails {
  id: number;
  name: string;
  imageUrl: string;
  ownerId: number;
  description: string;
  totalExpenditure: number;
  createdAt: string;
  updatedAt: string;
}

export interface GroupMemberRequest {
  id: number;

  Group: GroupDetails;
}
