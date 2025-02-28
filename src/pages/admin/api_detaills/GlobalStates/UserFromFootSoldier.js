import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
const API_URL = 'https://stake-cut-api.onrender.com/api/v1/admin/footsoldiers-soldiers-users';

// Async thunk for fetching dice summary data
export const fetchFootSolidersOnboardedUsers = createAsyncThunk(
  "FootSolidersOnboardedUsers/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch( API_URL,{
        headers:{
          Authorization:`bearer${token}`,
        }
      });
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const footSolidersOnboardedUsersData = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return footSolidersOnboardedUsersData.responseBody; // Extract the relevant data

    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const footSolidersOnboardedUsersSlice= createSlice({
  name: "footSolidersOnboardedUsers",
  initialState: {
    footSolidersOnboardedUsersData: [
        {
            "id": 2,
            "username": "Bare",
            "email": "",
            "phone": "2348114528985"
        },        
  ],

  footSolidersOnboardedUsersloading: false,
  footSolidersOnboardedUserserror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootSolidersOnboardedUsers.pending, (state) => {
        state.footSolidersOnboardedUsersloading = true;
        state.footSolidersOnboardedUserserror = null;
      })
      .addCase(fetchFootSolidersOnboardedUsers.fulfilled, (state, action) => {
        state.FootSolidersProfileloading = false;
        state.footSolidersOnboardedUsersData = action.payload;
      })
      .addCase(fetchFootSolidersOnboardedUsers.rejected, (state, action) => {
        state.footSolidersOnboardedUsersloading = false;
        state.footSolidersOnboardedUserserror = action.payload;
      });
  },
});

export default footSolidersOnboardedUsersSlice.reducer;
