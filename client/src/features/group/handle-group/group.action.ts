import { api, getErrorMessage } from "@/api/api";
import { GroupInput } from "@/components/groups/group-form/group-form.type";
import { BaseGroup } from "@/type/group.type";
import { PaginationRequest, PaginationResponse } from "@/type/meta.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";


export const createGroupAsync = createAsyncThunk<BaseGroup, GroupInput>(
  "group/create",
  async (group, thunkApi) => {
    try {
      const response = await api.post("/groups", group);
      enqueueSnackbar('Group Created Successfully', {variant : 'success'})
      return response.data;
    } catch (error: unknown) {
      enqueueSnackbar(getErrorMessage(error), {variant: 'error'})
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchUserGroup = createAsyncThunk<PaginationResponse<BaseGroup>, PaginationRequest> (
  "group/fetch",
  async (paginationRequest,thunkApi) => {
    try {
      const response = await api.get("/groups/user", {
        params : paginationRequest
      });
      return response.data;
    } catch (error: unknown) {
      enqueueSnackbar(getErrorMessage(error), {variant: 'error'})
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);





