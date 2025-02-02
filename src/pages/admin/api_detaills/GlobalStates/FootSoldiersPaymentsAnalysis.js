import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "http://white-house-api.onrender.com/api/v1/admin/dice-bet-list";

// Async thunk for fetching dice summary data
export const fetchFootSolidersPaymentsAnalysis= createAsyncThunk(
  "fetchFootSolidersPaymentsAnalysis/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://white-house-api.onrender.com/api/v1/admin/footsoldiers-payments');
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const footSoldierPaymentsData = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return footSoldierPaymentsData.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const footSoldierPaymentsSlice= createSlice({
  name: "FootSoldiersPayments",
  initialState: {
    footSoldierPaymentsData: [
        {
            "refNumber": "WHC34678901221",
            "dateTime": "2024-11-12 11:35:27",
            "footSoldier": null,
            "userOnboarded": null,
            "amountPaid": "5000.00",
            "paymentType": "withdraw",
            "successful": "success",
            "filters": {}
        }
  ],

  footSoldierPaymentsloading: false,
  footSoldierPaymentserror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootSolidersPayments.pending, (state) => {
        state.footSoldierPaymentsloading = true;
        state.footSoldierPaymentserror = null;
      })
      .addCase(fetchFootSolidersPayments.fulfilled, (state, action) => {
        state.FootSolidersProfileloading = false;
        state.footSoldierPaymentsData = action.payload;
      })
      .addCase(fetchFootSolidersPayments.rejected, (state, action) => {
        state.footSoldierPaymentsloading = false;
        state.footSoldierPaymentserror = action.payload;
      });
  },
});

export default footSoldierPaymentsSlice.reducer;
