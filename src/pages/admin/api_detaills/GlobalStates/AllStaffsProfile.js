import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStaffDetails = createAsyncThunk(
    "StaffProfile/fetch",
    async (email, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("token");
            
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/staffs/get-staff-details/${email}`, {
                method: "GET",
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const StaffProfileData = await response.json();
            console.log(StaffProfileData)
            return StaffProfileData.responseBody;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

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
