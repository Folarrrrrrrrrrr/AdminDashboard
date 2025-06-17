import React, { useEffect, useState } from "react";
import Style from "../totalBet/Total_BetPlaced.module.css";
import Header from "../../../components/header/Header";
import person from "../../../assets/images/person_img.png";
import green_eyes from "../../../assets/svg/green_eyes.svg";
import warning from "../../../assets/svg/yellow_warning.svg";
import delete_list from "../../../assets/svg/product_delete.svg";
// import InputField from '../../../components/input/InputField'
import { useParams, useLocation } from "react-router-dom";
import BetPlaced_com from "../../../components/bet_placedCom/BetPlaced_com";
// import ListTable from '../../../components/bet_placedCom/ListTable'
// import { TotalDiceBetProvider } from '../api_detaills/provider/DiceProvider'
import { PopupContextHook } from "../../../WhiteHouse_PopupContext";
// import {useBetApiContext} from '../api_detaills/GlobalStates/BetsContext'
import { useDispatch, useSelector } from "react-redux";
import { fetchDiceBetList } from "../api_detaills/GlobalStates/DiceBetsList";
import { fetchFootballBetList } from "../api_detaills/GlobalStates/FootballBetList";
import LoadingScreen from "../../../components/loader/LoadingSreen";
import { motion } from "framer-motion";
import logo from "../../../assets/images/S_icon.png"


const Total_BetPlaced = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();  
  const location = useLocation();

  const {
    source,
    extraData, // Optional - for prefilled display
    initialPage = 1,
    initialLimit = 10,
  } = location.state || {};

  
  // Local state for pagination
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [limit] = useState(initialLimit); // If limit is fixed

    const { footballBetsList, footballBetsListloading, footballBetsListerror } =
    useSelector((state) => state.FootballBetList);
        
    useEffect(() => {
    dispatch(fetchFootballBetList({ page: currentPage, limit }));
    dispatch(fetchDiceBetList());
    }, [dispatch, currentPage, limit]);       

  // const { data, loading, error } = useSelector((state) => state.DiceBetsList);

  const { winningdata, winningLoading, winningError } = useSelector(
    (state) => state.WinningDiceBetsList
  );

  let [toggleIndex, setToggleIndex] = useState(0);

  let { indexParams } = useParams();

  let paramIndex = JSON.parse(indexParams);
  let Sports = true;

  // console.log(data);

  // const arr = extraData
  const arr = extraData.allFootballBets;
  console.log(extraData.allFootballBets);
  

  const diceHeaders = [
    "S/N",
    "dice gameID",
    "bet type",
    "players",
    "date",
    "time",
    "action",
  ];
  const footballHeaders = [
    "S/N",
    "dice gameID",
    "bet type",
    "players",
    "date",
    "time",
    "action",
  ];

  
  useEffect(() => {
    setTimeout(() => (arr ? setLoading(false) : setLoading(true)), 3000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <div className={Style.loadingContainer}>
          <motion.img
            src={logo}
            alt="Loading Object"
            className="speeding-object"
            initial={{
              // x: "-100vw",
              scale: 0.5,
            }} // Starts small off-screen
            animate={{
              // x: ["-100vw", "50vw", "100vw"], // Moves from left -> center -> right
              scale: [0.5, 1.2, 0.5], // Scales up in center, back down on exit
            }}
            transition={{
              times: [0, 0.5, 1],
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </div>
      ) : null} */}
      <div id={Style.Total_BetPlaced_mainDiv}>
        <Header
          headerText={"Total Bet Placed"}
          headerInfo={"Here’s an information on all placed bets"}
        />

        <div id={Style.TotalBet_wrapperDiv}>
          <BetPlaced_com
            // arr={arr}
            winningdata={winningdata}
            initialIndex={paramIndex}
            GameTypeColumn={Sports}
            isDiceGame={true}
          />

          {/* <ListTable
          headers={source === 'Dice Games'? diceHeaders :source === 'Sports'? footballHeaders: null}
        /> */}
        </div>
      </div>
    </>
  );
};

export default Total_BetPlaced;
