import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "http://white-house-api.onrender.com//api/v1/admin/get-all-staffs";
// Async thunk for fetching dice summary data
 

export const fetchStaffDetails = createAsyncThunk(
    "StaffProfile/fetch",
    async ( email, _) => {
        try {
            const response = await fetch(`https://white-house-api.onrender.com/api/v1/admin/get-staff-details/${email}`);
            // console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const StaffProfileData = await response.json();
            // console.log(data);

            // console.log(data.responseBody);
            return StaffProfileData.responseBody; // Extract the relevant data

        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

// Slice for managing dice summary
const StaffProfileSlice = createSlice({
    name: "StaffProfile",
    initialState: {
        StaffProfileData: [{
            "fullname": "Faruq Abiodun FO",
            "email": "faruqhassan176@gmail.com",
            "phone_number": "",
            "photo": "",
            "country": "",
            "status": "active",
            "designation": "support-agent",
            "bankDetails": null
        }],
        StaffProfileDataLoading: false,
        StaffProfileDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStaffDetails.pending, (state) => {
                state.StaffProfileDataLoading = true;
                state.StaffProfileDataError = null;
            })
            .addCase(fetchStaffDetails.fulfilled, (state, action) => {
                state.StaffProfileDataLoading = false;
                state.StaffProfileData = action.payload;
            })
            .addCase(fetchStaffDetails.rejected, (state, action) => {
                state.StaffProfileDataLoading = false;
                state.StaffProfileDataError = action.payload;
            });
    },
});

export default StaffProfileSlice.reducer;
