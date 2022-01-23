import { createSlice } from "@reduxjs/toolkit";

type UserType = {
  isAuthenticate: boolean;
  name: string;
};

const initialState: UserType = {
  isAuthenticate: true,
  name: "John",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticate = true;
      state.name = "John";
    },
    logout: (state) => {
      state.isAuthenticate = false;
      state.name = "";
    },
  },
});

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
