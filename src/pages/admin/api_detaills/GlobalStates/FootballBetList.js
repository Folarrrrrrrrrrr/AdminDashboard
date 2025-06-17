import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFootballBetList = createAsyncThunk(
  "FootballBetsList/fetch",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
      const API_URL = `${API_BASE_URL}/games/sports/football/football-bet-list?page=${page}&limit=${limit}`;
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
      return {
        data: footballBetsList.responseBody,
        pagination: footballBetsList.pagination,
      };
    } catch (error) {
      console.log("Fetch Football Bets List Error:", error.message);
      return rejectWithValue({ message: error.message, status: error.response?.status });
    }
  }
);

const FootballBetListsSlice = createSlice({
  name: "FootballBetsList",
   initialState: {
    footballBetsList: [],
    pagination: { page: 1, limit: 10, total: 0 },
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
        state.footballBetsList = action.payload.data;
      })
      .addCase(fetchFootballBetList.rejected, (state, action) => {
        state.footballBetsListLoading = false;
        state.footballBetsListError = action.payload;
      });
  },
});

export default FootballBetListsSlice.reducer;
