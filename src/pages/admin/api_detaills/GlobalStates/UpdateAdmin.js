import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateAdminProfile = createAsyncThunk(
  "admin/updateProfile",
  async ({ email, fullName, phone }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const API_URL = `https://stake-cut-api.onrender.com/api/v1/admin/users/update-profile/${email}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullname: fullName,
          phone_number: phone,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.responseBody;

    } catch (error) {
      console.error("Error updating profile:", error);
      return rejectWithValue(error.message);
    }
  }
);


const adminProfileSlice = createSlice({
    name: "adminProfile",
    initialState: {
      adminProfile: null,
      adminProfileLoading: false,
      adminProfileError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updateAdminProfile.pending, (state) => {
          state.adminProfileLoading = true;
          state.adminProfileError = null;
        })              
        .addCase(updateAdminProfile.fulfilled, (state, action) => {
          state.adminProfileLoading = false;
          state.profile = action.payload;
        })
        .addCase(updateAdminProfile.rejected, (state, action) => {
          state.adminProfileLoading = false;
          state.adminProfileError = action.payload;
        });
    },
  });
  
  export default adminProfileSlice.reducer;
  