import { PaginationResponse } from "../interfaces/pagination-response.interface.js";

export function paginationResponse<T>(
    data : T[],
    page : number,
    limit : number,
    total : number
  ) : PaginationResponse<T>{
    return {
      success : true,
      data : data,
      meta : {
        total,
        page,
        limit,
        totalPages : Math.ceil(total / limit)
      }
    }
  }