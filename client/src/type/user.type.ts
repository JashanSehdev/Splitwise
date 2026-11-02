
export type User = {
    id : number;
    username : string;
    email : string;
    role : string
    createAt : string;
    updatedAt : string;  
}

export interface Profile {
    id : number,
    userId : number,
    owed : number,
    owedBy : number
}

export interface BaseUser {
    id : number,
    username : string
}