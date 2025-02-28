import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFootSoldiersSummary = createAsyncThunk(
  "footSoldiersSummary/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      console.log(accessToken);
      
      const response = await fetch('https://stake-cut-api.onrender.com/api/v1/admin/footsoldier/footsoldier-summary', {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      //   headers: {
      //     Authorization: `Bearer ${getToken()}`
      // }

      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const footSoldiersSummaryData = await response.json();
      return footSoldiersSummaryData.responseBody;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const footSoldiersSummarySlice = createSlice({
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
        state.footSoldiersSummaryerror = action.payload;
      });
  },
});

export default footSoldiersSummarySlice.reducer;
