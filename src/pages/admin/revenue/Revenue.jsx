import React, {useEffect, useState} from 'react'
import Style from './Revenue.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import smiley from '../../../assets/svg/gray_smiley.svg'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import logo from '../../../assets/images/S_icon.png'
import activity from '../../../assets/svg/Activity.svg'
import users from '../../../assets/svg/three_users.svg'
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchRevenue } from "../api_detaills/GlobalStates/Revenue";
import RevenueProgressBar from '../../../components/RevenueProgress/RevenueProgress';


const Revenue = () => {
    const dispatch= useDispatch();
    const [loading, setLoading] = useState(true);
    
    const customTickFormatter = (tick) => {
        return `${tick}k`;
    }    

    const data = [
        {
            name: 'Mon',
            month: "Jan",
            uv: 50,
            pv: 40,
            amt: 2400,
        },
        {
            name: 'Tue',
            month: "Feb",
            uv: 70,
            pv: 60,
            amt: 2210,
        },
        {
            name: 'Wed',
            month: "Mar",
            uv: 80,
            pv: 40,
            amt: 2290,
        },
        {
            name: 'Thur',
            month: "Apr",
            uv: 65,
            pv: 20,
            amt: 2000,
        },
        {
            name: 'Fri',
            month: "May",
            uv: 84,
            pv: 50,
            amt: 2181,
        },
        {
            name: 'Sat',
            month: "Jun",
            uv: 100,
            pv: 60,
            amt: 2500,
        },
        {
            name: 'Sun',
            month: "Jul",
            uv: 60,
            pv: 40,
            amt: 2100,
        },
        // {
        //     month: "Aug",
        //     pv: 4300,
        //     amt: 2100,
        //   },
        //   {
        //     month: "Sep",
        //     pv: 4300,
        //     amt: 2100,
        //   },
        //   {
        //     month: "Oct",
        //     pv: 4300,
        //     amt: 2100,
        //   },
        //   {
        //     month: "Nov",
        //     pv: 4300,
        //     amt: 2100,
        //   },
        //   {
        //     month: "Dec",
        //     pv: 4300,
        //     amt: 2100,
        //   },

    ]; 

    
    useEffect(() => {
        dispatch(fetchRevenue());
    }, [dispatch]);
    
    const { Revenue, RevenueLoading, RevenueError } = useSelector((state) => state.RevenueReducer);
    const weekly = Revenue.weeklyRevenue
    const monthly = Revenue.monthlyRevenue
    const yearly = Revenue.yearlyRevenue
    console.log(Revenue.yearlyRevenue);
    console.log(monthly);
    console.log(weekly);
    

    const total_Card2 = [
        {
            image1: users,
            text: "All Users",
            divText: "View all",
            price: Revenue.totalUsers,
            view_div: false
        },
        {
            image1: activity,
            text: "Total Bet Placed",
            // divText: "View all",
            price: ` ${Revenue.totalBetsPlaced}`,
            // to: `/totalBetPlaced/${0}`

        }
    ]


    useEffect(() => {
        setTimeout(
          () =>
            Revenue ? setLoading(false) : setLoading(true),
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

        <div id={Style.Revenue_mainDiv}>

            <Header
                headerText={"Revenue"}
                headerInfo={"Here’s an information on all Revenue"}
            />

            <div id={Style.Revenue_First_WrapperDiv}>
                <div id={Style.Revenue_wrapperDiv}>
                    <div id={Style.Revenue_weeklyReport_Div}>
                        <div id={Style.Total_Card_mapDiv}>
                            {
                                total_Card2.map((object,i) => {
                                    return (
                                        <div key={i}>
                                            <Total_Card
                                                image1={object.image1}
                                                text={object.text}
                                                divText={object.divText}
                                                price={object.price}
                                                view_div={object.view_div}
                                                to = {object.to}
                                                currency="true"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* <img src={graph} alt="" /> */}  

                        <div id={Style.AreaChartDiv} >
                            <div id={Style.AreaChart_TextDiv}>
                                <p id={Style.AreaChart_weeklyText}>Weekly Revenue Report</p>
                                <p id={Style.AreaChart_dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                            </div>
                            <ResponsiveContainer width="100%"  aspect={1.1}>
                               <AreaChart data={weekly}
                                    margin={{ top: 0, right: 2, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>

                                    <XAxis dataKey="name" />
                                    <YAxis 
                                        domain={[0, (dataMax) => Math.ceil(dataMax * 7.0)]} //
                                        tickFormatter={(tick) => `${tick}`} 
                                />
                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#1E3A8A"
                                        fillOpacity={1}
                                        fill="url(#colorSeries2)"
                                        animationDuration={3000}
                                        animationEasing="ease-in-out"
                                        isAnimationActive={true}
                                    />
                                </AreaChart>

                            </ResponsiveContainer>
                        </div>      
                    </div>

                    <div id={Style.Revenue_earning_wrapperDiv}>
                        <div id={Style.Revenue_total_EarningDiv}>
                            <div className={Style.Revenue_earningDiv}>
                                <RevenueProgressBar 
                                    catgory='Daily'
                                    currentRevenue={Revenue.dailyRevenue} 
                                    expectedRevenue={5000} 
                                    comparisonText="keep watching to find out more" 
                                />
                            </div>

                            <div className={Style.Revenue_earningDiv}>

                                <RevenueProgressBar 
                                    catgory="Monthly"
                                    currentRevenue={Revenue.monthlyEarnings} 
                                    expectedRevenue= {100000}  
                                    comparisonText="keep watching to find out more" 
                                />
                            </div>

                        </div>

                        <div id={Style.Dashboard_lineChart}>
                            <p id={Style.Dashboard_RevenueText}>Revenue</p>
                            <ResponsiveContainer width="100%"  aspect={2.5}>
                                <AreaChart data={monthly}
                                    margin={{ top: 0, right: 2, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>

                                    <XAxis dataKey="name" />
                                    <YAxis 
                                        domain={[0, (dataMax) => Math.ceil(dataMax * 7.0)]} //
                                        tickFormatter={(tick) => `${tick}`} 
                                />
                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#1E3A8A"
                                        fillOpacity={1}
                                        fill="url(#colorSeries2)"
                                        animationDuration={3000}
                                        animationEasing="ease-in-out"
                                        isAnimationActive={true}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Revenue