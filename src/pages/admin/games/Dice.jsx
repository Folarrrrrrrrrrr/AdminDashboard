import React, { useState } from "react";
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
import { PieChart, Pie, Cell } from "recharts";
import logo from "../../../assets/images/S_icon.png";
import { motion } from "framer-motion";

const DiceGame = () => {
  const [dataLoading, setLoading] = useState(true);
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
    { name: "David", details: "view details" },
    { name: "Eve", details: "view details" },
    { name: "Frank", details: "view details" },
    { name: "Eve", details: "view details" },
    { name: "Frank", details: "view details" },
    { name: "Frank", details: "view details" },
  ];

  const NanoTableColumns = [
    { key: "name", label: "Name" },
    { key: "details", label: "view details" },
  ];

  const revenueData = [
    { name: "Total Revenue", value: 32678, color: "#1E3A8A" },
    { name: "Remaining", value: 15000, color: "#E5E7EB" },
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
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Rachel Brown",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Gideon Payne",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Jonathan Abbey",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  const countries = ["🇳🇬", "🇰🇪", "🇺🇸", "🇬🇧", "🇮🇳", "🇨🇦"];

  useEffect(() => {
    setTimeout(() => (data ? setLoading(false) : setLoading(true)), 4000);
  }, []);

  return (
    <>
      {dataLoading ? (
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
          headerText={"Dice"}
          headerInfo={"Here’s more information on Dice Games"}
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
        {/* <p className={Style.PlaceBet_headerText_Two}>Overview</p> */}
        <div className={Style.gridContainer}>
          <div style={{ width: "800px" }}>
            {/* Total Revenue */}
            <div className={Style.card}>
              <h2 className={Style.cardTitle}>Total Revenue</h2>
              <div className={Style.chartContainer}>
                <div id={Style.doughnutChart} style={{ color: "black" }}>
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
            <div
              className={Style.card}
              style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
            >
              <h2 className={Style.cardTitle}>Weekly Revenue Report</h2>
              <ResponsiveContainer width="100%" height={200}>
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
          <div style={{ width: "350px" }}>
            {/* New Users */}
            <div
              className={Style.card}
              style={{ height: "350px", marginBottom: "10px" }}
            >
              <h2 className={Style.cardTitle}>New Users</h2>
              <ul>
                {newUsers.map((user, index) => (
                  <li key={index} className={Style.userItem}>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className={Style.userAvatar}
                    />
                    <span className={Style.userName}>{user.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registered Countries */}
            <div className={Style.cardCentered}>
              <h2 className={Style.cardTitle}>Registered Countries</h2>
              <div className={Style.flagContainer}>
                {countries.map((flag, index) => (
                  <span key={index} className={Style.flag}>
                    {flag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiceGame;
