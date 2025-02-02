import React, { useEffect, useState } from 'react'
import Style from '../placeBet/PlaceBet.module.css'
import Total_Card from '../../../components/total_Card/Total_Card'
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../../../components/header/Header'
import Activity from '../../../assets/svg/Activity.svg'
import total_users from '../../../assets/svg/total_users.svg'
import winner from '../../../assets/svg/winner.svg'
import loosers from '../../../assets/svg/loosers.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import fetchOnlineUsers from "../api_detaills/GlobalStates/onlineUsers";



const PlaceBet = () => {
    
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOnlineUsers());
//   }, [dispatch]);

  const { data, loading, error } = useSelector((state) => state.OnlineUser);

//   console.log(data);

    // const [data, setData] = useState()

    // useEffect(() => {

    //     const FetchData = async () => {
    //         const response = await fetch("https://api.coincap.io/v2/assets/?limit=10")
    //         const data = await response.json()
    //         // console.log(data);
    //         setData(data.data)
    //     }
    //     FetchData()
    // }, [])
    
    const line_data = [
        {
            name: 'jan',
            uv: 4000,
            pv: 20,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 50,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 30,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 40,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 70,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 60,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 50,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 30,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 60,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 80,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 50,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 70,
            amt: 2100,
        },
    ];

    const total_Card1 = [
        {
            image1: Activity,
            text: "Total Bet Placed",
            divText: "View all",
            price: "$25,052,985",
            to: `/totalBetPlaced/${0}`
        },
        {
            image1: total_users,
            text: "Total Online Players",
            divText: "View all",
            price: data,
            to: "/totalOnlinePlayers"
        },
        {
            image1: winner,
            text:"Winners",
            divText: "View all",
            price: "345,000",
            to: `/totalBetPlaced/${1}`
            // to: "/winners"
        },
        {
            image1: loosers,
            text: "Loosers",
            divText: "View all",
            price: "23,000",
            to: `/totalBetPlaced/${2}`
        },
    ]

    return (
        <div id={Style.PlaceBet_mainDiv}>

            <Header
                headerText={"Bet Placed"}
                headerInfo={"Here’s an information on all placed bets"} />

            <div id={Style.PlaceBet_wrapperDiv}>
                <div>
                    <p id={Style.PlaceBet_summaryText}>Today's Summary</p>
                    <div id={Style.Total_Card_mapDiv}>
                        {
                            total_Card1.map((object, index) => {
                                return (
                                    <div id={Style.statCards}> 
                                        <Total_Card
                                            image1={object.image1}
                                            text={object.text}
                                            divText={object.divText}
                                            price={object.price}
                                            to={object.to}
                                            isPurple={index == 0 ? "true" : null}
                                    isGreen={index == 1 ? "true" : null}
                                    isRed={index == 2 ? "true" : null}
                                    isBlack={index == 3 ? "true" : null}              
                                    
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {window.innerWidth < 480 ? <hr id={Style.PlaceBet_hr} /> : null}
                    <div id={Style.ChartDiv}>
                        <div id={Style.Chart_mainDiv}>
                            <div id={Style.PayoutsText}>Bet Placed</div>
                            <ResponsiveContainer
                                width="100%"
                                height="100%">
                                <BarChart
                                    width={300}
                                    height={100}
                                    data={line_data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: -20,
                                        bottom: 10,
                                    }}
                                >

                                    <XAxis dataKey="name" fontSize={"0.8rem"} tickLine={false} axisLine={false}></XAxis>
                                    <YAxis fontSize={"0.7rem"} tickLine={false} axisLine={false} ></YAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="uv" stroke='none' stackId='a' fill='#0E093C'></Bar>
                                    <Bar dataKey="amt" stackId='a' fill='#736EA0'></Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </div>
                        <div id={Style.Placebet_lineChart_Two}>
                            <div id={Style.Revenue_Div}>
                                <p id={Style.Placebet_RevenueText}>Revenue</p>
                              <Link to={"/revenue"}><p id={Style.PlaceBet_MoreText}>See More</p></Link>  
                            </div>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={300} height={100} data={line_data} margin={{
                                    top: 20,
                                    right: 30,
                                    left: -30,
                                    bottom: 10,
                                }} >
                                    <XAxis dataKey="name" fontSize={"0.8rem"} tickLine={false} axisLine={false}></XAxis>
                                    <YAxis dataKey="pv" fontSize={"0.7rem"} tickLine={false} axisLine={false}></YAxis>
                                    <Bar dataKey="pv" fill="#0E093C" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default PlaceBet

