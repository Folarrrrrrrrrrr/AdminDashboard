import React, { useEffect, useState } from "react";
import Style from "./Transaction.module.css";
import filter_img from "../../../assets/svg/Complete_filter_img.svg";
import download from "../../../assets/svg/download_img.svg";
import InputField from "../../../components/input/InputField";
import Header from "../../../components/header/Header";
import betCoin from "../../../assets/svg/betCoin.svg";
import total_users from "../../../assets/svg/total_users.svg";
import winner from "../../../assets/svg/winner.svg";
import Total_Card from "../../../components/total_Card/Total_Card";
import arrow_down from "../../../assets/svg/arrow_down-dark.svg";
import search from "../../../assets/svg/Search.svg";
import green_eyes from "../../../assets/svg/green_eyes.svg";
import warning from "../../../assets/svg/yellow_warning.svg";
import blue from "../../../assets/svg/blue.svg";
import black from "../../../assets/svg/black.svg";
import gold from "../../../assets/svg/gold.svg";
import delete_list from "../../../assets/svg/product_delete.svg";
import person from "../../../assets/images/person_img.png";
import avatar from "../../../assets/images/avatar.png";
import BetPlaced_com from "../../../components/bet_placedCom/BetPlaced_com";
import Date_Picker from "../../../components/date_picker/Date_Picker";
import { PopupContextHook } from "../../../WhiteHouse_PopupContext";
import App_Pagination from "../../../components/app_Pagination/App_Pagination";
import { transactionSummaryProvider } from "../api_detaills/provider/user_provider";

const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postsPerPage] = useState(10);

  const { updateErrorText, updateErrorPopup } = PopupContextHook();

  let [toggleIndex, setToggleIndex] = useState(0);

  let [cardToggleIndex, setCardToggleIndex] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  let [dev, setDev] = useState([]);

  const [transactions, setTransactions] = useState({
    totalCoinPurchase: "",
    totalCoinWithdrawal: "",
    coinPurchaseHistory: [],
    coinWithdrawHistory: [],
  });

  useEffect(() => {
    transactionSummaryProvider({
      updateTransaction: (data) => {
        setTransactions({
          totalCoinPurchase: data.totalCoinPurchase,
          totalCoinWithdrawal: data.totalCoinWithdrawal,
          coinPurchaseHistory: data.coinPurchaseHistory,
          coinWithdrawHistory: data.coinWithdrawHistory,
        });
      },
      updateErrorText,
      updateErrorPopup,
    });
  }, []);

  const { totalCoinPurchase, totalCoinWithdrawal } = transactions;

  // Pagination logic

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfLastPost2 = currentPage2 * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const indexOfFirstPost2 = indexOfLastPost2 - postsPerPage;
  const coinWithdrawHistory = transactions.coinWithdrawHistory.slice(
    indexOfFirstPost2,
    indexOfLastPost2
  );
  const coinPurchaseHistory = transactions.coinPurchaseHistory.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginate2 = (pageNumber) => {
    setCurrentPage2(pageNumber);
  };

  const toggle = (index) => {
    setCardToggleIndex(index);
  };

  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with current date
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Initialize with current date

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate); // Update selectedDate when newDate is received

    console.log("New selected date:", newDate); // This should log the new date when clicked

    setIsCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(true);
  };

  const stats_card6 = [
    {
      image1: betCoin,
      price: "23,000",
      text: "Bet transactions",
      to: "",
      divText: "View All",
    },
    {
      image1: total_users,
      price: totalCoinPurchase,
      text: "Coin Purchase",
      to: "",
      divText: "View All",
    },
    {
      image1: winner,
      price: totalCoinWithdrawal,
      text: "Withdrawals",
      to: "",
      divText: "View All",
    },
  ];

  const arr = [
    {
      SN: "1",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
    {
      SN: "2",
      userID: "35574TD",
      BetID: "6458575RFG",
      game: "FootballRoom 454",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
    {
      SN: "4",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },

    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list,
      },
    },
  ];

  // useEffect(() => {
  //     let d = arr.filter((a) => a.status === "Won")
  //     console.log(d);

  //     setDev(d)
  // }, [])

  // const filteredData_two = coin_arr.filter(item =>
  //     item.RefNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.coinRd.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.status.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div id={Style.Transaction_mainDiv}>
      <Header
        headerText={"Transactions"}
        headerInfo={"Here is a list of all transactions"}
      />

      <div id={Style.Transaction_wrapperDiv}>
        {/* cards */}
        <div id={Style.Transaction_mapDiv}> 
          {stats_card6.map((obj, index) => {
            let isBlack = index == cardToggleIndex ? true : false;

            return (
              <div id={ window.innerWidth < 480 ? Style.Cards : null}>
                <Total_Card
                  key={index}
                  text={obj.text}
                  image1={obj.image1}
                  divText={obj.divText}
                  price={obj.price}
                  isBlack={isBlack}
                  onClick={() => toggle(index)}
                  id={Style.EachStyleCard}
                />
              </div>
            );
          })}
        </div>

        {cardToggleIndex !== 0 && (
          <div id={Style.transaction_header_inputfield_Div}>
            <div id={Style.TransactionText}>
              Transaction Lists <span>(1,355)</span>
            </div>

            <div id={Style.Amount_Paid_input_FilterDiv}>
              <span>
              <div id={window.innerWidth < 480 ? Style.selectedDateText : ''}>
                {selectedDate.toDateString()}
              </div>
                <img id={Style.CalenderDropDown} onClick={toggleCalendar} src={arrow_down} alt="" />
              </span>

              {isCalendarOpen && (
                <div id={Style.calendar_popup}>
                  <Date_Picker onDateChange={handleDateChange} />
                </div>
              )}

              <div id={Style.searchDiv}>
                <img src={search} alt="" />
                <InputField
                  type={"text"}
                  value={searchTerm}
                  OnChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div id={Style.imgDiv}>
                <img src={filter_img} alt="" />
                <img src={download} alt="" />
              </div>
            </div>
          </div>
        )}

        <div id={Style.Transaction_tableWrapperDiv}>
          {toggleIndex === 0 && cardToggleIndex === 0 ? (
            <div id={ window.innerWidth < 480 ? Style.betPlaceContainerDiv : null }>
                <BetPlaced_com arr={arr} initialIndex={0} />
            </div>
          ) : (
            ""
          )}

          <div id={Style.transactionListTable}>
            {cardToggleIndex == 1 && (
              <div id={Style.CoinPurchaseTableContainer}>
                <table id={Style.CoinPurchasedTable}>
                  <thead>
                    <tr id={Style.headerTable_tr}>
                      <th>S/N</th>
                      <th>User</th>
                      <th>Ref Number</th>
                      <th>Time</th>
                      <th>Country</th>
                      <th>Amount Paid</th>
                      <th>Coin Received </th>
                      <th>Payment Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {coinPurchaseHistory.map((user, index) => {
                      let bGcolor =
                        user.status == "success"
                          ? "#00800033"
                          : user.status == "pending"
                          ? "#fc9e2f33"
                          : user.status == "failed"
                          ? "#ff000033"
                          : "";
                      let color =
                        user.status == "success"
                          ? "green"
                          : user.status == "pending"
                          ? "#FC9E2F"
                          : user.status == "failed"
                          ? "red"
                          : "";

                      let verify =
                        user.user.subscription_type == "blue"
                          ? blue
                          : user.user.subscription_type == "gold"
                          ? gold
                          : user.user.subscription_type == "black"
                          ? black
                          : "";

                      const serialNumber = indexOfFirstPost + index + 1; // Calculate the correct serial number

                      return (
                        <tr key={index}>
                          <td>{serialNumber}</td>
                          <td>
                            <div>
                              {/* <p>{user.user.id}</p> */}

                              <div className={Style.userDetail_Text}>
                                <div id={Style.imgDiv}>
                                  <img
                                    id={Style.profile_picture}
                                    src={avatar}
                                    alt=""
                                  />

                                  {verify && (
                                    <img
                                      id={Style.verified_img}
                                      src={verify}
                                      alt=""
                                    />
                                  )}
                                </div>
                                <p> {user.user.username}</p>
                              </div>
                            </div>
                          </td>
                          <td>{user.refNumber}</td>
                          <td>{user.time}</td>
                          <td>{user.country}</td>
                          <td>{user.amountPaid}</td>
                          <td>{user.coinReceived}</td>
                          <td>
                            <div id={Style.BankDetails_Div}>
                              <div>
                                <p className={Style.bank_details_header}>Bank</p>
                                <p className={Style.BankDetails_BoldText}>
                                  {user.paymentType.bank_name}
                                </p>
                              </div>
                              <div>
                                <p className={Style.bank_details_header}>
                                  Account Number
                                </p>
                                <p className={Style.BankDetails_BoldText}>
                                  {user.paymentType.account_number}
                                </p>
                              </div>
                              <div>
                                <p className={Style.bank_details_header}>
                                  Account Name
                                </p>
                                <p className={Style.BankDetails_BoldText}>
                                  {user.paymentType.account_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div
                              id={Style.statusText}
                              style={{ backgroundColor: bGcolor, color: color }}
                            >
                              {user.status}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}          
          </div>  

          <div id={Style.transactionListTable}>
          {cardToggleIndex == 2 && (
            <table>
              <thead>
                <tr id={Style.headerTable_tr}>
                  <th>S/N</th>
                  <th>User</th>
                  <th>Ref Number</th>
                  <th>Time</th>
                  <th>Country</th>
                  <th>Coin Converted</th>
                  <th>Amount Withdrawn </th>
                  <th>Payment Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {/* Withdrawal */}

                {coinWithdrawHistory.map((user, index) => {
                  let bGcolor =
                    user.status == "success"
                      ? "#00800033"
                      : user.status == "pending"
                      ? "#fc9e2f33"
                      : user.status == "failed"
                      ? "#ff000033"
                      : "";
                  let color =
                    user.status == "success"
                      ? "green"
                      : user.status == "pending"
                      ? "#FC9E2F"
                      : user.status == "failed"
                      ? "red"
                      : "";

                  let verify =
                    user.user.subscription_type == "blue"
                      ? blue
                      : user.user.subscription_type == "gold"
                      ? gold
                      : user.user.subscription_type == "black"
                      ? black
                      : "";

                  const serialNumber = indexOfFirstPost + index + 1; // Calculate the correct serial number

                  return (
                    <tr key={index}>
                      <td>{serialNumber}</td>
                      <td>
                        <div className={Style.userDetail_Text}>
                          <div id={Style.imgDiv}>
                            <img
                              id={Style.profile_picture}
                              src={avatar}
                              alt=""
                            />

                            {verify && (
                              <img
                                id={Style.verified_img}
                                src={verify}
                                alt=""
                              />
                            )}
                          </div>
                          <p> {user.user.username}</p>
                        </div>
                      </td>
                      <td>{user.refNumber}</td>
                      <td>{user.time}</td>
                      <td>{user.country}</td>
                      <td>{user.amountPaid}</td>
                      <td>{user.coinReceived}</td>
                      <td>
                        <div id={Style.BankDetails_Div}>
                          <div>
                            <p className={Style.bank_details_header}>Bank</p>
                            <p className={Style.BankDetails_BoldText}>
                              {user.paymentType.bank_name}
                            </p>
                          </div>
                          <div>
                            <p className={Style.bank_details_header}>
                              Account Number
                            </p>
                            <p className={Style.BankDetails_BoldText}>
                              {user.paymentType.account_number}
                            </p>
                          </div>
                          <div>
                            <p className={Style.bank_details_header}>
                              Account Name
                            </p>
                            <p className={Style.BankDetails_BoldText}>
                              {user.paymentType.account_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          id={Style.statusText}
                          style={{ backgroundColor: bGcolor, color: color }}
                        >
                          {user.status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          </div>
        </div>

        {cardToggleIndex == 1 && (
          <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
            <App_Pagination
              postsPerPage={postsPerPage}
              totalPosts={transactions.coinPurchaseHistory.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}

        {cardToggleIndex == 2 && (
        <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
          <App_Pagination
            postsPerPage={postsPerPage}
            totalPosts={transactions.coinWithdrawHistory.length}
            paginate={paginate2}
            currentPage={currentPage2}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
