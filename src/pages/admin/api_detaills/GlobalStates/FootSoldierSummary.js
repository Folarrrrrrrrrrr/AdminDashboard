import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "https://white-house-api.onrender.com/api/v1/admin/dice-bet-list";

// Async thunk for fetching dice summary data
export const fetchFootSoldiersSummary= createAsyncThunk(
  "footSoldiersSummary/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://white-house-api.onrender.com/api/v1/admin/footsoldier-summary');
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const footSoldiersSummaryData = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return footSoldiersSummaryData.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const footSoldiersSummarySlice= createSlice({
  name: "FootSoldiersPayments",
  initialState: {
    footSoldiersSummaryData: {
        "AllFootSoldiers": 0,
        "PendingRequests": 3,
        "UsersFromFootSoldiers": 2,
        "AmountPaidToSoldiers": 5000,
        "RecentlyOnboardedUsers": [
            {
                "date": null,
                "userId": "Allied",
                "footSoldiers": "Damisola Adeshina",
                "status": "pending"
            },
            {
                "date": null,
                "userId": "Certain",
                "footSoldiers": "Damisola Adeshina",
                "status": "pending"
            }
        ],
        "TotalTransactions": 1,
        "RegisteredCountries": 0
    },

  footSoldiersSummaryloading: false,
  footSoldiersSummaryerror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootSoldiersSummary.pending, (state) => {
        state.footSoldiersSummaryloading = true;
        state.footSoldiersSummaryerror = null;
      })
      .addCase(fetchFootSoldiersSummary.fulfilled, (state, action) => {
        state.footSoldiersSummaryloading = false;
        state.footSoldiersSummaryData = action.payload;
      })
      .addCase(fetchFootSoldiersSummary.rejected, (state, action) => {
        state.footSoldiersSummaryloading = false;
        state.footSoldierPaymentserror = action.payload;
      });
  },
});

export default footSoldiersSummarySlice.reducer;
