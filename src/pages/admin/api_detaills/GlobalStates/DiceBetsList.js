import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDiceBetList = createAsyncThunk(
  "DiceBetsList/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(
        "https://stake-cut-api.onrender.com/api/v1/admin/games/dice/dice-bet-list",
        {
          method: "GET",
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const DiceBetsdata = await response.json();
      // console.log(DiceBetsdata)
      return DiceBetsdata.responseBody;
    } catch (error) {
      console.log("Fetch Dice Bet List Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const DiceBetsSlice = createSlice({
  name: "DiceBetsList",
  initialState: {
    DiceBetsdata: [],
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
