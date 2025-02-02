import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import DiceSummaries from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/dice-summary";

// Async thunk for fetching dice summary data
export const fetchDiceSummary = createAsyncThunk(
  "diceSummary/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
      const apiBody = data.responeBody;
      return apiBody; // Extract the relevant data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
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
