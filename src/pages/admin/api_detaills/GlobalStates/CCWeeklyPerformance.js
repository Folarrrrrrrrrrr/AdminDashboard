import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCCWeeklyPerformance = createAsyncThunk(
  "WeeklyPerformance/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(
        "https://stake-cut-api.onrender.com/customer-care-admin/api/top-performing-agents",
        {
          method: "GET",
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const CCPerformanceData = await response.json();
      return CCPerformanceData.responseBody;
    } catch (error) {
      console.log("Fetch Weekly Performance Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const CCPerformanceSlice = createSlice({
  name: "CCPerformanceList",
  initialState: {
    CCPerformanceData: [],
    CCPerformanceLoading: false,
    CCPerformanceError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCCWeeklyPerformance.pending, (state) => {
        state.CCPerformanceLoading = true;
        state.CCPerformanceError = null;
      })
      .addCase(fetchCCWeeklyPerformance.fulfilled, (state, action) => {
        state.CCPerformanceLoading = false;
        state.CCPerformanceData = action.payload;
      })
      .addCase(fetchCCWeeklyPerformance.rejected, (state, action) => {
        state.CCPerformanceLoading = false;
        state.CCPerformanceError = action.payload;
      });
  },
});

export default CCPerformanceSlice.reducer;
