import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"

// Async thunk for fetching dice summary data
export const fetchWinningDiceBetList = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/dice-winning`;

      const response = await fetch(API_URL,{
        headers:`bearer${token}`,
      });
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const Winningdata = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return Winningdata.responseBody; // Extract the relevant data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const WinningDiceBetsSlice = createSlice({
  name: "WinningDiceBetsList",
  initialState: {
    winningdata: [{
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

    winningLoading: false,
    winningError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWinningDiceBetList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWinningDiceBetList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWinningDiceBetList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default WinningDiceBetsSlice.reducer;
