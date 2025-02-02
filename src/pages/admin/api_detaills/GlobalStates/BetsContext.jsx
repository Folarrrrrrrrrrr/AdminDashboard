// import React, { createContext, useReducer, useEffect, useContext } from 'react';
// import { BetsReducer } from './BetsReducer';
// import {TotalDiceBetAmount} from "../constant/url_path"
// import axios from "axios";
// // import { authAxios } from "./auth_services";


// export const ApiContext = createContext();

// const initialState = {
//     totalBets: [],
//   loading: true,
//   error: null,
// };

// export const BetsApiProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(BetsReducer, initialState);

//   useEffect(() => {
//       fetch(TotalDiceBetAmount)
//       .then((response) =>response.json())
//       .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
//       .catch((error) => dispatch({ type: 'FETCH_ERROR', payload: error.message}));
//       ;
//   }, []);
  

//   return (
//     <ApiContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };

// // export default ApiContext;

// export const useBetApiContext =()=>useContext(ApiContext)
