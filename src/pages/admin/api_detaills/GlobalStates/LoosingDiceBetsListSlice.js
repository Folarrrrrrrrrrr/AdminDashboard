import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/dice-loosing-bets";

// Async thunk for fetching dice summary data
export const fetchLoosingDiceBetList = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const losingData = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return losingData.responseBody; // Extract the relevant data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const LoosingDiceBetsSlice = createSlice({
  name: "LoosingDiceBetsList",
  initialState: {
    losingdata: [{
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

    losingLoading: false,
    losingError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoosingDiceBetList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoosingDiceBetList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLoosingDiceBetList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default LoosingDiceBetsSlice.reducer;
