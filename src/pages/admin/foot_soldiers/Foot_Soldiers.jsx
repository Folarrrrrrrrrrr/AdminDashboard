import React, { useEffect, useState } from "react";
import Style from "./Foot_Soldiers.module.css";
import Total_Card from "../../../components/total_Card/Total_Card";
import Activity from "../../../assets/svg/Activity.svg";
import total_users from "../../../assets/svg/total_users.svg";
import Header from "../../../components/header/Header";
import arrow_down from "../../../assets/svg/arrow_down.svg";
import rise from "../../../assets/svg/rise.svg";
import flag from "../../../assets/svg/flag.svg";
import Stats_Card from "../../../components/stats_card/Stats_Card";
import amount from "../../../assets/svg/stats_capture.svg";
import clock from "../../../assets/svg/stats_clock.svg";
import { Link } from "react-router-dom";
import { PopupContextHook } from "../../../WhiteHouse_PopupContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootSoldiersSummary } from "../api_detaills/GlobalStates/FootSoldierSummary";
// import { fetchFootballBetList } from '../api_detaills/GlobalStates/FootballBetList'
import footSoldiers from "../../../assets/images/footSoldiers.png";
import LoadingScreen from "../../../components/loader/LoadingSreen";


const Foot_Soldiers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFootSoldiersSummary());
  }, [dispatch]);

  const {
    footSoldiersSummaryData,
    footSoldiersSummaryloading,
    footSoldiersSummaryerror,
  } = useSelector((state) => state.FootSoldierSummary);

  console.log(footSoldiersSummaryData);

  const { updateRevenuePopup } = PopupContextHook();

  const showRevenue = () => {
    updateRevenuePopup(true);
  };

  const soldiers_card = [
    {
      image1: Activity,
      text: "All Soldiers",
      divText: "View all",
      price: footSoldiersSummaryData.AllFootSoldiers,
      to: "/allFootSoldiers",
    },
    {
      image1: total_users,
      text: "Users From Soldiers",
      divText: "View All",
      price: footSoldiersSummaryData.UsersFromFootSoldiers,
      to: "/usersFromSoldiers",
    },
    {
      image1: amount,
      text: "Amount Paid to Soldiers",
      divText: "View all",
      price: footSoldiersSummaryData.AmountPaidToSoldiers,
      to: "/amountPaid",
    },
    {
      image1: clock,
      text: "Pending Requests",
      divText: "View All",
      price: footSoldiersSummaryData.PendingRequests,
      to: "/pendingRequests",
    },
  ];

  const foot_soldiers_stats_card = [
    {
      img: rise,
      figure: footSoldiersSummaryData.TotalTransactions,
      text: "Transactions",
      to: "/AllTransaction",
    },
    {
      img: flag,
      figure: footSoldiersSummaryData.RegisteredCountries,
      text: "Reg Countries",
      to: "/footSoldiersCountries",
    },
  ];

  const arr = footSoldiersSummaryData.RecentlyOnboardedUsers;
  //  [

  //     {
  //         date: "23 Aug,2024",
  //         userID: "UA 123476689",
  //         footsoldiers: "John Doe",
  //         status: "Onboarded"
  //     },
  //     {
  //         date: "23 Aug,2024",
  //         userID: "UA 123476689",
  //         footsoldiers: "John Doe",
  //         status: "Onboarded"
  //     },
  //     {
  //         date: "23 Aug,2024",
  //         userID: "UA 123476689",
  //         footsoldiers: "John Doe",
  //         status: "Onboarded"
  //     },
  //     {
  //         date: "23 Aug,2024",
  //         userID: "UA 123476689",
  //         footsoldiers: "John Doe",
  //         status: "Onboarded"
  //     },
  //     {
  //         date: "23 Aug,2024",
  //         userID: "UA 123476689",
  //         footsoldiers: "John Doe",
  //         status: "Onboarded"
  //     },
  // ]

  // Card slider section.


    const [loading, setLoading ]= useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    useEffect(()=>{
          setTimeout(()=> footSoldiersSummaryData ? setLoading(false): setLoading(true), 3000)
        }, [])
  return (
   loading ? <LoadingScreen/> : 
    <div id={Style.Foot_Soldiers_mainDiv}>
      <img src={footSoldiers} id={Style.footSoldiersImage} alt="" />
      <div id={Style.footSoldierHeaderDiv}>
        <Header
          headerText={"Foot Soldiers"}
          headerInfo={"Here’s an information on all Foot Soldiers"}
        />
      </div>

      <div id={Style.Foot_Soldiers_wrapperDiv}>
          <p id={Style.Foot_Soldiers_headerText}>Foot Soldier's Summary</p>
        <div id={Style.allCardsDiv}>
          <div id={Style.Foot_Soldiers_cardDiv}>
            {/* <button id={Style.-}></button> */}
            {soldiers_card.map((obj, index) => {
              return (
                <div id={Style.eachTotCard}>
                    <Total_Card
                      image1={obj.image1}
                      text={obj.text}
                      divText={obj.divText}
                      price={obj.price}
                      to={obj.to}
                      isPurple={index == 0 ? "true" : null}
                      isGreen={index == 1 ? "true" : null}
                      isRed={index == 2 ? "true" : null}
                      isBlack={index == 3 ? "true" : null}
                    />
                </div>
              );
            })}
          </div>
          <div id={Style.Revenue_StatsDiv}>
            <div id={Style.Revenue_wrapperDiv}>
              <div className={Style.Revenue_earningDiv}>
                <div id={Style.Revenue_headerDiv}>
                  <p className={Style.earningText}>Daily Payments</p>

                  <p id={Style.dateText}>
                    Today <img src={arrow_down} alt="" />
                  </p>
                </div>
                <p id={Style.priceText}>3,000 SC</p>

                <div className={Style.btnDiv}>
                  <button onClick={showRevenue}>Details</button>
                </div>
              </div>

              <div className={Style.Revenue_earningDiv}>
                <div id={Style.Revenue_headerDiv}>
                  <p className={Style.earningText}>Monthly Payments</p>

                  <p id={Style.dateText}>
                    Today <img src={arrow_down} alt="" />
                  </p>
                </div>
                <p id={Style.priceText}>60,000 SC</p>

                <div className={Style.btnDiv}>
                  <button>Details</button>
                </div>
              </div>
            </div>
            <div id={Style.foot_soldiers_stats_cardDiv}>
              {foot_soldiers_stats_card.map((obj) => {
                return (
                  <Stats_Card
                    figure={obj.figure}
                    img={obj.img}
                    to={obj.to}
                    text={obj.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div id={Style.Foot_Soldiers_table_revenueDiv}>
          <div id={Style.onboarded_users_wrapperDiv}>
            <div id={Style.onboarded_users_headerDiv}>
              <p>Recently Onboarded Users</p>
              <Link to={"/recentOnboarderUsers"}>
                {" "}
                <p>See All</p>
              </Link>
            </div>

            <table id={window.innerWidth < 480 ? Style.table : null}>
              <thead>
                <tr id={Style.headerTable}>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>User ID</th>
                  <th>FootSoldiers</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {arr.map((obj, index) => {
                  return (
                    <tr>
                      <td style={{ color: "#000000" }}>{index + 1}</td>
                      <td>{obj.date}</td>
                      <td>{obj.userId}</td>
                      <td>{obj.footSoldiers}</td>
                      <td>
                        <button
                          style={{
                            Width: "5.5rem",
                            height: "1.62rem",
                            backgroundColor: "#31c36433",
                            color: "#31C364",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                            fontSize: "0.8rem",
                            borderRadius: "0.3rem",
                          }}
                        >
                          {obj.status}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Foot_Soldiers;
