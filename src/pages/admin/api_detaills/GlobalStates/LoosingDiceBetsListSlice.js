import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLoosingDiceBetList = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/games/dice/dice-loosing-bets`;
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const losingData = await response.json();
      return losingData.responseBody;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const LoosingDiceBetsSlice = createSlice({
  name: "LoosingDiceBetsList",
  initialState: {
    losingdata: [
      {
        id: "",
        bet_id: "",
        user_id: "",
        game: "",
        bet_Type: "",
        amount_staked: "",
        players_in_game: "",
        status: "",
        Winners: "",
        timestamp: "",
        action: "",
        createdAt: "2024-12-05T14:16:52.000Z",
        updatedAt: "2024-12-05T14:16:52.000Z",
      },
    ],
    losingLoading: false,
    losingError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoosingDiceBetList.pending, (state) => {
        state.losingLoading = true;
        state.losingError = null;
      })
      .addCase(fetchLoosingDiceBetList.fulfilled, (state, action) => {
        state.losingLoading = false;
        state.losingdata = action.payload;
      })
      .addCase(fetchLoosingDiceBetList.rejected, (state, action) => {
        state.losingLoading = false;
        state.losingError = action.payload;
      });
  },
});

export default LoosingDiceBetsSlice.reducer;
