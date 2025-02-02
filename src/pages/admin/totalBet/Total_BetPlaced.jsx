import React, { useEffect, useState } from 'react'
import Style from '../totalBet/Total_BetPlaced.module.css'
import Header from '../../../components/header/Header'
import person from '../../../assets/images/person_img.png'
import green_eyes from '../../../assets/svg/green_eyes.svg'
import warning from '../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../assets/svg/product_delete.svg'
// import InputField from '../../../components/input/InputField'
import { useParams, useLocation} from 'react-router-dom'
import BetPlaced_com from '../../../components/bet_placedCom/BetPlaced_com'
// import { TotalDiceBetProvider } from '../api_detaills/provider/DiceProvider'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'
// import {useBetApiContext} from '../api_detaills/GlobalStates/BetsContext'
import { useDispatch, useSelector } from "react-redux";
import { fetchDiceBetList } from "../api_detaills/GlobalStates/DiceBetsList";


const Total_BetPlaced = () => {
  // const  {state} = useBetApiContext;

  // const { totalBets , loading, error } = state;
  // const { updateErrorText, updateErrorPopup } = PopupContextHook();
  // const [totalBetsData, setTotalBetsData] = useState({})

  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(fetchDiceBetList());
      }, [dispatch]);

      
  // const { data, loading, error } = useSelector((state) => state.DiceBetsList);

  const { winningdata, winningLoading, winningError } = useSelector((state) => state.WinningDiceBetsList);
  // const { losingdata, losingLoading, losingError } = useSelector((state) => state.LoosingDiceBetsList);

  // console.log(LosingData);
  // console.log(winningdata);
  

  // useEffect(() => {

  //   TotalDiceBetProvider({

  //     updateSetBetsPopup: (data) => {

  //           setTotalBetsData(data)
  //         },
  //         updateErrorPopup,
  //         updateErrorText
  //     })
  // }, [])
 
  // const {totalBetPlaced, totalPlayers, totalWinners, totalLoser} = totalBetsData;
  // console.log(totalPlayers);
  
  // if (error) {
  //   console.log(error);
  //   return updateErrorText(error);
  // }
  // if (totalBets) {
  //   console.log(totalBets);
  // }
  // if (loading) {
  //   return <> {error} </>;
  // }

  const location = useLocation();
  const { source, extraData } = location.state || {}; // Destructuring the state

  let [toggleIndex, setToggleIndex] = useState(0);

  let { indexParams } = useParams()

  let paramIndex = JSON.parse(indexParams)
  let Sports = true;

  // console.log(data);

  // const arr = extraData
  const arr = extraData
  console.log(extraData);
  //  [
    // data,
      // action: {
      //   eye: green_eyes,
      //   warning: warning,
      //   delete: delete_list
      // }

    // {
    //   SN: "1",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[2],
    //   amount: "1000",
    //   players: person,
    //   status: "Won",
    //   Winners: '',
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }

    // },
    // {
    //   SN: "2",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[2],
    //   amount: "1000",
    //   players: person,
    //   status: "Lost",
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }

    // },
    // {
    //   SN: "2",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[0],
    //   amount: "1000",
    //   players: person,
    //   status: "Lost",
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }

    // },
    // {
    //   SN: "2",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[1],
    //   amount: "1000",
    //   players: person,
    //   status: "Lost",
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }

    // },
    // {
    //   SN: "3",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[1],
    //   amount: "1000",
    //   players: person,
    //   status: "Won",
    //   Winners: '',
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }
    // },
    // {
    //   SN: "4",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[1],
    //   amount: "1000",
    //   players: person,
    //   status: "Lost",
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }

    // },
    // {
    //   SN: "3",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[1],
    //   amount: "1000",
    //   players: person,
    //   status: "Won",
    //   Winners: '',
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }
    // },
    // {
    //   SN: "3",
    //   userID: "5466FH",
    //   BetID: "6458575RFG",
    //   game: extraData[1],
    //   amount: "1000",
    //   players: person,
    //   status: "Won",
    //   Winners: '',
    //   win: "5000",
    //   action: {
    //     eye: green_eyes,
    //     warning: warning,
    //     delete: delete_list
    //   }
    // }
  // ]

  return (
    <div id={Style.Total_BetPlaced_mainDiv}>
      <Header
        headerText={"Total Bet Placed"}
        headerInfo={"Here’s an information on all placed bets"} />

      <div id={Style.TotalBet_wrapperDiv}>
        <BetPlaced_com arr={arr}
         winningdata={winningdata}
        //  losingdata={losingdata} 
         initialIndex = {paramIndex}
          GameTypeColumn={Sports} 
          isDiceGame={true} />
      </div> 
    </div>
  )
}




export default Total_BetPlaced