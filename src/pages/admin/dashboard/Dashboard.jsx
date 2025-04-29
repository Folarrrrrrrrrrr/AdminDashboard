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
import physicalMap from "../../../assets/images/physicalMap.jpg";
import LoadingScreen from "../../../components/loader/LoadingSreen";
import logo from "../../../assets/images/S_icon.png";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { fetchRevenue } from "../api_detaills/GlobalStates/Revenue";

const Dashboard = () => {
  const { updateErrorText, updateErrorPopup } = PopupContextHook();

  //  Google map implementation begins

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [betMap, setBetMap] = useState(false);
  const [revenueMap, setRevenueMap] = useState(true);

  const markers = [
    // Nigeria States (36 + FCT)
    {
      id: 1,
      lat: 9.0579,
      lng: 7.4951,
      name: "Abuja (FCT)",
      revenue: 75000,
      betAmount: 15000,
    },
    {
      id: 2,
      lat: 6.5244,
      lng: 3.3792,
      name: "Lagos",
      revenue: 120000,
      betAmount: 25000,
    },
    {
      id: 3,
      lat: 7.1907,
      lng: 3.9183,
      name: "Ogun",
      revenue: 45000,
      betAmount: 10000,
    },
    {
      id: 4,
      lat: 7.3775,
      lng: 3.947,
      name: "Oyo",
      revenue: 50000,
      betAmount: 12000,
    },
    {
      id: 5,
      lat: 5.4763,
      lng: 7.0259,
      name: "Imo",
      revenue: 38000,
      betAmount: 9000,
    },
    {
      id: 6,
      lat: 5.5249,
      lng: 7.4951,
      name: "Abia",
      revenue: 37000,
      betAmount: 8700,
    },
    {
      id: 7,
      lat: 12.0022,
      lng: 8.5919,
      name: "Kano",
      revenue: 82000,
      betAmount: 21000,
    },
    {
      id: 8,
      lat: 7.1133,
      lng: 5.6022,
      name: "Ekiti",
      revenue: 29000,
      betAmount: 6500,
    },
    {
      id: 9,
      lat: 4.8156,
      lng: 7.0498,
      name: "Rivers",
      revenue: 67000,
      betAmount: 18500,
    },
    {
      id: 10,
      lat: 6.333,
      lng: 5.6224,
      name: "Edo",
      revenue: 46000,
      betAmount: 10500,
    },

    // Ghana Regions (4)
    {
      id: 11,
      lat: 5.56,
      lng: -0.21,
      name: "Greater Accra",
      revenue: 88000,
      betAmount: 23000,
    },
    {
      id: 12,
      lat: 6.6913,
      lng: -1.6155,
      name: "Ashanti",
      revenue: 67000,
      betAmount: 17000,
    },
    {
      id: 13,
      lat: 10.0556,
      lng: -2.5126,
      name: "Upper East",
      revenue: 45000,
      betAmount: 12000,
    },
    {
      id: 14,
      lat: 8.3873,
      lng: -2.5585,
      name: "Northern",
      revenue: 39000,
      betAmount: 9800,
    },

    // England Counties (4 sample)
    {
      id: 15,
      lat: 51.5074,
      lng: -0.1278,
      name: "Greater London",
      revenue: 150000,
      betAmount: 40000,
    },
    {
      id: 16,
      lat: 52.4862,
      lng: -1.8904,
      name: "West Midlands",
      revenue: 78000,
      betAmount: 20000,
    },
    {
      id: 17,
      lat: 53.8008,
      lng: -1.5491,
      name: "West Yorkshire",
      revenue: 73000,
      betAmount: 18500,
    },
    {
      id: 18,
      lat: 50.9097,
      lng: -1.4044,
      name: "Hampshire",
      revenue: 69000,
      betAmount: 16500,
    },

    // USA States (4 sample)
    {
      id: 19,
      lat: 40.7128,
      lng: -74.006,
      name: "New York",
      revenue: 200000,
      betAmount: 50000,
    },
    {
      id: 20,
      lat: 34.0522,
      lng: -118.2437,
      name: "California",
      revenue: 180000,
      betAmount: 47000,
    },
    {
      id: 21,
      lat: 41.8781,
      lng: -87.6298,
      name: "Illinois",
      revenue: 140000,
      betAmount: 35000,
    },
    {
      id: 22,
      lat: 29.7604,
      lng: -95.3698,
      name: "Texas",
      revenue: 160000,
      betAmount: 42000,
    },

    // Additional random locations with revenue & betAmount
    {
      id: 23,
      lat: 48.8566,
      lng: 2.3522,
      name: "Paris",
      revenue: 190000,
      betAmount: 48000,
    },
    {
      id: 24,
      lat: 35.6895,
      lng: 139.6917,
      name: "Tokyo",
      revenue: 250000,
      betAmount: 70000,
    },
    {
      id: 25,
      lat: -33.8688,
      lng: 151.2093,
      name: "Sydney",
      revenue: 130000,
      betAmount: 30000,
    },
    {
      id: 26,
      lat: 55.7558,
      lng: 37.6173,
      name: "Moscow",
      revenue: 170000,
      betAmount: 39000,
    },
    {
      id: 27,
      lat: 39.9042,
      lng: 116.4074,
      name: "Beijing",
      revenue: 200000,
      betAmount: 52000,
    },
    {
      id: 28,
      lat: 37.7749,
      lng: -122.4194,
      name: "San Francisco",
      revenue: 155000,
      betAmount: 38000,
    },
    {
      id: 29,
      lat: -23.5505,
      lng: -46.6333,
      name: "São Paulo",
      revenue: 145000,
      betAmount: 36000,
    },
    {
      id: 30,
      lat: 19.076,
      lng: 72.8777,
      name: "Mumbai",
      revenue: 140000,
      betAmount: 34000,
    },
    {
      id: 31,
      lat: 31.2304,
      lng: 121.4737,
      name: "Shanghai",
      revenue: 180000,
      betAmount: 45000,
    },
    {
      id: 32,
      lat: 1.3521,
      lng: 103.8198,
      name: "Singapore",
      revenue: 160000,
      betAmount: 40000,
    },

    // Expand to 100 locations with similar pattern...
  ];

  //  Google map implementation ends
  const customTickFormatter = (tick) => {
    return `${tick}k`;
  };
  const [loading, setLoading] = useState(true);

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
  const mixedArray = interleaveArrays([], footballBetsList);

  console.log(mixedArray);

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
  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);
  const { Revenue, RevenueLoading, RevenueError } = useSelector(
    (state) => state.RevenueReducer
  );
  const yearly = Revenue.yearlyRevenue;

  useEffect(() => {
    setTimeout(
      () =>
        // DiceBetsdata &&
        // totalFootSoldiers &&
        // totalCountries &&
        // totalUsers &&
        // totalBetPlaced &&
        footballBetsList &&
        Revenue
          ? setLoading(false)
          : setLoading(true),
      6000
    );
  }, []);

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
                    id={
                      i === 0
                        ? Style.isPurple
                        : i === 1
                        ? Style.isGreen
                        : i === 2
                        ? Style.isRed
                        : i === 3
                        ? Style.isBlack
                        : null
                    }
                  >
                    {" "}
                    <Stats_Card
                      img={obj.img}
                      figure={obj.figure}
                      text={obj.text}
                      isTransparent="true"
                      // isPurple={i == 0 ? "true" : null}
                      // isGreen={i == 1 ? "true" : null}
                      // isRed={i == 2 ? "true" : null}
                      // isBlack={i == 3 ? "true" : null}
                      onClick={i === 0 ? () => handleTotalBetsClick() : null}
                      to={i !== 0 ? obj.to : undefined} // Use `to` only for non-click items
                    />
                  </div>
                );
              })}
            </div>
            <div id={Style.Dashboard_lineChart}>
              <APIProvider apiKey="AIzaSyDP_49wNtgJOtpKqxMJhqtHrOdoakXD-0U">
                <Map
                  style={{ width: "100%", height: "500px" }}
                  defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // San Francisco
                  defaultZoom={10}
                  mapId="4a23760bc1d6f83"
                  // mapOptions={{ styles: customMapStyles }} // Apply custom styles
                >
                  {/* Loop through markers and place them on the map */}
                  {/* <MarkerCluster> */}
                  {markers.map((marker) => (
                    <AdvancedMarker
                      key={marker.id}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      onClick={() => setSelectedMarker(marker)}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/684/684908.png" // Location pin icon
                        alt="location-icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </AdvancedMarker>
                  ))}
                  {/* Tooltip / InfoWindow */}
                  {selectedMarker && (
                    <InfoWindow
                      position={{
                        lat: selectedMarker.lat,
                        lng: selectedMarker.lng,
                      }}
                      onCloseClick={() => setSelectedMarker(null)}
                    >
                      <div
                        style={{
                          padding: "10px",
                          fontSize: "14px",
                          color: "#000",
                        }}
                      >
                        <h4>{selectedMarker.name}</h4>
                        <p>
                          <b> {revenueMap ? "Revenue" : "Bet"}: </b>
                          {selectedMarker.revenue !== undefined
                            ? `$ ${
                                revenueMap
                                  ? `${selectedMarker.revenue.toLocaleString()}`
                                  : betMap
                                  ? `${selectedMarker.betAmount.toLocaleString()}`
                                  : null
                              }`
                            : "N/A"}
                        </p>
                      </div>
                    </InfoWindow>
                  )}
                  <div style={{ display: "flex" }}>
                    <button
                      onClick={() => {
                        setRevenueMap(true);
                        setBetMap(false);
                      }}
                      style={{
                        height: "30px",
                        marginTop: " 7px",
                        borderRadius: "10px",
                        border: "none",
                        marginRight: "10px",
                      }}
                    >
                      {" "}
                      Revenue{" "}
                    </button>
                    <button
                      onClick={() => {
                        setRevenueMap(false);
                        setBetMap(true);
                      }}
                      style={{
                        height: "30px",
                        marginTop: " 7px",
                        borderRadius: "10px",
                        border: "none",
                      }}
                    >
                      {" "}
                      Bets{" "}
                    </button>
                  </div>
                  {/* </MarkerCluster> */}
                </Map>
              </APIProvider>
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

              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={150}
                  height={40}
                  data={yearly}
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
                    dataKey="total"
                    fill="#4d4a4a"
                    isAnimationActive={true} // Enable animation
                    animationDuration={7500} // Duration of animation (1.5s)
                    animationBegin={500} // Delay before animation starts (0.5s)
                    animationEasing="ease-in-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
