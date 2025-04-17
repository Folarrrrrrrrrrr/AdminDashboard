import React, { useEffect, useState } from "react";
import Style from "./Sports.module.css";
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
import Header from "../../../../components/header/Header";
import Total_Card from "../../../../components/total_Card/Total_Card";
import rise from "../../../../assets/svg/rise.svg";
import person from "../../../../assets/svg/person.svg";
import flag from "../../../../assets/svg/flag.svg";
import smiley from "../../../../assets/svg/gray_smiley.svg";
import arrow_down from "../../../../assets/svg/arrow_down-dark.svg";
import Stats_Card from "../../../../components/stats_card/Stats_Card";
import winner from "../../../../assets/svg/winner.svg";
import loosers from "../../../../assets/svg/loosers.svg";
import ImgOne from "../../../../assets/images/HumanOne.png";
import ImgTwo from "../../../../assets/images/HumanTwo.png";
import ImgThree from "../../../../assets/images/HumanThree.png";
import ImgFour from "../../../../assets/images/HumanFour.png";
import ImgFive from "../../../../assets/images/HumanFive.png";
import ImgSix from "../../../../assets/images/HumanSix.png";
import Imgseven from "../../../../assets/images/Humanseven.png";
import Activity from "../../../../assets/svg/Activity.svg";
import three_users from "../../../../assets/svg/three_users.svg";
import sports from "../../../../assets/svg/sport.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootballBetSummary } from "../../api_detaills/GlobalStates/FootballSummarySlice";
import { fetchFootballBetList } from "../../api_detaills/GlobalStates/FootballBetList";
import NanoTable from "../../../../components/NanoTable/NanoTable";
import DoughnutChart from "../../../../components/chart/DoughnutChart";
import LoadingScreen from "../../../../components/loader/LoadingSreen";
import arrowRight from "../../../../assets/images/rightArrowFrame.png"
import Nigeria from "../../../../assets/images/NaijaFlagpng.png"
import logo from "../../../../assets/images/S_icon.png"
import Ghana from "../../../../assets/images/ghana.png"
import Kenya from "../../../../assets/images/kenya.png"
import SA from "../../../../assets/images/south-africa.png"
import UK from "../../../../assets/images/united-kingdom.png"
import rwanda from "../../../../assets/images/rwandaFlag.png"
import { motion } from "framer-motion";


const Sports = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFootballBetSummary());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFootballBetList());
  }, [dispatch]);

  const { FootballSummary, FootballSummaryLoading, FootballSummaryError } =
    useSelector((state) => state.FootballSummary);
  const { footballBetsList, footballBetsListloading, footballBetsListerror } =
    useSelector((state) => state.FootballBetList);

  console.log(FootballSummary);

  const customTickFormatter = (tick) => {
    return `${tick}k`;
  };

  const handleTotalBetsClick = () => {
    navigate(`/totalBetPlaced/${0}`, {
      state: { source: "Sports", extraData: footballBetsList },
    });
  };

  let Sports = "";

  // useEffect( ()=>{
  const total_Card2 = [
    {
      image1: Activity,
      text: "Total Bet Placed",
      divText: "View all",
      price: FootballSummary.totalBetPlaced,
      // to: `/totalBetPlaced/${0}, {state: {source: 'sports'}}`
      // to : navigate(`/totalBetPlaced/${0}`, {
      //   state: { source : "Sports", extraData: ["BasketBAll", "Football", "Tennis",]}
      // })
    },
    {
      image1: three_users,
      text: "Total Players",
      divText: "View all",
      price: FootballSummary.totalPlayers,
    },
    {
      image1: winner,
      text: "Winners",
      divText: "View all",
      price: FootballSummary.totalWinners,
      // to: `/totalBetPlaced/${1}`
    },
    {
      image1: loosers,
      text: "Loosers",
      divText: "View all",
      price: FootballSummary.totalLosers,
      // to: `/totalBetPlaced/${2}`
    },
  ];

  // },[])
  const data = [
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
      to: "/",
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

  const all_Users_arr = [
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
      to: "/userDetails",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
    {
      img: person,
      name: "John Doe",
      position: "Nigeria",
      status: "Online",
    },
  ];

  const NanoTableData = [
    {name: "Alice", details: "view details" },
    {name: "Bob", details: "view details" },
    {name: "Charlie", details: "view details" },
    {name: "David", details: "view details" },
    {name: "Eve", details: "view details" },
    {name: "Frank", details: "view details" },
    {name: "Alice", details: "view details" },
    {name: "Bob", details: "view details" },
    {name: "Charlie", details: "view details" },
    { name: "David", details: "view details" },
    { name: "Eve", details: "view details" },
    { name: "Frank", details: "view details" },
    { name: "Eve", details: "view details" },
    { name: "Frank", details: "view details" },
    { name: "Frank", details: "view details" },
  ];

  const NanoTableColumns = [
    // { key: "photo", label: "photot" },
    { key: "name", label: "Name" },
    // { key: "age", label: "Age" },
    { key: "details", label: "view details" },
  ];
  const weeklyRevenueData = [
    { day: "Mon", revenue: 1200 },
    { day: "Tue", revenue: 2100 },
    { day: "Wed", revenue: 1800 },
    { day: "Thu", revenue: 2500 },
    { day: "Fri", revenue: 3200 },
    { day: "Sat", revenue: 2900 },
    { day: "Sun", revenue: 3100 },
  ];

  const newUsers = [
    {
      name: "Isaac Mwavuli",
      avatar:ImgOne,
    },
    {
      name: "Rachel Brown",
      avatar:ImgTwo,
    },
    {
      name: "Gideon Payne",
      avatar:ImgThree,
    },
    {
      name: "Jonathan Abbey",
      avatar:ImgFour
    },
    {
      name: "Jonathan Abbey",
      avatar:ImgFive
    },
    {
      name: "Jonathan Abbey",
      avatar:ImgSix
    },
    {
      name: "Jonathan Abbey",
      avatar:Imgseven
    },
  ];

  const countries = ["ng","gh", "sa", "uk", "usa"];

  const [loading, setLoading ]= useState(true);

   useEffect(()=>{
        setTimeout(()=> FootballSummary ? setLoading(false): setLoading(true), 3000)
      }, [])

  return (
      <>
        {loading ? (
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
        ) : null}
    <div id={Style.DiceGame_mainDiv}>
      <Header
        headerText={"Sports"}
        headerInfo={"Here’s an information on Sports"}
        image2={sports}
      />

      <div id={Style.DiceGame_wrapperDiv}>
        <div id={Style.Sports_selection_wrapperDiv}>
          <button className={Style.Sports_selectionDiv}>Football</button>

          <div className={Style.Sports_selectionDiv}>Basketball</div>
          <div className={Style.Sports_selectionDiv}>Tennis</div>
          <div className={Style.Sports_selectionDiv}>8 balls</div>
          <div className={Style.Sports_selectionDiv}> 9 balls</div>
          {/* <div className={Style.Sports_selectionDiv} id={Style.basket}>Basketball</div> */}
        </div>

        <p className={Style.PlaceBet_headerText}>Today's Summary</p>

        <div id={Style.DiceGame_Card_mapDiv}>
          {total_Card2.map((object, i) => {
            return (
              <Total_Card
                image1={object.image1}
                text={object.text}
                divText={object.divText}
                price={object.price}
                isPurple={i == 0 ? "true" : null}
                isGreen={i == 1 ? "true" : null}
                isRed={i == 2 ? "true" : null}
                isBlack={i == 3 ? "true" : null}
                onClick={() => handleTotalBetsClick()}
                // view_div ={object.view_div}
                key={i}
              />
            );
          })}
        </div>
       {/* <p className={Style.PlaceBet_headerText_Two}>Overview</p> */}
      <div className={Style.gridContainer}>
        <div style={{width:"800px"}}>
          {/* Total Revenue */}
          <div className={Style.card} >
            <h2 className={Style.cardTitle}>Total Revenue</h2>
            <div className={Style.chartContainer} >
              <div id={Style.doughnutChart} style={{color:"black"}}>
                <DoughnutChart
                  totalRevenue={32678}
                  goalRevenue={50000}
                  dailyRevenue={3000}
                  monthlyEarnings={23000}
                />
              </div>
            </div>
            <p className={Style.revenueAmount}>$32,678</p>
          </div>

          {/* Weekly Revenue Chart */}
          <div className={Style.card} style={{paddingLeft: "5rem",paddingRight:"5rem", height:"400px"}}>
            <h2 className={Style.cardTitle}>Weekly Revenue Report</h2>
            <ResponsiveContainer width="100%" height={310}>
              <LineChart data={weeklyRevenueData}>
                <XAxis dataKey="day" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#1E3A8A"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className={Style.increaseText}>+12.5% Increase</p>
          </div>
        </div>
        <div style={{width:"350px"}}>
        {/* New Users */}
          <div className={Style.card} style={{ paddingTop:"2px", marginTop:"20px", width:"350px",height:"450px", marginBottom:"10px", color:"black",overflow:"scroll",}} >
            <h2 className={Style.cardTitle} style={{marginLeft:"5px"}}>Online Players</h2>
            <ul >
              {newUsers.map((user, index) => (
                <li key={index} className={Style.userItem} style={{color:"black", height:"40px", justifyContent:"space-evenly", marginLeft:"-50px"}}>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className={Style.userAvatar }
                    id={Style.scaler}
                  />
                  <span className={Style.userName} id={Style.scaler}>{user.name}</span>
                    <div id={Style.scaler}>
                    <p style={{color:"blue", cursor:"pointer", display:"flex", marginLeft:"10px"}}>View User <img src={arrowRight}></img></p>
                  </div>
                </li>
              ))}
              <button className={Style.viewAllBtn}> View all Users </button>
            </ul>
          </div>

          {/* Registered Countries */}
          <div className={Style.cardCentered} style={{color:"black"}}>
            <h2 className={Style.cardTitle}>Registered Countries</h2>
            <div className={Style.flagContainer}>
              {countries.map((flag, index) => (
                <div style={{color:"black"}}>
                  <span key={index} className={Style.flag}>
                    {flag.id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Sports;