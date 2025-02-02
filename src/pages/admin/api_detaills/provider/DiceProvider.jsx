// import {
//     getTotalDiceBetAmount
//   } from "../services/DiceServices";



//   export const TotalDiceBetProvider = async ({
//     updateDiceBets,
//     updateErrorPopup,
//     updateErrorText, 
//   }) => {
//     try {
//       let response = await getTotalDiceBetAmount();
//         // console.log(response);  
        
//       if (response.status == 200 || response.status == 201) {
//         updateDiceBets(response.data["responseBody"]);
//       } else {
//         updateErrorText(response.data["responseMessage"]);
  
//         updateErrorPopup(true);
      
//         setTimeout(() => {
//           updateErrorPopup(false);
//         }, 2000);
//       }
//     } catch (err) {
//       updateErrorText(
//         err.response ? err.response.data.responseMessage : "Failed to Bet summaries"
//       );

//       updateErrorPopup(true);
  
//       setTimeout(() => {
//         updateErrorPopup(false);
//       }, 2000);
//     }
//   };  


  