import React, { useEffect, useState } from "react";
import Style from "./Dashboard.module.css";
import {
  BarChart,
  YAxis,
  XAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import rise from "../../../assets/svg/rise.svg";
import flag from "../../../assets/svg/flag.svg";
import person from "../../../assets/svg/person.svg";
import Header from "../../../components/header/Header";
import Stats_Card from "../../../components/stats_card/Stats_Card";
import foot from "../../../assets/svg/foot.svg";
import { Link, useNavigate } from "react-router-dom";
import RevenuePerformanceMap from "../../../components/chart/PerfomanceMap";
// import RevisedMap from '../../../../src/components/chart/RevisedMap/RevenueMAp.jsx'
//import { useNavigate } from 'react-router-dom';
import { dashboardProvider } from "../api_detaills/provider/user_provider";
import { PopupContextHook } from "../../../WhiteHouse_PopupContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootballBetList } from "../api_detaills/GlobalStates/FootballBetList";
import { fetchDiceBetList } from "../api_detaills/GlobalStates/DiceBetsList";
import { motion } from "framer-motion";
import physicalMap from '../../../assets/images/physicalMap.jpg'

const Dashboard = () => {
  const { updateErrorText, updateErrorPopup } = PopupContextHook();

  const customTickFormatter = (tick) => {
    return `${tick}k`;
  };
  // const [data, setData] = useState()

  // useEffect(() => {

  //     const FetchData = async () => {
  //         const response = await fetch("https://api.coincap.io/v2/assets/?limit=10")
  //         const data = await response.json()
  //         console.log(data);
  //         setData(data.data)
  //     }
  //     FetchData()
  // }, [])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFootballBetList());
    dispatch(fetchDiceBetList());
  }, [dispatch]);

  const { DiceBetsdata, DiceBetsloading, DiceBetserror } = useSelector(
    (state) => state.DiceBetsList
  );
  const { footballBetsList, footballBetsListloading, footballBetsListerror } =
    useSelector((state) => state.FootballBetList);

  function interleaveArrays(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        result.push(arr1[i]);
      }
      if (i < arr2.length) {
        result.push(arr2[i]);
      }
    }

    return result;
  }
  const mixedArray = interleaveArrays(DiceBetsdata, footballBetsList);

    console.log(mixedArray); 
  // // Output: [1, 2, 3, 4, 5, 6, 8, 10]

  const navigate = useNavigate();
  const handleTotalBetsClick = () => {
    navigate(`/totalBetPlaced/${0}`, {
      state: { source: "Dashboard", extraData: mixedArray },
    });
  };

  const [dashboardCount, setDashboardCount] = useState({});

  useEffect(() => {
    dashboardProvider({
      updateDashboard: (data) => {
        setDashboardCount(data);
      },
      updateErrorPopup,
      updateErrorText,
    });
  }, []);

  const { totalBetPlaced, totalUsers, totalCountries, totalFootSoldiers } =
    dashboardCount;
  console.log(totalBetPlaced);

  const line_data = [
    {
      name: "jan",
      uv: 4000,
      pv: 20,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 50,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 30,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 40,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 70,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 60,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 50,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 30,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 60,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 80,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 50,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 70,
      amt: 2100,
    },
  ];
  // const stats_card1 = [
  //     {
  //         img: rise,
  //         figure: totalBetPlaced,
  //         text: "Total Bets Placed",
  //         to: `/totalBetPlaced/${0}`

  //     },
  //     {
  //         img: person,
  //         figure: totalUsers,
  //         text: "All Users",
  //         to: "/allUsers"
  //     },
  //     {
  //         img: flag,
  //         figure: totalCountries,
  //         text: "Reg Countries",
  //         to: "/countries"
  //     },
  //     {
  //         img: foot,
  //         figure: totalFootSoldiers,
  //         text: "Foot Soldiers",
  //         to: "/footSoldiers"

  //     },
  // ]

  const stats_card1 = [
    {
      index: 0,
      img: rise,
      figure: totalBetPlaced,
      text: "Total Bets Placed",
      to: `/totalBetPlaced/${0}`,
    },
    {
      index: 1,
      img: person,
      figure: totalUsers,
      text: "All Users",
      to: "/allUsers",
    },
    {
      index: 3,
      img: foot,
      figure: totalFootSoldiers,
      text: "Foot Soldiers",
      to: "/footSoldiers",
    },
    {
      index: 2,
      img: flag,
      figure: totalCountries,
      text: "Reg Countries",
      to: "/countries",
    },
  ];

  const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 2.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={pageTransition}
      inital="initial"
      animate="animate"
      exit="exit"
    >
      <div id={Style.Dashboard_MainDiv}>
        <Header
          className={Style.Header_Div}
          headerText={"Welcome, Admin"}
          headerInfo={"Here’s an overview of White House"}
          back1={false}
        />

        <div id={Style.Dashboard_WrapperDiv}>
          <div id={Style.Dashboard_CardGraph_Wrapper}>
            <div id={Style.Dashboard_Card_wrapper}>
              {stats_card1.map((obj, i) => {
                return (
                  <div
                    className={Style.statCards}
                    id={i > 2 ? Style.Stats_Card : null}
                  >
                    {" "}
                    <Stats_Card
                      img={obj.img}
                      figure={obj.figure}
                      text={obj.text}
                      isPurple={i == 0 ? "true" : null}
                      isGreen={i == 1 ? "true" : null}
                      isRed={i == 2 ? "true" : null}
                      isBlack={i == 3 ? "true" : null}
                      onClick={i === 0 ? () => handleTotalBetsClick() : null}
                      to={i !== 0 ? obj.to : undefined} // Use `to` only for non-click items
                    />
                  </div>
                );
              })}
            </div>
            <div id={Style.Dashboard_lineChart}>
              {/* <p id={Style.Dashboard_RevenueText}>Revenue</p> */}
              {/* <RevenuePerformanceMap /> */}
              <img id={Style.mapImage} src={physicalMap} alt="" />
              {/* <RevisedMap/> */}
            </div>
          </div>

          <div id={Style.BarChart_Div}>
            <div id={Style.Dashboard_lineChart_Two}>
              <div id={Style.Graph_headerDiv}>
                <p id={Style.Dashboard_RevenueText}>Revenue</p>
                <Link to={"/revenue"}>
                  <p id={Style.Graph_BoxText}>See More</p>
                </Link>
              </div>
              {/* <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={line_data} margin={{
                                    top: 20,
                                    right: 30,
                                    left: -20,
                                    bottom: 10,
                                }}>
                                    <XAxis dataKey="name"
                                        axisLine={false} tickLine={false} fontSize={"0.8rem"}
                                    />
                                    <YAxis
                                        axisLine={false} tickLine={false} fontSize={"0.7rem"}
                                    />
                                    <Tooltip />
                                    <Bar dataKey="pv" fill="#332D5B" />
                                </BarChart>
                            </ResponsiveContainer> */}

              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={150}
                  height={40}
                  data={line_data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: -20,
                    bottom: 10,
                  }}
                >
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    fontSize={"0.8rem"}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    fontSize={"0.7rem"}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="pv"
                    fill="#4d4a4a"
                    isAnimationActive={true} // Enable animation
                    animationDuration={7500} // Duration of animation (1.5s)
                    animationBegin={500} // Delay before animation starts (0.5s)
                    animationEasing="ease-in-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* <div id={Style.Chart_mainDiv}>
                            <div id={Style.PayoutsText}>Bet Placed</div>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={line_data} margin={{
                                    top: 5,
                                    right: 30,
                                    left: -20,
                                    bottom: 10,
                                }}>
                                    <XAxis dataKey="name"
                                        axisLine={false} tickLine={false} fontSize={"0.8rem"}
                                    />
                                    <YAxis
                                        axisLine={false} tickLine={false} fontSize={"0.7rem"}
                                    />
                                    <Tooltip />
                                    <Bar dataKey="uv" fill="#332D5B" />
                                    <Bar dataKey="amt" fill="#736EA0" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
