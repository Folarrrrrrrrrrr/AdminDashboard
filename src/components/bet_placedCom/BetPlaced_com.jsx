import React, { useEffect, useState } from "react";
import Style from "../bet_placedCom/BetPlaced_com.module.css";
import winners_background from "../../assets/svg/winners_background.svg";
import arrow_down from "../../assets/svg/arrow_down-dark.svg";
import search from "../../assets/svg/Search.svg";
import dice from "../../assets/svg/Dice.svg";
import sports from "../../assets/svg/sport.svg";
import filter_img from "../../assets/svg/Complete_filter_img.svg";
import download from "../../assets/svg/download_img.svg";
import InputField from "../../components/input/InputField";
import Date_Picker from "../date_picker/Date_Picker";
import { Link, useLocation } from "react-router-dom";
import Stats_Card from "../../components/stats_card/Stats_Card";
import FilterModal from "../../popUps/filterPopUp/filterPopUp";
import WinnerImg from "../../assets/images/Person1.png";
import fastforward from "../../assets/images/fast-forward.png";
import backArrow from "../../assets/images/backArrow.png";

const BetPlaced_com = (props) => {
  const location = useLocation();
  const { source, extraData } = location.state || {}; // Destructuring the state
  //   const { source } = location.state || {};

  const { arr: initialArr, initialIndex } = props;
  // Load `arr` from localStorage or use the provided prop as fallback
  const [arr, setArr] = useState(() => {
    const storedArr = localStorage.getItem("betPlacedArr");
    return storedArr ? JSON.parse(storedArr) : initialArr || [];
  });

  console.log(arr);

  // Save `arr` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("betPlacedArr", JSON.stringify(arr));
  }, [arr]);

  // Remove `arr` from localStorage when the component unmounts or user navigates away
  useEffect(() => {
    return () => {
      localStorage.removeItem("betPlacedArr");
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState(null);
  const [toggleIndex, setToggleIndex] = useState(initialIndex || 0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  let array = [...arr];

  let activeFootbalBets,
    pendingFootbalBets,
    closedFootballBets,
    sortedArray,
    sortedArrayTwo;

  activeFootbalBets = array.filter((bet) => bet.status === "active");
  console.log(activeFootbalBets);

  activeFootbalBets = array.filter((bet) => bet.status === "active");
  console.log(activeFootbalBets);

  // activeDiceBets = array.filter(bet => bet.status === "active")
  // console.log(activeFootbalBets);

  // pendingDiceBets = array.filter(bet => bet.status === "pending")
  // console.log(pendingFootbalBets);

  closedFootballBets = array.filter((bet) => bet.status === "closed");
  // console.log(closedFootballBets);

  source === "Sports"
    ? (sortedArray = activeFootbalBets)
    : (sortedArray = array);
  source === "Sports"
    ? (sortedArrayTwo = activeFootbalBets)
    : (sortedArray = array);

  // source === 'Dice Games'? sortedArray = activeFootbalBets : sortedArray = array;
  // source === 'Dice Games'? sortedArrayTwo = activeFootbalBets : sortedArray = array;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleApplyFilters = (appliedFilters) => setFilters(appliedFilters);

  const toggle = (index) => setToggleIndex(index);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setIsCalendarOpen(false);
  };
  const [betDetailsModal, setBetDetrailsModal] = useState(false);

  const HandleViewMoreBtn = (id) => {
    setBetDetrailsModal(!betDetailsModal);

    console.log(id);
  };

  const toggleCalendar = () => setIsCalendarOpen(true);

  return (
    <div>
      <div>
        {toggleIndex === 1 && (
          <img
            id={Style.winners_background}
            src={winners_background}
            alt="Winners Background"
          />
        )}
      </div>

      <div id={Style.Total_BetPlaced_TableWrapperDiv}>
        <div id={Style.ToggleRow}>
          <div id={Style.Transaction_listCalendar_Div}>
            <div id={Style.Transaction_listDiv}>
              <button
                onClick={() => toggle(0)}
                className={
                  toggleIndex === 0
                    ? Style.toggleDiv_buttonActive
                    : Style.Transaction_listDiv_button
                }
              >
                All
              </button>
              <button
                onClick={() => toggle(1)}
                className={
                  toggleIndex === 1
                    ? Style.toggleDiv_buttonActive
                    : Style.Transaction_listDiv_button
                }
              >
                Winning Bets
              </button>
              <button
                onClick={() => toggle(2)}
                className={
                  toggleIndex === 2
                    ? Style.toggleDiv_buttonActive
                    : Style.Transaction_listDiv_button
                }
              >
                Losing Bets
              </button>
            </div>

            <div id={Style.Amount_Paid_input_FilterDiv}>
              <h1>
                {selectedDate.toDateString()}{" "}
                <img
                  onClick={toggleCalendar}
                  src={arrow_down}
                  alt="Toggle Calendar"
                />
              </h1>

              {isCalendarOpen && (
                <div id={Style.calendar_popup}>
                  <Date_Picker onDateChange={handleDateChange} />
                </div>
              )}

              <div id={Style.searchDiv}>
                <img src={search} alt="Search" />
                <InputField />
              </div>
            </div>
          </div>
        </div>

        <div id={Style.BetText}>
          <p>
            Bet Lists <span>(10 of {arr.length})</span>
          </p>

          
          <ul id={Style.paginationByNumberDiv}>
              <li id={Style.pageNumbers}><img className={Style.NavigationBtns} src={backArrow} alt="" /></li>
              <li id={Style.pageNumbers}>1</li>
              <li id={Style.pageNumbers}>2</li>
              <li id={Style.pageNumbers}>3</li>
              <li id={Style.pageNumbers}>4</li>
              <li id={Style.pageNumbers}> <img className={Style.RightNavigationBtns} src={fastforward} alt="" /> </li>
          </ul>

          <div id={Style.imgDiv}>
            <FilterModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onApplyFilters={handleApplyFilters}
            />
            {filters && (
              <div>
                <h3>Active Filters</h3>
                <pre>{JSON.stringify(filters, null, 2)}</pre>
              </div>
            )}
            <img id={Style.FilterBtn} src={filter_img} onClick={handleOpenModal} alt="Filter" />
            <img src={download} alt="Download" />
          </div>
        </div>
        <div
          id={
            window.innerWidth < 480 ? Style.BetPlacedTableDiv : Style.BetTables
          }
        >
          {/* <div id={window.innerWidth < 480 ? Style.BetPlacedTableDiv : Style.BetTables} > */}
          {/* {toggleIndex == 0 ? */}
          <table>
            <thead>
              <tr id={Style.headerTable}>
                <th>S/N</th>
                {source == "Sports" ? <th> Opponent ID</th> : source == "Dice Games" ? <th> Dice GameID</th>: null}
                {/* <th> {source} </th> */}
                {/* <th> {GameTypeColumn} </th> */}
                {source === "Sports" ? <th> Ticket Id </th> : null }
                <th> Bet Type </th>
                {source === "Sports" ? <th> Match ID </th> : null}
                {source === "Sports" ? <th> Team </th> : null}
                {source === "Sports" ? <th> League </th> : null}
                <th>Amount Staked</th>
                <th>Players</th>
                {toggleIndex == 0 ? null : <th>Status</th>}
                <th> Date </th>
                <th> Time </th>
                <th>Action</th>
              </tr>
            </thead>

            {toggleIndex == 0 ? (
              <tbody>
                {array.map((user, index) => {
                  let lost = user.status == "Lost" ? true : false;

                  return (
                    <tr id={Style.tableRows} key={index}>
                      <td>{index + 1}</td>
                      <td>{user.bet_id}</td>
                      {source === "Sports" ? <td>{user.game}</td>: source === "Dice Games" ? <td>No BetType</td>:null }
                      {/* <td>{user.bet_Type}</td> */}
                      {/* {source === "Sports" ? <td></td> : null} */}
                      {source === "Sports" ? (
                        <td>{user.amount_staked}</td>
                      ) : source === "Dice Games"?  <td>{user.amount_staked} </td>: null}
                      {
                        source === "Dice Games"?<td>
                        <div id={Style.players_imgDiv}>
                          {user.players}
                        </div>
                      </td>: <td>
                        <div id={Style.players_imgDiv}>
                          {user.players_in_game}
                        </div>
                      </td>
                      }
                      {source === "Sports" ? <td>Check Date</td> : source === "Dice Games" ?<td>No Date</td> : null}
                      {source === "Sports" ? <td>Check Time</td> : source === "Dice Games" ?<td>No Time</td> : null}
                      
                      {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                      {/* <td>{user.Winners}</td>
                      <td>{user.win}</td> */}
                      <td>
                        <div id={Style.action_field}>
                          <button
                            onClick={() => {
                              HandleViewMoreBtn(index);
                            }}
                            // style={{
                            //   backgroundColor: "#eb575733",
                            //   borderRadius: 10,
                            //   border: "none",
                            // }}
                            id={Style.Btn}
                          >
                            see details &#8811; 
                          </button>
                          {betDetailsModal ? (
                            <div id={Style.BetFullDetails}>
                              <div
                                id={Style.modalOverlay}
                                onClick={() => {
                                  HandleViewMoreBtn(index);
                                }}
                              ></div>
                              <span id={Style.BetFullDetailsBackground}></span>
                              <div id={Style.BetFullDetailsBody}>
                                <div id={Style.RowOne}>
                                  <div id={Style.HeroHighlights}>
                                    <div>
                                      <img
                                        src={
                                          source === "Dice Games"
                                            ? dice
                                            : source === "Sports"
                                            ? sports
                                            : null
                                        }
                                        id={
                                          source === "Sports"
                                            ? Style.sport
                                            : Style.dice
                                        }
                                      />
                                      <h2 id={Style.SportBetType}>
                                        {user.game} Bet Analysis
                                      </h2>
                                    </div>
                                    <h3 id={Style.SportBetType}>
                                      {user.bet_Type
                                        ? user.bet_Type
                                        : "no Bet Type data"}
                                    </h3>
                                    <h3 id={Style.winBetFigures}>
                                      <h4 id={Style.amountStaked}>
                                        {" "}
                                        Stake: WHC{" "}
                                        {!user.amount_staked
                                          ? "0.00000"
                                          : user.amount_staked}
                                      </h4>
                                      <h4 id={Style.amountWon}>
                                        {" "}
                                        Win: WHC{" "}
                                        {!user.win ? "0.00000" : user.win}
                                      </h4>
                                    </h3>
                                  </div>
                                  <div id={Style.WinnerCard}>
                                    <div id={Style.WinnerTexts}>
                                      <h2 id={Style.Winner}> WINNER </h2>
                                      <h2 id={Style.Winner}>
                                        {" "}
                                        {user.bet_Type
                                          ? user.bet_Type
                                          : "John Doe"}{" "}
                                      </h2>
                                    </div>
                                    <div id={Style.WinnerProfilePicture}>
                                      {/* <h2 id={Style.Winner}> WINNER </h2> */}
                                      <img
                                        src={WinnerImg}
                                        id={Style.WinnerImg}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div id={Style.RowTwo}>
                                  <div id={Style.WinnerCard}>
                                    <div id={Style.WinnerTexts}>
                                      <h2 id={Style.Winner}> OPPONENT </h2>
                                      <h2 id={Style.Winner}>
                                        {" "}
                                        {user.bet_Type
                                          ? user.bet_Type
                                          : "John Doe"}{" "}
                                      </h2>
                                      <h2 id={Style.league}>
                                        {" "}
                                        {user.bet_Type
                                          ? user.bet_Type
                                          : "John Doe"}{" "}
                                      </h2>
                                    </div>

                                    <div id={Style.WinnerProfilePicture}>
                                      {/* <h2 id={Style.Winner}> WINNER </h2> */}
                                      <img
                                        src={WinnerImg}
                                        id={Style.WinnerImg}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div id={Style.HeroHighlights}>
                                    <div>
                                      {/* <img src={ source === 'Dice Games'? dice: null} id={Style.dice}/> */}
                                      <h2 id={Style.SportBetType}>
                                        {user.game} Bet Analysis
                                      </h2>
                                    </div>
                                    <h3 id={Style.SportBetType}>
                                      {user.bet_Type
                                        ? user.bet_Type
                                        : "no Bet Type data"}
                                    </h3>
                                    <h3 id={Style.winBetFigures}>
                                      <h4 id={Style.amountStaked}>
                                        {" "}
                                        Stake: WHC{" "}
                                        {!user.amount_staked
                                          ? "0.00000"
                                          : user.amount_staked}
                                      </h4>
                                      <h4 id={Style.amountWon}>
                                        {" "}
                                        Win: WHC{" "}
                                        {!user.win ? "0.00000" : user.win}
                                      </h4>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : toggleIndex == 1 ? (
              //winner Bet
              <tbody>
                {sortedArrayTwo.map((user, index) => {
                  // let lost = user.status == "Lost" ? true : false
                  return (
                    // <tr key={index}>
                    //     <td>{index + 1}</td>
                    //     <td>{user.userID}</td>
                    //     <td>{user.BetID}</td>
                    //     <td>{user.game}</td>
                    //     <td>{user.amount}</td>
                    //     <td>
                    //         <div id={Style.players_imgDiv}>
                    //             <img src={user.players} alt="" />
                    //             <img src={user.players} alt="" />
                    //             <img src={user.players} alt="" />
                    //             <img src={user.players} alt="" />
                    //         </div>
                    //     </td>
                    //     {/* <td><div id={Style.statusText}>{user.status}</div></td> */}
                    //     <td>{user.win}</td>
                    //     <td>
                    //         <div id={Style.action_field}>
                    //             <img src={user.action.eye} alt="" />
                    //             <img src={user.action.warning} alt="" />
                    //             <img src={user.action.delete} alt="" />
                    //         </div>
                    //     </td>
                    // </tr>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* <td>{user.bet_id}</td> */}
                      <td>{user.opponent_id}</td>
                      <td>{user.game}</td>
                      <td>{user.type}</td>
                      <td>{user.ticket_id}</td>
                      <td>{user.matchid}</td>
                      <td>{user.team}</td>
                      <td>{user.leagueid}</td>
                      <td>{user.amount}</td>
                      <td>
                        <div id={Style.players_imgDiv}>
                          {user.players_in_game}
                        </div>
                      </td>
                      <td>
                        <div id={Style.statusText}>{user.status}</div>
                      </td>
                      <td>{user.Winners}</td>
                      <td>{user.win}</td>
                      <td>
                        <div id={Style.action_field}>
                          {/* 
                            <img src={user.action.eye} alt="" />
                            <img src={user.action.warning} alt="" />
                            <img src={user.action.delete} alt="" /> 
                          */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : toggleIndex == 2 ? (
              //Dice_Bet_Placed Lost screen
              <tbody>
                {sortedArray.map((user, index) => {
                  let lost = user.status == "Lost" ? true : false;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.user_id}</td>
                      <td>{user.BetID}</td>
                      <td>{user.game}</td>
                      <td>{user.bet_Type}</td>
                      <td>{user.amount_staked}</td>
                      <td>
                        <div id={Style.players_imgDiv}>
                          {/* <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" /> */}
                          {user.players_in_game}
                        </div>
                      </td>
                      {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                      <td>{user.win}</td>
                      <td>
                        <div id={Style.action_field}>
                          {/* <img src={user.action.eye} alt="" />
                            <img src={user.action.warning} alt="" />
                            <img src={user.action.delete} alt="" /> */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              ""
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BetPlaced_com;
