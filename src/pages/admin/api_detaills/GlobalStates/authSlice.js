import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null, // Retrieve user from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      // console.log(user);
      
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Clear user from localStorage
    },
  },
 });

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
