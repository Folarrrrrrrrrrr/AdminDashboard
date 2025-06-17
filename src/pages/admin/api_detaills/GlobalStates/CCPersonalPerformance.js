import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCCWeeklyPerformance = createAsyncThunk(
  "WeeklyPerformance/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      
      const CC_BASE_URL = import.meta.env.VITE_CC_BASE_URL;
      const response = await fetch(`${CC_BASE_URL}/top-performing-agents`,
        {
          method: "GET",
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
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
    CCPerformanceData: [
      {
        agentName: "Faruq Abiodun",
        resolvedCount: 20,
        queries: [
          { type: "In-app-message", count: 20 },
          { type: "Calls", count: 0 },
          { type: "Msg", count: 0 },
        ],
      },
    ],
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
