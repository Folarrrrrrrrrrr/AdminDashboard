import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNigerianUsers = createAsyncThunk(
  "NigerianUsers/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const API_URL = `${API_BASE_URL}/users/country/nigeria`;

      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.responseBody;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const NigerianUsersSlice = createSlice({
  name: "NigerianUsers",
  initialState: {
    data: {
      statistics: {},
      users: {},
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNigerianUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNigerianUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNigerianUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default NigerianUsersSlice.reducer;
