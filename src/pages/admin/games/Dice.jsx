import React,{ useState } from "react";
import Style from "../games/Dice.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import dice from "../../../assets/svg/Dice.svg";
import Header from "../../../components/header/Header";
import Total_Card from "../../../components/total_Card/Total_Card";
import rise from "../../../assets/svg/rise.svg";
import person from "../../../assets/svg/person.svg";
import flag from "../../../assets/svg/flag.svg";
import smiley from "../../../assets/svg/gray_smiley.svg";
import arrow_down from "../../../assets/svg/arrow_down-dark.svg";
import Stats_Card from "../../../components/stats_card/Stats_Card";
import winner from "../../../assets/svg/winner.svg";
import loosers from "../../../assets/svg/loosers.svg";
import Activity from "../../../assets/svg/Activity.svg";
import three_users from "../../../assets/svg/three_users.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiceSummary } from "../api_detaills/GlobalStates/diceSummarySlice";
import { fetchDiceBetList } from "../api_detaills/GlobalStates/DiceBetsList";
import DoughnutChart from "../../../components/chart/DoughnutChart";
import NanoTable from "../../../components/NanoTable/NanoTable";
import LoadingScreen from "../../../components/loader/LoadingSreen";
// import NanoTableTwo from '../../../components/NanoTable/NanoTable'

const DiceGame = () => {
  const [dataLoading, setLoading ]= useState(true);
  //Bets summary data from redus-tool-kit starts here

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiceSummary());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchDiceBetList());
  }, []);

  const { data, loading, error } = useSelector((state) => state.diceSummary);

  // console.log(data);

  const { DiceBetsdata, DiceBetsloading, DiceBetserror } = useSelector(
    (state) => state.DiceBetsList
  );

  // console.log(DiceBetsdata);

  const navigate = useNavigate();

  const customTickFormatter = (tick) => {
    return `${tick}k`;
  };

  const handleTotalBetsClick = () => {
    navigate(`/totalBetPlaced/${0}`, {
      state: { source: "Dice Games", extraData: DiceBetsdata },
    });
  };

  const total_Card2 = [
    {
      image1: Activity,
      text: "Total Bet Placed",
      divText: "View all",
      price: data.totalBetPlaced,
      // to : `/totalBetPlaced/${0}`
      // to: `/totalBetPlaced/${0}`
    },
    {
      image1: three_users,
      text: "Total Players",
      divText: "View all",
      price: data.totalPlayers,
      view_div: false,
    },
    {
      image1: winner,
      text: "Winners",
      divText: "View all",
      price: data.totalWinners,
      // to: `/totalBetPlaced/${1}`
    },
    {
      image1: loosers,
      text: "Loosers",
      divText: "View all",
      price: data.totalLosers,
      // to: `/totalBetPlaced/${2}`
    },
  ];

  const datas = [
    {
      name: "Mon",
      month: "Jan",
      uv: 50,
      pv: 40,
      amt: 2400,
    },
    {
      name: "Tue",
      month: "Feb",
      uv: 70,
      pv: 60,
      amt: 2210,
    },
    {
      name: "Wed",
      month: "Mar",
      uv: 80,
      pv: 40,
      amt: 2290,
    },
    {
      name: "Thur",
      month: "Apr",
      uv: 65,
      pv: 20,
      amt: 2000,
    },
    {
      name: "Fri",
      month: "May",
      uv: 84,
      pv: 50,
      amt: 2181,
    },
    {
      name: "Sat",
      month: "Jun",
      uv: 100,
      pv: 60,
      amt: 2500,
    },
    {
      name: "Sun",
      month: "Jul",
      uv: 60,
      pv: 40,
      amt: 2100,
    },
  ];

  const stats_card2 = [
    {
      img: person,
      figure: "2m",
      text: "All Users",
      to: "/gameUsers",
    },
    {
      img: flag,
      figure: "14",
      text: "Reg Countries",
      to: "/countries",
    },
  ];

  const NanoTableData = [
    { name: "Alice", details: "view details" },
    { name: "Bob", details: "view details" },
    { name: "Charlie", details: "view details" },
    { name: "David", details: "view details" },
    { name: "Eve", details: "view details" },
    { name: "Frank", details: "view details" },
    { name: "Alice", details: "view details" },
    { name: "Bob", details: "view details" },
    { name: "Charlie", details: "view details" },
    {  name: "David", details: "view details" },
    {  name: "Eve", details: "view details" },
    {  name: "Frank", details: "view details" },
    {  name: "Eve", details: "view details" },
    {  name: "Frank", details: "view details" },
    {  name: "Frank", details: "view details" },
  ];

  const NanoTableColumns = [
    { key: "name", label: "Name" },
    { key: "details", label: "view details" },
  ];

  useEffect(()=>{
        setTimeout(()=> data ? setLoading(false): setLoading(true), 3000)
      }, [])

  return (
    dataLoading ? <LoadingScreen/> : 
    <div id={Style.DiceGame_mainDiv}>
      <Header
        headerText={"Dice"}
        headerInfo={"Here’s an information on Dice"}
        image={dice}
      />

      <div id={Style.DiceGame_wrapperDiv}>
        <p className={Style.PlaceBet_headerText}>Today's Summary</p>

        <div id={Style.DiceGame_Card_mapDiv}>
          {total_Card2.map((object, i) => {
            return (
              <Total_Card
                image1={object.image1}
                text={object.text}
                divText={object.divText}
                price={object.price}
                // to = {object.to}
                onClick={handleTotalBetsClick}
                view_div={object.view_div}
                // { ...i==0 ? isPurple = 'true': i==1? isGreen ='true': isRed ='true' }
                isPurple={i == 0 ? "true" : null}
                isGreen={i == 1 ? "true" : null}
                isRed={i == 2 ? "true" : null}
                isBlack={i == 3 ? "true" : null}
                divTextColor={Style.divTextColor}
              />
            );
          })}
        </div>
      </div>
      <p className={Style.PlaceBet_headerText_Two}>Overview</p>
      
  
    </div>
  );
};

export default DiceGame;
