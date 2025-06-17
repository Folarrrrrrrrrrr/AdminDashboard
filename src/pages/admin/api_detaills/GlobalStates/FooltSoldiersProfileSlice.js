import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFootSolidersProfile = createAsyncThunk(
  "FootSolidersProfile/fetch",
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      // console.log(accessToken);
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/footsoldier/footsoldier-profile?page=${page}&limit=${limit}`, {
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
