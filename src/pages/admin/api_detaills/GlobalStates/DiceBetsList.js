import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "http://white-house-api.onrender.com/api/v1/admin/dice-bet-list";

// Async thunk for fetching dice summary data
export const fetchDiceBetList = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://white-house-api.onrender.com/api/v1/admin/dice-bet-list');
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const DiceBetsdata = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return DiceBetsdata.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const DiceBetsSlice = createSlice({
  name: "DiceBetsList",
  initialState: {
    DiceBetsdata: [
      {
      id: '',
      bet_id: '',
      user_id: '',
      game: "",
      bet_Type:"",
      amount_staked: "",
      players_in_game: '55',
      status:"",
      Winners: "",
      timestamp: "",
      action: "",
      createdAt: "2024-12-05T14:16:52.000Z",
      updatedAt: "2024-12-05T14:16:52.000Z",
    },
    {
      id: '',
      bet_id: '',
      user_id: '',
      game: "",
      bet_Type:"",
      amount_staked: "",
      players_in_game: '55',
      status:"",
      Winners: "",
      timestamp: "",
      action: "",
      createdAt: "2024-12-05T14:16:52.000Z",
      updatedAt: "2024-12-05T14:16:52.000Z",
    },
  ],

  DiceBetsloading: false,
  DiceBetserror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiceBetList.pending, (state) => {
        state.DiceBetsloading = true;
        state.DiceBetserror = null;
      })
      .addCase(fetchDiceBetList.fulfilled, (state, action) => {
        state.DiceBetsloading = false;
        state.DiceBetsdata = action.payload;
      })
      .addCase(fetchDiceBetList.rejected, (state, action) => {
        state.DiceBetsloading = false;
        state.DiceBetserror = action.payload;
      });
  },
});

export default DiceBetsSlice.reducer;
