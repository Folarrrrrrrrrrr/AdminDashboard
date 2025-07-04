import React, { useEffect, useState, useRef } from "react";
import Style from "./Foot_Soldiers.module.css";
import Button from "../../../components/button/Button";
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
import { motion } from "framer-motion";
import footSoldiers from "../../../assets/images/footSoldiers.png";
import logo from '../../../assets/images/S_icon.png'
import LoadingScreen from "../../../components/loader/LoadingSreen";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Foot_Soldiers = () => {
  const dispatch = useDispatch();
  const [erorPopup, setErrorPopup] = useState(true);
  const sliderRef = useRef(null);

  // const scroll "left") => {
  //   if (cardContainerRef.current) {
  //     cardContainerRef.current.scrollLeft += scrollOffset;
  //   }
  // };

    const scroll = (direction) => {
    const number = (280 * 100) / 100;
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -number : number;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    dispatch(fetchFootSoldiersSummary());
  }, [dispatch]);

  const {
    footSoldiersSummaryData,
    footSoldiersSummaryloading,
    footSoldiersSummaryerror,
  } = useSelector((state) => state.FootSoldierSummary);

  console.log(footSoldiersSummaryData);  
  // console.log(footSoldiersSummaryerror);

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
      text: "Payment to Soldiers",
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


      <div id={Style.Foot_Soldiers_mainDiv}>
        <img src={footSoldiers} id={Style.footSoldiersImage} alt="" />
        <div id={Style.footSoldierHeaderDiv}>
          <Header
            // headerText={"Foot Soldiers"}
            // headerInfo={"Here’s an information on all Foot Soldiers"}
          />
        </div>

      {/* This is 404 animation */}
        {
          erorPopup && footSoldiersSummaryerror?.includes('401')?
            <div className={Style.errorContainer}>
              <button
                id={Style.closeErrorBtn}
                onClick={() => setErrorPopup(false)}
              >
                &times;
              </button>
              <DotLottieReact
                src="https://lottie.host/75c1ee26-7356-43d6-983b-f0c3e9ad86ad/H1VFgjJyzy.lottie"
                loop
                autoplay
              />
              <p className={Style.errorText}>{footSoldiersSummaryerror}: log in </p>
            </div> 
          : 
          erorPopup && footSoldiersSummaryerror?.includes('Failed to fetch')?
            <div className={Style.errorContainer} onClick={()=> setErrorPopup(false)}>
              <button
                id={Style.closeErrorBtn}
                onClick={() => setErrorPopup(false)}
              >
                &times;
              </button>
              <DotLottieReact
              src="https://lottie.host/6f960326-5802-4519-8bd7-c84a28ca486a/gbi9gKTA09.lottie"
              loop
              autoplay
              />
            <p className={Style.errorText} >{footSoldiersSummaryerror}: check server or connection </p>
              </div>
            : 
            <></>
        }
        <div id={Style.Foot_Soldiers_wrapperDiv}>
            <p id={Style.Foot_Soldiers_headerText}>Foot Soldier's Summary</p>
          <div style={{display:"flex"}}> 
            <div id={Style.allCardsDiv} > 
              <div id={Style.sliderContainer}>        
                <button className={Style.sliderBtnOne} onClick={() => {scroll("left"); console.log("truueee!");}}>  ◀ </button>
                <div id={Style.Foot_Soldiers_cardDiv} ref={sliderRef}>
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
                <button className={Style.sliderBtnTwo} onClick={() => {scroll("right"); console.log("truueee!");}}> ▶ </button>
              </div>
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
            </div>
            
            <div id={Style.Revenue_StatsDiv}>
              <div id={Style.Customer_Support_performanceDiv}>
              <div id={Style.performance_headerDiv}>
                <p>Top Performing Foot Soldiers</p>
                <div id={Style.date_viewDiv}>
                  <p id={Style.dateText}>
                    Week One October, 2024 <img src={arrow_down} alt="" />
                  </p>
                  <Link to={"/TotalTopAgents"}>
                    <Button text={"View All"} />
                  </Link>
                </div>
              </div>

              <table>
                <tbody>
                  <tr>
                    <td>Days</td>
                    <td className={Style.performing_agentText}>Calls</td>
                    <td className={Style.performing_agentText}>Mails</td>
                    <td className={Style.performing_agentText}>Msg</td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>46</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Link to={"/topAgent"}>
                        <Button text={"View Details"} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>22</td>
                    <td className={Style.performing_agentText}>13</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Button text={"View Details"} />
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>45</td>
                    <td className={Style.performing_agentText}>8</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Button text={"View Details"} />
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>34</td>
                    <td className={Style.performing_agentText}>77</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Button text={"View Details"} />
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>89</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Button text={"View Details"} />
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>33</td>
                    <td className={Style.performing_agentText}>566</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Button text={"View Details"} />
                    </td>
                  </tr>
                  <tr>
                    <td>John Doe</td>
                    <td className={Style.performing_agentText}>21</td>
                    <td className={Style.performing_agentText}>44</td>
                    <td className={Style.performing_agentText}>5</td>
                    <td>
                      <Button text={"View Details"} />
                    </td>
                  </tr>
                </tbody>
              </table>
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
    </>
  );
};

export default Foot_Soldiers;
