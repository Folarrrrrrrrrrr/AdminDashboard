import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "http://white-house-api.onrender.com/api/v1/admin/dice-bet-list";

// Async thunk for fetching dice summary data
export const fetchCCWeeklyPerformance = createAsyncThunk(
  "WeeklyPerformance/fetch",
  async ( _, { rejectWithValue}) => {
    try {
      const response = await fetch('https://white-house-api.onrender.com/customer-care-admin/api/top-performing-agents');
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const CCPerformanceData = await response.json();
      // console.log(data);
     
      console.log(CCPerformanceData);

      return CCPerformanceData.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);      
      // return rejectWithValue(error.message);
      return (error.message);
    }
  }
);

// Slice for managing dice summary
const CCPerformanceSlice = createSlice({
  name: "CCPerformanceList",
  initialState: {
    CCPerformanceData: [
      {
        "agentName": "Faruq Abiodun",
        "resolvedCount": 20,
        "queries": [
          {
            "type": "In-app-message",
            "count": 20
          },
          {
            "type": "Calls",
            "count": 0
          },
          {
            "type": "Msg",
            "count": 0
          }
        ]
      }
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
