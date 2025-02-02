import React from 'react'
import Style from './Revenue.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import smiley from '../../../assets/svg/gray_smiley.svg'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import activity from '../../../assets/svg/Activity.svg'
import users from '../../../assets/svg/three_users.svg'


const Revenue = () => {

    const customTickFormatter = (tick) => {
        return `${tick}k`;
    }

    const total_Card2 = [
        {
            image1: users,
            text: "All Users",
            divText: "View all",
            price: "2m",
            view_div: false
        },
        {
            image1: activity,
            text: "Total Bet Placed",
            divText: "View all",
            price: "$25,052,985",
            to: `/totalBetPlaced/${0}`

        }
    ]


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
    return (
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
                                total_Card2.map((object) => {
                                    return (
                                        <Total_Card
                                            image1={object.image1}
                                            text={object.text}
                                            divText={object.divText}
                                            price={object.price}
                                            view_div={object.view_div}
                                            to = {object.to}
                                        />
                                    )
                                })
                            }
                        </div>
                        {/* <img src={graph} alt="" /> */}

                        <div id={Style.AreaChartDiv}>
                            <div id={Style.AreaChart_TextDiv}>
                                <p id={Style.AreaChart_weeklyText}>Weekly Revenue Report</p>
                                <p id={Style.AreaChart_dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
                            </div>
                            <ResponsiveContainer width="100%" height="70%">
                                <AreaChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: -20,
                                        bottom: 0,
                                    }}

                                >
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} tickFormatter={customTickFormatter} />
                                    <Tooltip />
                                    <Area type="normal" dataKey="uv" dot={true} stroke="#003E79" fill="#003e79cc" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div id={Style.Revenue_earning_wrapperDiv}>
                        <div id={Style.Revenue_total_EarningDiv}>
                            <div className={Style.Revenue_earningDiv}>

                                <p className={Style.earningText}>Daily Revenue</p>
                                <p className={Style.priceText}>$3,000</p>

                                <div id={Style.Revenue_progressDiv}>
                                    <div id={Style.Revenue_progressBar}></div>
                                    <img src={smiley} alt="" />
                                </div>
                                <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                    watching to find out more</p>
                            </div>

                            <div className={Style.Revenue_earningDiv}>

                                <p className={Style.earningText}>Earnings this month</p>
                                <p className={Style.priceText}>$23,000</p>

                                <div id={Style.Revenue_progressDiv}>
                                    <div id={Style.Revenue_progressBar_two}></div>
                                    <p id={Style.Revenue_percentText}>45%</p>
                                </div>
                                <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                                    watching to find out more</p>
                            </div>

                        </div>

                        <div id={Style.Dashboard_lineChart}>
                            <p id={Style.Dashboard_RevenueText}>Revenue</p>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart width={300} height={100} data={data} margin={{
                                    top: 5,
                                    // right: 30,
                                    left: -20,
                                    bottom: 10,
                                }} >
                                    <CartesianGrid strokeDasharray="3 4 " vertical={false}></CartesianGrid>
                                    <Line type="monotone" dot={false} dataKey="pv" stroke="#113353" backgr strokeWidth={4} />
                                    <XAxis dataKey="month" fontSize={"0.8rem"}></XAxis>
                                    <YAxis dataKey="uv" fontSize={"0.7rem"}></YAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue