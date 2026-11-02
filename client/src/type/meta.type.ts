export interface PaginationMeta {
    total : number,
    page : number,
    limit: number,
    totalPages: number
}

export interface PaginationResponse<T>{
    success : boolean,
    data: T[],
    meta : PaginationMeta
}

export interface PaginationRequest{
    page : number,
    limit : number
}