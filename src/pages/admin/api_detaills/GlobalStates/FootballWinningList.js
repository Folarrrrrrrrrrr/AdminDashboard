
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/football-winning-bets";


// Async thunk for fetching dice summary data
export const fetchFootballWinningDiceBet = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const FootballWinningdata = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return FootballWinningdata.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message); 
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const FootballWinningBetsSlice = createSlice({
  name: "WinningDiceBetsList",
  initialState: {
    FootballWinningdata: [{
      id: '',
      bet_id: '',
      user_id: '',
      game: "",
      bet_Type:"",
      amount_staked: "",
      players_in_game: '',
      status:"",
      Winners: "",
      timestamp: "",
      action: "",
      createdAt: "2024-12-05T14:16:52.000Z",
      updatedAt: "2024-12-05T14:16:52.000Z",
    }],

    FootballWinningLoading: false,
    FootballWinningError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballWinningDiceBet.pending, (state) => {
        state.FootballWinningLoading = true;
        state.FootballWinningError = null;
      })
      .addCase(fetchFootballWinningDiceBet.fulfilled, (state, action) => {
        state.FootballWinningLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchFootballWinningDiceBet.rejected, (state, action) => {
        state.FootballWinningLoading = false;
        state.FootballWinningError = action.payload;
      });
  },
});

export default FootballWinningBetsSlice.reducer;
