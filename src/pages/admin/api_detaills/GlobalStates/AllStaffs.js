import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "http://white-house-api.onrender.com//api/v1/admin/get-all-staffs";

// Async thunk for fetching dice summary data
export const fetchAllStaffs = createAsyncThunk(
    "WeeklyPerformance/fetch",
    async (_, { rejectWithValue }, id = '') => {
        try {
            const response = await fetch('https://white-house-api.onrender.com/api/v1/admin/get-all-staffs');
            // console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const AllStaffsData = await response.json();
            // console.log(data);

            // console.log(data.responseBody);
            return AllStaffsData.responseBody.staffs; // Extract the relevant data

        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Slice for managing dice summary
const AllStaffsDataSlice = createSlice({
    name: "AllStaffsList",
    initialState: {
        AllStaffsData: 
             [
                    {
                        "fullname": "Faruq Abiodun",
                        "email": "faruqhassan176@gmail.com",
                        "phone_number": "",
                        "photo": "",
                        "country": "",
                        "status": "active",
                        "designation": "support-agent"
                    },
                ],
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
