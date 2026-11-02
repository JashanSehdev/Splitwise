import { api, getErrorMessage } from "@/api/api";
import { PaginationRequest, PaginationResponse } from "@/type/meta.type";
import { BaseUser } from "@/type/user.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";


export const fetchOtherUserAsync = createAsyncThunk<PaginationResponse<BaseUser>, PaginationRequest & {search : string}> (
  "user/fetch",
  async (paginationRequest,thunkApi) => {
    try {
      const response = await api.get("/users", {
        params : paginationRequest,
      });
      return response.data;
    } catch (error: unknown) {
      enqueueSnackbar(getErrorMessage(error), {variant: 'error'})
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);