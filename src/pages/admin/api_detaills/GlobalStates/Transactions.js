import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk(
  "Transactions/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      console.log(accessToken);
      if (!accessToken) {
        throw new Error("No access token found");
      }
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/users/all-transactions`,
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

      const TransactionsData = await response.json();
      // console.log(TransactionsData)
      return TransactionsData.responseBody;
    } catch (error) {
      console.log("Error fetching Transactions:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const TtransactionSlice = createSlice({
  name: "TransactionsList",
  initialState: {
    TransactionsData: [],
    Transactionsloading: false,
    TransactionsDataError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.Transactionsloading = true;
        state.TransactionsDataError = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.Transactionsloading = false;
        state.TransactionsData = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.Transactionsloading = false;
        state.TransactionsDataError = action.payload;
      });
  },
});

export default TtransactionSlice.reducer;
