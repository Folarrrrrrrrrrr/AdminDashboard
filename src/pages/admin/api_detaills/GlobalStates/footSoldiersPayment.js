import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFootSolidersPayments = createAsyncThunk(
  "FootSolidersProfile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/footsoldier/footsoldiers-payments`;

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
      console.log("Fetch Foot Soldiers Payments Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const footSoldierPaymentsSlice = createSlice({
  name: "FootSoldiersPayments",
  initialState: {
    footSoldierPaymentsData: [],
    footSoldierPaymentsLoading: false,
    footSoldierPaymentsError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootSolidersPayments.pending, (state) => {
        state.footSoldierPaymentsLoading = true;
        state.footSoldierPaymentsError = null;
      })
      .addCase(fetchFootSolidersPayments.fulfilled, (state, action) => {
        state.footSoldierPaymentsLoading = false;
        state.footSoldierPaymentsData = action.payload;
      })
      .addCase(fetchFootSolidersPayments.rejected, (state, action) => {
        state.footSoldierPaymentsLoading = false;
        state.footSoldierPaymentsError = action.payload;
      });
  },
});

export default footSoldierPaymentsSlice.reducer;