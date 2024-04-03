import { UserRecord } from "@/types/httpRequest";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: UserRecord = {
  id: "",
  collectionId: "",
  collectionName: "",
  username: "",
  verified: false,
  emailVisibility: false,
  email: "",
  created: "",
  updated: "",
  name: "",
  avatar: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (_, action: PayloadAction<UserRecord>) => {
      return action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
