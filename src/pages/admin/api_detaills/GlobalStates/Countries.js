import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching all staff data with authorization
export const fetchCountries = createAsyncThunk(
    "Countries/fetch",
    async (_, { rejectWithValue, getState }) => {
        try {
            // Retrieve token from Redux state or localStorage
            // const token = getState().auth?.token || localStorage.getItem("accessToken");
            // console.log(token);

            const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/users/registered-countries`, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const CountriesData = await response.json();
            console.log(CountriesData.responseBody);
            
            return CountriesData.responseBody; // Extract the relevant data
        } catch (error) {
            console.error(error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Slice for managing staff data
const CountriesSlice = createSlice({
    name: "AllStaffsList",
    initialState: {
        CountriesData: [],
        CountriesDataLoading: false,
        CountriesDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.CountriesDataLoading = true;
                state.CountriesDataError = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.CountriesDataLoading = false;
                state.CountriesData = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.CountriesDataLoading = false;
                state.CountriesDataError = action.payload;
            });
    },
});

export default CountriesSlice.reducer;
