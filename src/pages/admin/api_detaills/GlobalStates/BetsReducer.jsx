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
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/bets`, {
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
