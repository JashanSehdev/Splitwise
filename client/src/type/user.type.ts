
export type User = {
    id : string;
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