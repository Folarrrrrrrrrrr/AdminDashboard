import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://stake-cut-api.onrender.com/api/v1/admin/dashboard/dashboard-data";

export const fetchRevenue = createAsyncThunk(
  "Revenue/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const Revenue = await response.json();
      console.log(Revenue)
      return Revenue.responseBody;
    } catch (error) {
      console.log("Error fetching revenue data:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const RevenueSlice = createSlice({
  name: "Revenue",
  initialState: {
    Revenue: {
      dailyRevenue:0,
      monthlyEarnings:0,
      totalBetsPlaced:  10900,
      totalUsers: 33,
      Revenue:[]
    },
    RevenueLoading: false,
    RevenueError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevenue.pending, (state) => {
        state.RevenueLoading = true;
        state.RevenueError = null;
      })
      .addCase(fetchRevenue.fulfilled, (state, action) => {
        state.RevenueLoading = false;
        state.Revenue = action.payload;
      })
      .addCase(fetchRevenue.rejected, (state, action) => {
        state.RevenueLoading = false;
        state.RevenueError = action.payload;
      });
  },
});

export default RevenueSlice.reducer;
