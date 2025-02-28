import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQueryDetails = createAsyncThunk(
    "QueryDetetails/fetch",
    async (ticket_id, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            // const response = await fetch(`https://stay-cut-api.onrender.com/api/v1/admin/query/get-query-details/${ticket_id}`, {
                console.log(token);
                
            const response = await fetch(`https://stake-cut-api.onrender.com/api/v1/admin/query/get-query-details?ticket_id=${ticket_id}`, {
                method: "GET",
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const queryDetailsData = await response.json();
            console.log(queryDetailsData)
            return queryDetailsData.responseBody;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

const QueryDetailsSlice = createSlice({
    name: "StaffProfile",
    initialState: {
        queryDetailsData:{
            "userDetails": [
                {
                    "username": "Melodic",
                    "email": "faruqhassan176@gmail.com",
                    "phone": "2348114528984",
                    "status": "active",
                    "profile_picture": "https://drive.google.com/file/d/1cpRLKs7C6QlugLYYsJ8VlXEdf_HU8J8q/view?usp=drive_link"
                }
            ],
            "customerCareAgentDetails": [
                {
                    "fullname": "Adebanke Davins",
                    "phone_number": "09075635288",
                    "email": "admin@gmail.com",
                    "status": "active"
                }
            ],
            "queries": [
                {
                    "id": 48,
                    "user_id": 1,
                    "ticket_id": "WH-V19OEbbEU",
                    "category": "Billing",
                    "username": "Farex",
                    "query": "I funded my account and the money did not reflect",
                    "file": "",
                    "status": "resolved",
                    "query_type_name": "In-app-message"
                }
            ]
        },
        queryDetailsDataLoading: false,
        queryDetailsDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQueryDetails.pending, (state) => {
                state.queryDetailsDataLoading = true;
                state.queryDetailsDataError = null;
            })
            .addCase(fetchQueryDetails.fulfilled, (state, action) => {
                state.queryDetailsDataLoading = false;
                state.queryDetailsData = action.payload;
            })
            .addCase(fetchQueryDetails.rejected, (state, action) => {
                state.queryDetailsDataLoading = false;
                state.queryDetailsDataError = action.payload;
            });
    },
});

export default QueryDetailsSlice.reducer;
