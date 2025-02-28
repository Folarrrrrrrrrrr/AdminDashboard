export const BetsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        totalBets: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: 'Error fetching data',
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchBets = async (dispatch) => {
  try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch("https://stake-cut-api.onrender.com/api/v1/admin/bets", {
          method: "GET",
          headers: {
              // "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`
          }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.responseBody });
  } catch (error) {
      console.log(error.message);
      dispatch({ type: 'FETCH_ERROR' });
  }
};
