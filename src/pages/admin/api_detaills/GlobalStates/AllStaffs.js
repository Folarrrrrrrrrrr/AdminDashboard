import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching all staff data with authorization
export const fetchAllStaffs = createAsyncThunk(
    "WeeklyPerformance/fetch",
    async (_, { rejectWithValue, getState }) => {
        try {
            // Retrieve token from Redux state or localStorage
            // const token = getState().auth?.token || localStorage.getItem("accessToken");
            // console.log(token);

            const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch('http://stake-cut-api.onrendercom/api/v1/admin/staff/get-all-staffs', {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const AllStaffsData = await response.json();
            console.log(AllStaffsData.responseBody);
            
            return AllStaffsData.responseBody.staffs; // Extract the relevant data
        } catch (error) {
            console.error(error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Slice for managing staff data
const AllStaffsDataSlice = createSlice({
    name: "AllStaffsList",
    initialState: {
        AllStaffsData: [],
        AllStaffsDataLoading: false,
        AllStaffsDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllStaffs.pending, (state) => {
                state.AllStaffsDataLoading = true;
                state.AllStaffsDataError = null;
            })
            .addCase(fetchAllStaffs.fulfilled, (state, action) => {
                state.AllStaffsDataLoading = false;
                state.AllStaffsData = action.payload;
            })
            .addCase(fetchAllStaffs.rejected, (state, action) => {
                state.AllStaffsDataLoading = false;
                state.AllStaffsDataError = action.payload;
            });
    },
});

export default AllStaffsDataSlice.reducer;
