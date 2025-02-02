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
  
  