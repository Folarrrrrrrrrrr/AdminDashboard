import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://stake-cut-api.onrender.com/api/v1/admin/games/sports/football/football-summary";

export const fetchFootballBetSummary = createAsyncThunk(
  "FootballBetsSummary/fetch",
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

      const footballSummary = await response.json();
      return footballSummary.responseBody;
    } catch (error) {
      console.log("Fetch Football Bet Summary Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const FootballSummarySlice = createSlice({
  name: "footballBetSummary",
  initialState: {
    FootballSummary: {
      totalBetPlaced: 0,
      totalPlayers: 0,
      totalWinners: 0,
      totalLosers: 0,
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
