import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDiceSummary = createAsyncThunk(
  "diceSummary/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/games/dice/dice-summary`;

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

      const data = await response.json();
      console.log(data);
      return data.responeBody;
    } catch (error) {
      console.log("Fetch Dice Summary Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const diceSummarySlice = createSlice({
  name: "diceSummary",
  initialState: {
    data: {
      totalBetPlaced: 10,
      totalPlayers: 10,
      totalWinners: 10,
      totalLosers: 10,
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiceSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDiceSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDiceSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default diceSummarySlice.reducer;
