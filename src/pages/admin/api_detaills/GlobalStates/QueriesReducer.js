import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// Async thunk for fetching dice summary data
export const fetchQuerySummary= createAsyncThunk(
  "QuerySummary/fetch",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/query/query-summary?page=${page}&limit=${limit}`;

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const QuerySummaryData = await response.json();
      console.log(QuerySummaryData);
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
