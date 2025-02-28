import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFootSolidersProfile = createAsyncThunk(
  "FootSolidersProfile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      console.log(accessToken);
      
      const response = await fetch('https://stake-cut-api.onrender.com/api/v1/admin/footsoldier/footsoldier-profile', {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const footSoldierProfiles = await response.json();
      return footSoldierProfiles.responseBody;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

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
