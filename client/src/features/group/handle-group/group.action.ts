import { api, getErrorMessage } from "@/api/api";
import { GroupInput } from "@/components/groups/group-form/group-form.type";
import { GroupDetails } from "@/type/group.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";


export const createGroupAsync = createAsyncThunk<GroupDetails, GroupInput>(
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

export const fetchUserGroup = createAsyncThunk<GroupDetails[]>(
  "group/fetch",
  async (_,thunkApi) => {
    try {
      const response = await api.get("/group-members/user");
      enqueueSnackbar('Group Created Successfully', {variant : 'success'})
      return response.data.Group;
    } catch (error: unknown) {
      enqueueSnackbar(getErrorMessage(error), {variant: 'error'})
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);





