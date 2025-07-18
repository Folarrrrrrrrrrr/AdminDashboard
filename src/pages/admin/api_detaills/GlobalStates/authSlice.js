
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk using fetch
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.responseSuccessful) {
        throw new Error(data.responseMessage || "Login failed");
      }

      const user = data.responseBody.Details;
      const token = data.responseBody.accessToken;
      console.log(token)
      // Store in localStorage
      const now = new Date().getTime();
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("loginTime", now.toString());

      return { user, token };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);



//declaring and assigning initialState
const loginTime = parseInt(localStorage.getItem("loginTime"), 10);
const now = new Date().getTime();
const timePassed = now - loginTime;
const isExpired = timePassed > 24 * 60 * 60 * 1000; // 24 hours in ms

if (isExpired) {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("loginTime");
}

const initialState = {
  user: !isExpired ? JSON.parse(localStorage.getItem("user")) : null,
  token: !isExpired ? localStorage.getItem("token") : null,
  loading: false,
  error: null,
};

// const initialState = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   token: localStorage.getItem("token") || null,
//   loading: false,
//   error: null,
// };

const authSlice = createSlice({
  name: "auth",

  //referencing assigned initialState
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("loginTime");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
 export default authSlice.reducer;