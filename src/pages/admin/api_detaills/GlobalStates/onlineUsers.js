import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { aP } from "vitest/dist/chunks/reporters.d.79o4mouw.js";
// import DiceSummaries from "../constant/url_path"

// Async thunk for fetching dice summary data
export const fetchOnlineUsers = createAsyncThunk(
  "onlineUsers/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_URL = `${API_BASE_URL}/total-online-users`;
      const response = await fetch(API_URL, {
        headers:{
          Authorization: `bearer${token}`,
        }});
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
      const apiBody = data.responeBody;
      return apiBody; // Extract the relevant data
      console.log(apiBody);
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const onlineUsersSlice = createSlice({
  name: "onlineUsers",
  initialState: {
    data: 0,
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnlineUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOnlineUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchOnlineUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default onlineUsersSlice.reducer;