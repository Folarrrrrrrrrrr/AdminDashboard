import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://stake-cut-api.onrender.com/api/v1/admin/footsoldier/footsoldiers-payments";

export const fetchFootSolidersPaymentsAnalysis = createAsyncThunk(
  "fetchFootSolidersPaymentsAnalysis/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const footSoldierPaymentsData = await response.json();
      return footSoldierPaymentsData.responseBody;
    } catch (error) {
      console.log("Fetch Foot Soldiers Payments Analysis Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const footSoldierPaymentsSlice = createSlice({
  name: "FootSoldiersPaymentsAnalysis",
  initialState: {
    footSoldierPaymentsData: [],
    footSoldierPaymentsLoading: false,
    footSoldierPaymentsError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootSolidersPaymentsAnalysis.pending, (state) => {
        state.footSoldierPaymentsLoading = true;
        state.footSoldierPaymentsError = null;
      })
      .addCase(fetchFootSolidersPaymentsAnalysis.fulfilled, (state, action) => {
        state.footSoldierPaymentsLoading = false;
        state.footSoldierPaymentsData = action.payload;
      })
      .addCase(fetchFootSolidersPaymentsAnalysis.rejected, (state, action) => {
        state.footSoldierPaymentsLoading = false;
        state.footSoldierPaymentsError = action.payload;
      });
  },
});

export default footSoldierPaymentsSlice.reducer;
