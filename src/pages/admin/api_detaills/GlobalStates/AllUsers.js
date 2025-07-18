import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching all staff data with authorization
// export const fetchAllUsers = createAsyncThunk(
//     "allUsers/fetch",
//     async ({ page, limit }, { rejectWithValue, getState }) => {
//         try {
//             // Retrieve token from Redux state or localStorage
//             // const token = getState().auth?.token || localStorage.getItem("accessToken");
//             // console.log(token);
//             // console.log(
//             // gittoken);

//             const accessToken = localStorage.getItem("token");
//       if (!accessToken) {
//         throw new Error("No access token found");
//       }

//       const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//       const response = await fetch(`${API_BASE_URL}/users/get-all-users?page=${page}&limit=${limit}`, {
//     //   const response = await fetch(`${API_BASE_URL}/users/get-all-users`, {
//         method: "GET",
//         headers: {
//           // "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const AllUsersData = await response.json();
//             console.log(AllUsersData.responseBody.users);
            
//             return AllUsersData.responseBody; // Extract the relevant data
//         } catch (error) {
//             console.error(error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// );
export const fetchAllUsers = createAsyncThunk(
  "allUsers/fetch",
  async ({ page = 1, limit = 12, search = "" }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      let url;

      if (search.trim() !== "") {
        url = `${API_BASE_URL}/users/search-user?search=${search}`;
      } else {
        url = `${API_BASE_URL}/users/get-all-users?page=${page}&limit=${limit}`;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const responseBody = data.responseBody;

      return {
        users: responseBody.users || [],
        totalCount: responseBody.totalCount || 0,
        totalPages: responseBody.totalPages || 1,
        currentPage: responseBody.currentPage || 1,
        isSearch: search.trim() !== "",
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// Slice for managing staff data
const AllUsersSlice = createSlice({
    name: "AllusersList",
    initialState: {
  AllUsersData: {
    users: [],
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    isSearch: false,
  },
  AllUsersDataLoading: false,
  AllUsersDataError: null,
},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.AllUsersDataLoading = true;
                state.AllUsersDataError = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.AllUsersDataLoading = false;
                state.AllUsersData = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.AllUsersDataLoading = false;
                state.AllUsersDataError = action.payload;
            });
    },
});

export default AllUsersSlice.reducer;
