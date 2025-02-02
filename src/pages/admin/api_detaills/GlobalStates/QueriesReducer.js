import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "https://white-house-api.onrender.com/api/v1/admin/dice-bet-list";

// Async thunk for fetching dice summary data
export const fetchQuerySummary= createAsyncThunk(
  "QuerySummary/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://white-house-api.onrender.com/customer-care-admin/api/query-summary');
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const QuerySummaryData = await response.json();
      // console.log(data);
      // console.log(data.responseBody);
      return QuerySummaryData.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const QuerySummarySlice= createSlice({
  name: "FootSoldiersPayments",
  initialState: {
    QuerySummaryData:{
        "totalQueries": 27,
        "pendingQueries": 4,
        "closedQueries": 0,
        "allQueries": [
          {
            "ticket_id": "WH-JOQ07HB9",
            "category": "Transaction",
            "username": "",
            "query": "My baby girl looks so pretty today !",
            "file": "",
            "status": "pending",
            "query_type_name": "In-app-message"
          },
        ]
    },

    QuerySummaryDataLoading: false,
    QuerySummaryDataError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuerySummary.pending, (state) => {
        state.QuerySummaryDataLoading = true;
        state.QuerySummaryDataError = null;
      })
      .addCase(fetchQuerySummary.fulfilled, (state, action) => {
        state.QuerySummaryDataLoading = false;
        state.QuerySummaryData = action.payload;
      })
      .addCase(fetchQuerySummary.rejected, (state, action) => {
        state.QuerySummaryDataLoading = false;
        state.QuerySummaryDataError = action.payload;
      });
  },
});

export default QuerySummarySlice.reducer;
