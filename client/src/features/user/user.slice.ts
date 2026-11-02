import { BaseUser } from "@/type/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOtherUserAsync } from "./handle-users/user.action";
import { PaginationResponse } from "@/type/meta.type";

type InitialState = {
  otherUsers: BaseUser[]
};

const initialState: InitialState = {
  otherUsers: []
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOtherUserAsync.fulfilled, (state, action : PayloadAction<PaginationResponse<BaseUser>>) => {
        state.otherUsers = action.payload.data
    })
  }
});


export default userSlice.reducer
