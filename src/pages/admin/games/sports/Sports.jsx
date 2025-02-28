import React, { useEffect } from "react";
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
import Activity from "../../../../assets/svg/Activity.svg";
import three_users from "../../../../assets/svg/three_users.svg";
import sports from "../../../../assets/svg/sport.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootballBetSummary } from "../../api_detaills/GlobalStates/FootballSummarySlice";
import { fetchFootballBetList } from "../../api_detaills/GlobalStates/FootballBetList";
import NanoTable from "../../../../components/NanoTable/NanoTable";
import DoughnutChart from "../../../../components/chart/DoughnutChart";

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

  return (
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
        <p className={Style.PlaceBet_headerText_Two}>Overview</p>
      <div id={Style.DiceGame_cardGraph_wrapper}>
        <div id={Style.DiceGame_Card_wrapper}>
          {/* <div id={Style.nanoTableDiv}> */}
            <NanoTable columns={NanoTableColumns} data={NanoTableData} />
          {/* </div> */}
        </div>
        <div id={Style.DoughnutChartDiv}>
          <div id={Style.DoughnutChartContainer}>
            <div id={Style.doughnutChart}> 
              <DoughnutChart
                totalRevenue={32678}
                goalRevenue={50000}
                dailyRevenue={3000}
                monthlyEarnings={23000}
              />
            </div>
            <div id={Style.AreaChartDiv}>
              <div id={Style.AreaChart_TextDiv}>
                <p id={Style.AreaChart_weeklyText}>Weekly Revenue Report</p>
                <p id={Style.AreaChart_dateText}>
                  Week One October, 2024 <img src={arrow_down} alt="" />
                </p>
              </div>
              <ResponsiveContainer width="140%" height="100%">
                <AreaChart
                  width={500}
                  height={300}
                  data={datas}
                  margin={{
                    top: 0,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    // tickFormatter={customTickFormatter}
                  />
                  <Tooltip />
                  <Area
                    type="normal"
                    dataKey="uv"
                    dot={true}
                    stroke="#332D5B"
                    fill="#332d5b80"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sports;
