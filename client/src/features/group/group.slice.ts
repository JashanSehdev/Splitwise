import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  BaseGroup
 } from "@/type/group.type";
import { createGroupAsync, fetchUserGroup } from "./handle-group/group.action";

type InitialState = {
  groups: BaseGroup[];
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
      (state, action: PayloadAction<BaseGroup>) => {
        state.groups.push(action.payload);
      },
    )
    .addCase(fetchUserGroup.fulfilled, (state, action) => {
      state.groups = action.payload.data
    })
  },
});

export default groupSlice.reducer;
