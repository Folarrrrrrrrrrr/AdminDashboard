import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = "https://white-house-api.onrender.com/api/v1/admin/football-bet-list";

// Async thunk for fetching dice summary data
export const fetchFootballBetList = createAsyncThunk(
  "FootballBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const footballBetsList = await response.json();
      console.log(footballBetsList);

      // console.log(data.responseBody);
      return footballBetsList.responseBody; // Extract the relevant data
    } catch (error) {      
      console.log(error.message); 
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const FootballBetListsSlice = createSlice({
  name: "FootBetsList",
  initialState: {
    footballBetsList: [
        {
          id: 44,
          user_id: 17,
          opponent_id: null,
          ticket_id: "98XLL7I2A1",
          game: "football",
          players_in_game: null,
          amount: "50000",
          leagueid: "1005",
          matchid: "4107396",
          team: "away",
          type: "win",
          status: "closed",
          createdAt: "2024-12-10T14:42:59.000Z",
          updatedAt: "2024-12-11T11:57:41.000Z"
        },
        {
          id: 44,
          user_id: 17,
          opponent_id: null,
          ticket_id: "98XLL7I2A1",
          game: "football",
          players_in_game: null,
          amount: "50000",
          leagueid: "1005",
          matchid: "4107396",
          team: "away",
          type: "win",
          status: "closed",
          createdAt: "2024-12-10T14:42:59.000Z",
          updatedAt: "2024-12-11T11:57:41.000Z"
        }
  ],

  footballBetsListloading: false,
  footballBetsListerror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootballBetList.pending, (state) => {
        state.footballBetsListloading = true;
        state.footballBetsListerror = null;
      })
      .addCase(fetchFootballBetList.fulfilled, (state, action) => {
        state.footballBetsListloading = false;
        state.footballBetsList = action.payload;
      })
      .addCase(fetchFootballBetList.rejected, (state, action) => {
        state.footballBetsListloading = false;
        state.footballBetsListerror = action.payload;


      });
  },
});

export default FootballBetListsSlice.reducer;
