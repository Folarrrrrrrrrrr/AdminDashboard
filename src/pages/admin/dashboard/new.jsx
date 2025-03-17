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
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
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

const Dashboard = () => {
  const { updateErrorText, updateErrorPopup } = PopupContextHook();
  
  
  
  //google map implementation starts

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 6.465422, // Default center (San Francisco)
    lng: 3.406448,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwxbjTuIMTYmp1YSigotjLJn9_slkziT8",
  });

   // Sample revenue data
  
  const revenueLocations =[
      { id: 1, name: "Lagos", coordinates: [3.3792, 6.5244], revenue: 50000 },
      { id: 2, name: "Kano", coordinates: [8.5167, 12.0000], revenue: 45000 },
      { id: 3, name: "Ibadan", coordinates: [3.8946, 7.3775], revenue: 40000 },
      { id: 4, name: "Abuja", coordinates: [7.4913, 9.0723], revenue: 55000 },
      { id: 5, name: "Port Harcourt", coordinates: [7.0336, 4.8242], revenue: 42000 },
      { id: 6, name: "Benin City", coordinates: [5.6174, 6.3392], revenue: 38000 },
      { id: 7, name: "Maiduguri", coordinates: [13.1500, 11.8333], revenue: 37000 },
      { id: 8, name: "Zaria", coordinates: [7.7199, 11.0855], revenue: 36000 },
      { id: 9, name: "Aba", coordinates: [7.3643, 5.1127], revenue: 35000 },
      { id: 10, name: "Jos", coordinates: [8.8583, 9.8965], revenue: 34000 },
      { id: 11, name: "Ilorin", coordinates: [4.5500, 8.5000], revenue: 33000 },
      { id: 12, name: "Oyo", coordinates: [3.9398, 7.3767], revenue: 32000 },
      { id: 13, name: "Enugu", coordinates: [7.5489, 6.4599], revenue: 31000 },
      { id: 14, name: "Abeokuta", coordinates: [3.3277, 7.1452], revenue: 30000 },
      { id: 15, name: "Sokoto", coordinates: [5.2476, 13.0059], revenue: 29000 },
      { id: 16, name: "Onitsha", coordinates: [6.8029, 6.1413], revenue: 28000 },
      { id: 17, name: "Warri", coordinates: [5.7603, 5.5442], revenue: 27000 },
      { id: 18, name: "Ebute Ikorodu", coordinates: [3.5081, 6.6169], revenue: 26000 },
      { id: 19, name: "Okene", coordinates: [6.2339, 7.5636], revenue: 25000 },
      { id: 20, name: "Calabar", coordinates: [8.3345, 4.9829], revenue: 24000 },
      { id: 21, name: "Uyo", coordinates: [7.9128, 5.0370], revenue: 23000 },
      { id: 22, name: "Katsina", coordinates: [7.6171, 12.9855], revenue: 22000 },
      { id: 23, name: "Ado-Ekiti", coordinates: [5.2214, 7.6211], revenue: 21000 },
      { id: 24, name: "Akure", coordinates: [5.2103, 7.2508], revenue: 20000 },
      { id: 25, name: "Bauchi", coordinates: [9.8463, 10.3142], revenue: 19000 },
      { id: 26, name: "Ikeja", coordinates: [3.3491, 6.6059], revenue: 18000 },
      { id: 27, name: "Makurdi", coordinates: [8.5361, 7.7337], revenue: 17000 },
      { id: 28, name: "Minna", coordinates: [6.5463, 9.5836], revenue: 16000 },
      { id: 29, name: "Effon Alaiye", coordinates: [4.9247, 7.6500], revenue: 15000 },
      { id: 30, name: "Ilesa", coordinates: [4.7416, 7.6294], revenue: 14000 },
      { id: 31, name: "Owo", coordinates: [5.5863, 7.1962], revenue: 13000 },
      { id: 32, name: "Umuahia", coordinates: [7.4846, 5.5320], revenue: 12000 },
      { id: 33, name: "Ondo", coordinates: [4.8417, 7.1000], revenue: 11000 },
      { id: 34, name: "Ikot Ekpene", coordinates: [7.7071, 5.1812], revenue: 10000 },
      { id: 35, name: "Iwo", coordinates: [4.1872, 7.6292], revenue: 9000 },
      { id: 36, name: "Yola", coordinates: [12.4954, 9.2035], revenue: 8000 },
      { id: 37, name: "Birnin Kebbi", coordinates: [4.1995, 12.4661], revenue: 7000 },
      { id: 38, name: "Owerri", coordinates: [7.0259, 5.4763], revenue: 6000 },
      { id: 39, name: "Gombe", coordinates: [11.1667, 10.2833], revenue: 5000 },
      { id: 40, name: "Bida", coordinates: [6.0167, 9.0833], revenue: 4000 },
      { id: 41, name: "Ogbomosho", coordinates: [4.2452, 8.1422], revenue: 3000 },
      { id: 42, name: "Jalingo", coordinates: [11.3658, 8.8937], revenue: 2000 },
      { id: 43, name: "Damaturu", coordinates: [11.9634, 11.7467], revenue: 1000 },
    ];
    
  
    const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleMarkerHover = (location) => {
    const lat = parseFloat(location.coordinates[1]);  // Convert to number
    const lng = parseFloat(location.coordinates[0]);  // Convert to number

    if (isNaN(lat) || isNaN(lng)) {
        console.error("Invalid coordinates for location:", location);
        return;
    }

    setHoveredLocation({
        lat,
        lng,
        name: location.name,
        revenue: location.revenue
    });
  };

  // const handleMarkerLeave = () => {
  //   setHoveredLocation(null);
  // };
  //Google map implementation ends here

  const customTickFormatter = (tick) => {
    return `${tick}k`;
  };
  const [loading, setLoading] = useState(true);

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
    setTimeout(
      () =>
        DiceBetsdata && footballBetsList ? setLoading(false) : setLoading(true),
      3000
    );
  }, []);
  return loading ? (
    <LoadingScreen />
  ) : (
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
            {/* <img id={Style.mapImage} src={physicalMap} alt="" /> */}
            {/* <use googleMapsApiKey="AIzaSyCwxbjTuIMTYmp1YSigotjLJn9_slkziT8"> */}
              
              {
                !isLoaded? <>Loading map...</> 
                :
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={8}
              >
                {
                revenueLocations.map((location) => (
                  <Marker
                    key={location.id}
                    position={{ lat: location.lat, lng: location.lng }}
                    label={`$${location.revenue}`}                    
                    icon={{
                      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Custom icon
                      scaledSize: new window.google.maps.Size(40, 40),
                       cursor: "pointer", 
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMarkerHover(location) ;
                      console.log("Hovered Location:", hoveredLocation);
                    }} // Show tooltip on hover
                    // onMouseOut={() => handleMarkerLeave(null)} // Hide tooltip when mouse leaves 
                  />
                ))}
              {hoveredLocation && (
                
                
                <InfoWindow position={{ lat: hoveredLocation.lat, lng: hoveredLocation.lng }}>
                  <div>
                    <h3>{hoveredLocation.name}</h3>
                    <p><b>Revenue:</b> ${hoveredLocation.revenue.toLocaleString()}</p>
                  </div>
                </InfoWindow>
                )}
              </GoogleMap>

              }
           
            {/* </use> */}
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
                <YAxis axisLine={false} tickLine={false} fontSize={"0.7rem"} />
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
  );
};

export default Dashboard;
