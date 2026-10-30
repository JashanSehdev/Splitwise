import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  GroupDetails } from "@/type/group.type";
import { createGroupAsync, fetchUserGroup } from "./handle-group/group.action";

type InitialState = {
  groups: GroupDetails[];
};

const initialState: InitialState = {
  groups: [],
};

const groupSlice = createSlice({
  name: "groupSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createGroupAsync.fulfilled,
      (state, action: PayloadAction<GroupDetails>) => {
        state.groups.push(action.payload);
      },
    )
    .addCase(fetchUserGroup.fulfilled, (state, action) => {
      state.groups = action.payload
    })
  },
});

export default groupSlice.reducer;
