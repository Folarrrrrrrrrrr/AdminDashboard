import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFootballBetDetails = createAsyncThunk(
    "QueryDetetails/fetch",
    async (ticket_id, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            // const response = await fetch(`https://stay-cut-api.onrender.com/api/v1/admin/query/get-query-details/${ticket_id}`, {
                // console.log(token);
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/games/sports/football/game-summary/${ticket_id}`, {
                method: "GET",
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const betDetailsData = await response.json();
            console.log(betDetailsData)
            return betDetailsData.responseBody;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

const BetDetailsSlice = createSlice({
    name: "StaffProfile",
    initialState: {
        betDetailsData:{
              "players": {
                "user": {
                  "username": "mitchel_pfeffer8",
                  "isWinner": true
                },
                "opponent": {
                  "username": "arlo_powlowski",
                  "isWinner": false
                }
              },
              "gameSummary": {
                "betType": "Shots Total",
                "gameStatus": "closed",
                "staked": "500",
                "players": null,
                "winner": "mitchel_pfeffer8",
                "time": "12:31:01",
                "Date": "11/03/2025"
              }
        },
        betDetailsDataLoading: false,
        betDetailsDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFootballBetDetails.pending, (state) => {
                state.betDetailsDataLoading = true;
                state.betDetailsDataError = null;
            })
            .addCase(fetchFootballBetDetails.fulfilled, (state, action) => {
                state.betDetailsDataLoading = false;
                state.betDetailsData = action.payload;
            })
            .addCase(fetchFootballBetDetails.rejected, (state, action) => {
                state.betDetailsDataLoading = false;
                state.betDetailsDataError = action.payload;
            });
    },
});

export default BetDetailsSlice.reducer;
