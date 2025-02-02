import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import NigerianUsers from "../constant/url_path"
// const API_URL = "http://white-house-api.onrender.com/api/v1/admin/dice-bet-list";
// Async thunk for fetching dice summary data
export const fetchFootSolidersProfile = createAsyncThunk(
  "FootSolidersProfile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://white-house-api.onrender.com/api/v1/admin/footsoldier-profile');
      // console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const footSoldierProfiles = await response.json();
      // console.log(data);
     
      // console.log(data.responseBody);
      return footSoldierProfiles.responseBody; // Extract the relevant dat
    } catch (error) {
      console.log(error.message);      
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing dice summary
const footSoldierProfilesSlice = createSlice({
  name: "FootSoldierProfiles",
  initialState: {
    FootSolidersProfileData: [
      {
        "user_id": 2,
        "firstname": "Damisola",
        "lastname": "Adeshina",
        "phone": "2348114528985",
        "country": "Nigeria",
        "region": null,
        "status": "pending"
    },
  ],

  FootSolidersProfileloading: false,
  FootSolidersProfileerror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFootSolidersProfile.pending, (state) => {
        state.FootSolidersProfileloading = true;
        state.FootSolidersProfileerror = null;
      })
      .addCase(fetchFootSolidersProfile.fulfilled, (state, action) => {
        state.FootSolidersProfileloading = false;
        state.FootSolidersProfileData = action.payload;
      })
      .addCase(fetchFootSolidersProfile.rejected, (state, action) => {
        state.FootSolidersProfileloading = false;
        state.FootSolidersProfileerror = action.payload;
      });
  },
});

export default footSoldierProfilesSlice.reducer;
