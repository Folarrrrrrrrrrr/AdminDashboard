import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// Async thunk for fetching dice summary data
export const fetchOnlinePlayers= createAsyncThunk(
  "OnlinePlayers/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/users/online-players`;

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const OnlinePlayers = await response.json();
      console.log(OnlinePlayers);
      // console.log(data.responseBody);
      return OnlinePlayers.responseBody; // Extract the relevant data
    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const OnlinePlayersSlice= createSlice({
  name: "OnlinePlayers",
  initialState: {
    OnlinePlayers:{
      
    },
    OnlinePlayersLoading: false,
    OnlinePlayersError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnlinePlayers.pending, (state) => {
        state.OnlinePlayersLoading = true;
        state.OnlinePlayersError = null;
      })
      .addCase(fetchOnlinePlayers.fulfilled, (state, action) => {
        state.OnlinePlayersLoading = false;
        state.OnlinePlayers = action.payload;
      })
      .addCase(fetchOnlinePlayers.rejected, (state, action) => {
        state.OnlinePlayersLoading = false;
        state.OnlinePlayersError = action.payload;
      });
  },
});

export default OnlinePlayersSlice.reducer;
