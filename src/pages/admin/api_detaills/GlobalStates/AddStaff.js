import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 Async thunk for submitting query resolution
export const addStaffReducer = createAsyncThunk(
  "addStaff/post",
  async (payload, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const RESOLUTION_API_URL = `${API_BASE_URL}/staffs/add-staff`;

      const response = await fetch(RESOLUTION_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        // body: resolutionData,
      });

      // Read response once
    let responseData;
    try {
    responseData = await response.json();
    } catch (err) {
    responseData = null; // Handle cases where response isn't JSON
    }

    if (!response.ok) {
    console.error("API Error Response:", responseData);
    throw new Error(
        `Failed to add staff: ${response.status} ${response.statusText} - ${JSON.stringify(responseData)}`
    );
    }
      //  responseData = await response.json();
      return responseData.statusText;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔹 Slice for managing query data
const addStaffSlice = createSlice({
  name: "AddStaff",
  initialState: {
    ResolutionSubmissionLoading: false,
    ResolutionSubmissionError: null,
    ResolutionSubmissionSuccess: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Resolution Submission
      .addCase(addStaffReducer.pending, (state) => {
        state.ResolutionSubmissionLoading = true;
        state.ResolutionSubmissionError = null;
        state.ResolutionSubmissionSuccess = null;
      })
      .addCase(addStaffReducer.fulfilled, (state, action) => {
        state.ResolutionSubmissionLoading = false;
        state.ResolutionSubmissionSuccess = "Resolution submitted successfully!";
      })
      .addCase(addStaffReducer.rejected, (state, action) => {
        state.ResolutionSubmissionLoading = false;
        state.ResolutionSubmissionError = action.payload;
      });
  },
});

export default addStaffSlice.reducer;
