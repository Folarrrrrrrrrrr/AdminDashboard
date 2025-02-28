import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://stake-cut-api.onrender.com/api/v1/admin/games/sports/football/football-bet-list";

export const fetchFootballBetList = createAsyncThunk(
  "FootballBetsList/fetch",
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

      const footballBetsList = await response.json();
      return footballBetsList.responseBody;
    } catch (error) {
      console.log("Fetch Football Bets List Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const FootballBetListsSlice = createSlice({
  name: "FootballBetsList",
  initialState: {
    footballBetsList: [],
    footballBetsListLoading: false,
    footballBetsListError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballBetList.pending, (state) => {
        state.footballBetsListLoading = true;
        state.footballBetsListError = null;
      })
      .addCase(fetchFootballBetList.fulfilled, (state, action) => {
        state.footballBetsListLoading = false;
        state.footballBetsList = action.payload;
      })
      .addCase(fetchFootballBetList.rejected, (state, action) => {
        state.footballBetsListLoading = false;
        state.footballBetsListError = action.payload;
      });
  },
});

export default FootballBetListsSlice.reducer;
