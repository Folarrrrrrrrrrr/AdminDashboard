import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import DiceSummaries from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/total-online-users";

// Async thunk for fetching dice summary data
export const fetchOnlineUsers = createAsyncThunk(
  "onlineUsers/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
      const apiBody = data.responeBody;
      return apiBody; // Extract the relevant data
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
