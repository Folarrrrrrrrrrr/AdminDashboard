import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/users/country/nigeria";

// Async thunk for fetching dice summary data
export const fetchNigerianUsers = createAsyncThunk(
  "NigerianUsers/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      
      return data.responeBody; // Extract the relevant data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const NigerianUsersSlice = createSlice({
  name: "NigerianUsers",
  initialState: {
    data: {
      statistics:{},
      users:{},
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNigerianUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNigerianUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNigerianUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default NigerianUsersSlice.reducer;
