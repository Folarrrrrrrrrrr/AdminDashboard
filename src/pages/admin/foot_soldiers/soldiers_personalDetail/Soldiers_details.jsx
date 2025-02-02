import React, { useEffect, useState } from "react";
import Style from "./Soldiers_details.module.css";
import {
  BarChart,
  YAxis,
  XAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../../../../components/header/Header";
import chat from "../../../../assets/svg/chat.svg";
import clock from "../../../../assets/svg/clock.svg";
import users from "../../../../assets/svg/users.svg";
import rise from "../../../../assets/svg/rise.svg";
import arrow_down from "../../../../assets/svg/arrow_down-dark.svg";
import Button from "../../../../components/button/Button";
import no_complaint from "../../../../assets/svg/no_complaint.svg";
import { Link, useParams } from "react-router-dom";
import Stats_Card from "../../../../components/stats_card/Stats_Card";
import search from "../../../../assets/svg/Search.svg";
import InputField from "../../../../components/input/InputField";
import download from "../../../../assets/svg/download_img.svg";
import coin from "../../../../assets/svg/coin.svg";
import { fetchFootSolidersProfile } from "../../api_detaills/GlobalStates/FooltSoldiersProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const Personal_Info = () => {
  const { phone } = useParams();
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFootSolidersProfile());
  }, []);

  const {
    FootSolidersProfileData,
    FootSolidersProfileloading,
    FootSolidersProfileerror,
  } = useSelector((state) => state.FooltSoldiersProfile);

    useEffect(() => {
  // const response = await axios.get(`FootSolidersProfileData/profiles/${phone}`);
  const foundFootSoldier = FootSolidersProfileData.find(
    (user) => user.phone === phone
  );
  setProfile(foundFootSoldier);
  // fetchProfile();
    }, [phone]);

  console.log(profile);

  // const [isGridView, setIsGridView] = useState(true);

  // const all_soldiers_arr = FootSolidersProfileData;

  const arr = ["gt"];

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

  const users_stats_card = [
    {
      img: clock,
      figure: "3k",
      text: "Onboarded Users",
      to: "/soldierOnboardedUsers",
    },
    {
      img: users,
      figure: "34",
      text: "Lorem",
      // to: "/userFriends"
    },
    {
      img: chat,
      figure: "14",
      text: "Lorem",
      // to: "/conversations"
    },
    {
      img: rise,
      figure: "2k",
      text: "Transactions",
      to: "/soldiersTransaction",
    },
  ];

  const historyArr = [
    {
      refNumber: "UA 123476689",
      date: "24 Aug, 2024",
      time: "13:45",
      amountPaid: "20000",
      paymentType: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      userOnboarded: "John Doe",
      status: "Successful",
    },
    {
      refNumber: "UA 123476689",
      date: "24 Aug, 2024",
      time: "13:45",
      amountPaid: "20000",
      paymentType: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      userOnboarded: "John Doe",
      status: "Successful",
    },
    {
      refNumber: "UA 123476689",
      date: "24 Aug, 2024",
      time: "13:45",
      amountPaid: "20000",
      paymentType: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      userOnboarded: "John Doe",
      status: "Successful",
    },
  ];

  const withdrawalArr = [
    {
      refNumber: "UA 123476689",
      time: "13:44",
      country: "Nigeria",
      coinConverted: "7000",
      amountWithdrawn: "3000",
      bankDetails: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      status: "Purchased",
    },

    {
      time: "13:44",
      country: "Nigeria",
      coinConverted: "7000",
      amountWithdrawn: "3000",
      bankDetails: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      status: "Pending",
    },
    {
      time: "13:44",
      country: "Nigeria",
      coinConverted: "7000",
      amountWithdrawn: "3000",
      bankDetails: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      status: "Purchased",
    },
    {
      time: "13:44",
      country: "Nigeria",
      coinConverted: "7000",
      amountWithdrawn: "3000",
      bankDetails: {
        accName: "John Doe",
        accNo: "0123456789",
        bank: "Access Bank",
      },
      status: "Pending",
    },
  ];

  return (
    <div id={Style.Personal_Info_mainDiv}>
      <Header
        headerText={"Personal Information"}
        headerInfo={"Here’s an information on this User"}
      />

      <div id={Style.Personal_Info_wrapperDiv}>
        <div id={Style.balance_buttonDiv}>
          <div id={Style.balance_game_HistoryDiv}>
            <div id={Style.Coin_BalanceDiv}>
              <div id={Style.coinDiv}>
                <img src={coin} alt="" />
              </div>
              <div>
                <p>3K</p>
                <p>Coin Balance</p>
              </div>
            </div>
          </div>

          <div id={Style.Personal_Info_buttonDiv}>
            <button>Freeze Account</button>
            <button>Suspend Account</button>
            <button>Fund Account</button>
          </div>
        </div>

        <div>
          <p className={Style.Personal_Info_headerText}>Personal Information</p>
          <div id={Style.Personal_Info_tableDiv}>
            <table>
              <tr id={Style.headerTable}>
                <th>S/N</th>
                <th>User ID</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Bank Detail</th>
                <th>Country of Operation</th>
                <th>Status</th>
              </tr>
              <tr id={Style.Personal_Info_tr}>
                <td>1</td>
                <td>{profile.user_id}</td>
                <td> no data</td>
                <td>{profile.phone}</td>
                <td>{profile.country}</td>
                <td>no data</td>
                <td>{profile.region}</td>
                <td>{profile.approved}</td>
              </tr>
              {/* <tr id={Style.Personal_Info_tr}>
                                <td>1</td>
                                <td>SA 123476689</td>
                                <td>johndoe@gmail.com</td>
                                <td>+2344816273888</td>
                                <td>Nigeria</td>
                                <td>
                                    <div id={Style.BankDetails_Div}>
                                        <div>
                                            <p>Bank</p>
                                            <p className={Style.BankDetails_BoldText}>Access Bank</p>
                                        </div>
                                        <div>
                                            <p>Account Number</p>
                                            <p className={Style.BankDetails_BoldText}>0123456789</p>
                                        </div><div>
                                            <p>Account Name</p>
                                            <p className={Style.BankDetails_BoldText}>John Doe</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Ikeja</td>
                                <td>
                                    <div id={Style.statusText}>Online</div>
                                </td>

                            </tr> */}
            </table>
          </div>
        </div>

        <p className={Style.Personal_Info_headerText}>Onboarding Details</p>
        <div id={Style.Personal_Info_Card_wrapper}>
          {users_stats_card.map((obj) => {
            return (
              <Stats_Card
                figure={obj.figure}
                img={obj.img}
                text={obj.text}
                to={obj.to}
              />
            );
          })}
        </div>

        <div id={Style.Personal_Info_graphReport_Div}>
          <div id={Style.Dashboard_lineChart_Two}>
            <p id={Style.Dashboard_RevenueText}>Revenue</p>
            <ResponsiveContainer width="100%" height="70%">
              <BarChart
                width={150}
                height={40}
                data={line_data}
                margin={{
                  top: 5,
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
                <Bar dataKey="pv" fill="#113353" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div id={Style.Personal_Info_Report_mainDiv}>
            <div id={Style.Personal_Info_ReportTextDiv}>
              <p id={Style.ReportHeader}>Complaints</p>
              <p id={Style.dateText}>
                3rd of October, 2024 <img src={arrow_down} alt="" />
              </p>
            </div>

            {arr.length == 0 ? (
              <div id={Style.no_complaintDiv}>
                <img src={no_complaint} alt="" />
                <p>No Recent Complaint</p>
              </div>
            ) : (
              <div id={Style.Personal_Info_ReportWrapper}>
                <div className={Style.Personal_Info_ReportDiv}>
                  <p>1</p>
                  <p>1/3/2024</p>
                  <div id={Style.TextDiv}>
                    <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                    <p className={Style.ReportText}>
                      Lorem ipsum dolor sit amet consectetur. Odio ornare id
                      enim vulputate...
                    </p>
                  </div>
                  <Button text={"View Details"} />
                </div>
                <div className={Style.Personal_Info_ReportDiv}>
                  <p>2</p>
                  <p>1/3/2024</p>
                  <div id={Style.TextDiv}>
                    <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                    <p className={Style.ReportText}>
                      Lorem ipsum dolor sit amet consectetur. Odio ornare id
                      enim vulputate...
                    </p>
                  </div>
                  <Button text={"View Details"} />
                </div>
                <div className={Style.Personal_Info_ReportDiv}>
                  <p>3</p>
                  <p>1/3/2024</p>
                  <div id={Style.TextDiv}>
                    <p className={Style.Report_Header2}>Lorem ipsum dolo</p>
                    <p className={Style.ReportText}>
                      Lorem ipsum dolor sit amet consectetur. Odio ornare id
                      enim vulputate...
                    </p>
                  </div>
                  <Link to={"/complainDetails"}>
                    <Button text={"View Details"} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div id={Style.headerDiv}>
            <p className={Style.Personal_Info_headerText}>Purchase History</p>
            <Link to={`/soldiersTransaction/${0}`}>
              <p className={Style.see_AllText}>See All</p>
            </Link>
          </div>

          <div className={Style.date_inputDiv}>
            <p>
              3rd October, 2024 <img src={arrow_down} alt="" />
            </p>
            <div className={Style.searchDiv}>
              <img src={search} alt="" />
              <InputField />
            </div>
            <img className={Style.download_img} src={download} alt="" />
          </div>
          <div id={Style.Personal_Info_tableDiv}>
            <table>
              <tr id={Style.headerTable}>
                <th>S/N</th>
                <th>Ref Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Amount Paid</th>
                <th>Payment Type</th>
                <th>User Onboarded</th>
                <th>Status</th>
              </tr>

              <tbody>
                {historyArr.map((obj, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{obj.refNumber}</td>
                      <td>{obj.date}</td>
                      <td>{obj.time}</td>
                      <td>{obj.amountPaid}</td>
                      <td>
                        <div id={Style.BankDetails_Div}>
                          <div>
                            <p>Bank</p>
                            <p className={Style.BankDetails_BoldText}>
                              {obj.paymentType.bank}{" "}
                            </p>
                          </div>
                          <div>
                            <p>Account Number</p>
                            <p className={Style.BankDetails_BoldText}>
                              {obj.paymentType.accNo}
                            </p>
                          </div>
                          <div>
                            <p>Account Name</p>
                            <p className={Style.BankDetails_BoldText}>
                              {obj.paymentType.accName}{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>{obj.userOnboarded}</td>
                      <td>
                        <div id={Style.statusText}>{obj.status}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className={Style.Personal_Info_headerText}>Withdrawal History</p>

          <div className={Style.date_inputDiv}>
            <p>
              3rd October, 2024 <img src={arrow_down} alt="" />
            </p>
            <div className={Style.searchDiv}>
              <img src={search} alt="" />
              <InputField />
            </div>
            <img className={Style.download_img} src={download} alt="" />
          </div>

          <div id={Style.Personal_Info_tableDiv}>
            <table>
              <thead>
                <tr id={Style.headerTable}>
                  <th>S/N</th>
                  <th>Time</th>
                  <th>Country</th>
                  <th>Coin Converted</th>
                  <th>Amount Withdrawal</th>
                  <th>Bank Details</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {withdrawalArr.map((obj, index) => {
                  let color = obj.status == "Pending" ? true : false;

                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{obj.time} </td>
                      <td>{obj.country}</td>
                      <td>{obj.coinConverted}</td>
                      <td>{obj.amountWithdrawn}</td>
                      <td>
                        <div id={Style.BankDetails_Div}>
                          <div>
                            <p>Bank</p>
                            <p className={Style.BankDetails_BoldText}>
                              {obj.bankDetails.bank}
                            </p>
                          </div>
                          <div>
                            <p>Account Number</p>
                            <p className={Style.BankDetails_BoldText}>
                              {obj.bankDetails.accNo}
                            </p>
                          </div>
                          <div>
                            <p>Account Name</p>
                            <p className={Style.BankDetails_BoldText}>
                              {obj.bankDetails.accName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          id={Style.statusText}
                          style={{
                            backgroundColor: color ? "#eb575733" : "#31c36433",
                            color: color ? "#EB5757" : "#31C364",
                          }}
                        >
                          {obj.status}
                        </div>
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

export default Personal_Info;
