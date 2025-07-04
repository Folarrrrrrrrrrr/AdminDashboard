import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// Async thunk for fetching dice summary data
export const deleteStaff= createAsyncThunk(
  "OnlinePlayers/fetch",
  async (email, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/staffs/delete-staff/${email}`;

      const response = await fetch(API_URL, {
        method: "DELETE",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const DeleteStaff = await response.json();
      console.log(DeleteStaff);
      // console.log(data.responseBody);
      return DeleteStaff.responseBody; // Extract the relevant data
    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing deletinig staff
const initialState = {
  loading: false,
  error: null,
  deletedEmail: null,
};

const DeleteStaffSlice= createSlice({
  name: "DeleteStaff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteStaff.pending, (state) => {
        state.DeleteStaffLoading = true;
        state.DeleteStaffError = null;
      })
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state.DeleteStaffLoading = false;
        state.DeleteStaff = action.payload;
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        state.DeleteStaffLoading = false;
        state.DeleteStaffError = action.payload;
      });
  },
});

export default DeleteStaffSlice.reducer;
