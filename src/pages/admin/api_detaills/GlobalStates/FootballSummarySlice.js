import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/football-summary";

// Async thunk for fetching dice summary data
export const fetchFootballBetSummary = createAsyncThunk(
  "FootballBetsSummary/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const FootballSummary = await response.json();
      console.log(FootballSummary);
     
      // console.log(data.responseBody);
      return FootballSummary.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
// Slice for managing dice summary
const FootballSummarySlice = createSlice({
  name: "footballBetSummary",
  initialState: {
    FootballSummary: {
        "totalBetPlaced": 0,
        "totalPlayers": 0,
        "totalWinners": 0,
        "totalLosers": 0
    },

    FootballSummaryLoading: false,
    FootballSummaryError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballBetSummary.pending, (state) => {
        state.FootballSummaryLoading = true;
        state.FootballSummaryError = null;
      })
      .addCase(fetchFootballBetSummary.fulfilled, (state, action) => {
        state.FootballSummaryLoading = false;
        state.FootballSummary = action.payload;
      })
      .addCase(fetchFootballBetSummary.rejected, (state, action) => {
        state.FootballSummaryLoading = false;
        state.FootballSummaryError = action.payload;
      });
  },
});

export default FootballSummarySlice.reducer;
