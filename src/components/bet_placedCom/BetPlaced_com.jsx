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
import Hulk from "../../assets/images/HulkAvatar.png";
import peaceLadyAvatar from "../../assets/images/peaceLadyAvatar.png";
import coolBoiAvatar from "../../assets/images/coolBoyAvatar.png";
import crownAvatar from "../../assets/images/WinnerCrown.png";
import locationIcon from "../../assets/images/location.png";
import { useDispatch, useSelector } from "react-redux";
import {fetchFootballBetDetails} from "../../pages/admin/api_detaills/GlobalStates/FootballBetDetails"
import {fetchFootballBetList} from "../../pages/admin/api_detaills/GlobalStates/FootballBetList"


const BetPlaced_com = (props) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { source, extraData } = location.state || {}; // Destructuring the state
  //   const { source } = location.state || {};

  const { arr: initialArr, initialIndex } = props;
  
  // Load `arr` from localStorage or use the provided prop as fallback
  const [arr, setArr] = useState(() => {
    const storedArr = localStorage.getItem("betPlacedArr");
    return storedArr ? JSON.parse(storedArr) : initialArr || [];
  });

  // console.log(arr);
  // console.log(extraData);

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

   console.log(arr)
  let array = [...arr];

  let activeFootbalBets,
    closedFootballBets,
    sortedArray,
    sortedArrayTwo,
    dashboardFootballData,
    dashboardDiceData;

  activeFootbalBets = array.filter((bet) => bet.status === "active");
  // console.log(activeFootbalBets);

  const pageSize = 6; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  
  useEffect(() => {
    dispatch(fetchFootballBetList({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage]);

    const { footballBetsList, footballBetsListloading, footballBetsListerror } =
      useSelector((state) => state.FootballBetList);
      
      console.log(footballBetsList);
      
    // console.log(footballBetsList);
  // When source is "Sports", use Redux data directly

  const listData = source === "Sports" 
  ? footballBetsList :
   source === "Dashboard"
    ?  extraData:
        extraData || arr || [];
        console.log(listData);
        
  // console.log(extraData.allFootballBets)
  // source === "Dashboard"
  //   ? (dashboardFootballData = extraData?.filter(
  //       (bet) => bet.sports === "football"
  //     ))
  //   : null;
  // source === "Dashboard"
  //   ? (dashboardDiceData = extraData?.filter((bet) => bet.sports))
  //   : null;

  closedFootballBets = array?.filter((bet) => bet.status === "closed");
  // console.log(closedFootballBets);

  const toggle = (index) => setToggleIndex(index);

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

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setIsCalendarOpen(false);
  };

  const [betDetailsModal, setBetDetailsModal] = useState(false);
  const [selectedBet, setSelectedBet] = useState(null);



  const { betDetailsData } = useSelector((state) => state.FootballBetDetailsReducer);

  console.log(betDetailsData)
  const HandleViewMoreBtn = (betId) => {
    // setSelectedBet(bet);                                      
    {source ==="Sports"? dispatch(fetchFootballBetDetails(betId)):  null};
    setBetDetailsModal(!betDetailsModal);
    // console.log(betId);
  };

  let playersData = [
    {
      name: "Samuel Daniel (Host)",
      image: "",
      location: "Lagos, Nigeria",
    },
    {
      name: "Folawe Oluwole",
      image: "",
      location: "Lagos, Nigeria",
    },
    {
      name: "David Adeshina",
      image: "",
      location: "Lagos, Nigeria",
    },
    {
      name: "Faloye David",
      image: "",
      location: "Lagos, Nigeria",
    },
  ];

  const toggleCalendar = () => setIsCalendarOpen(true);

  // Sorting, Filtering, and Pagination States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  // const [currentPage, setCurrentPage] = useState(1);
  


  let headers =
    source === "Dice Games"
      ? [
          "s/n",
          "Dice Game ID",
          "Bet type",
          "Amount Staked",
          "date",
          "time",
          "action",
        ]
      : source === "Sports"
      ? [
          "s/n",
          "football Game ID",
          "Bet type",
          "Match id",
          "date",
          "time",
          "action",
        ]
      : source === "Dashboard"
      ? [
          "s/n",
          "Game ID",
          "Bet type",
          "Amount Staked",
          "date",
          "time",
          "action",
        ]
      : source === "Placed Bets"
      ? [
          "s/n",
          "Game ID",
          "Bet type",
          "Amount Staked",
          "date",
          "time",
          "action",
        ]
      : null;
        
    // console.log(extraData);
        // const filteredData = sortedData.filter((row) =>
        //   columns.some((col) =>
        //     String(row[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
        //   )
        // );
  // **1. Filtering Logic**
  
  const filteredData = listData;
  console.log(filteredData);
  
  source === "Dashboard" && toggleIndex == 0 || searchQuery
    ? listData.allFootballBets?.filter((row) =>
        Object.values(row).some((value) =>
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    :    
    source === "Dashboard" && toggleIndex === 1
    ? dashboardFootballData?.filter((row) =>
        Object.values(row).some((value) =>
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : source === "Dashboard" && toggleIndex === 2
    ? dashboardDiceData?.filter((row) =>
        Object.values(row).some((value) =>
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    :
    source === "Placed Bets"
    ? extraData?.filter((row) =>
        Object.values(row).some((value) =>
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : 
    source === "sports"
    ? listData.allFootballBets?.filter((row) =>
        Object.values(row).some((value) =>
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : 
    array?.filter((row) =>
        Object.values(row).some((value) =>
          value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) ;

      //implementing type safety to enusre when the conditions in the filteredData above all comes empty 
      // filtered will just return an empty arraty insteasd of an undefine.
      // and paasing the result into a variable filteredDataSafe below:
      const filteredDataSafe = Array.isArray(filteredData.allFootballBets) ? filteredData.allFootballBets : [];
      

  // **2. Sorting Logic**
  const sortedData = [...filteredDataSafe].sort((a, b) => {
    if (!sortColumn) return 0; // No sorting initially
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
  console.log(sortedData);
  

  // **3. Pagination Logic**
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // **Sorting Handler**
  const handleSort = (column) => {
    setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(column);
  };
  // console.log(paginatedData);
  // console.log(extraData);
  
  return (
    <div>
      {/* <div>
        {toggleIndex === 1 && (
          <img
            id={Style.winners_background}
            src={winners_background}
            alt="Winners Background"
          />
        )}
      </div> */}

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
                {source === "Dashboard" ? "" : "  Winning Bets"}
              </button>
              <button
                onClick={() => toggle(2)}
                className={
                  toggleIndex === 2
                    ? Style.toggleDiv_buttonActive
                    : Style.Transaction_listDiv_button
                }
              >
                {source === "Dashboard" ? "" : "  Losing Bets"}
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
                {/* <InputField /> */}
                <input
                  id={Style.searchInput}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div id={Style.BetText}>
          <p>
            Bet Lists{" "}
            <span>
              ({" "}
              <span>
                {" "}
                Page {currentPage} of {totalPages}{" "}
              </span>
              )
            </span>
          </p>

          {/* Pagination Controls */}
          {/* <div id={Style.paginationByNumberDiv}>
            <button
              id={Style.paginationBtn}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
              <div id={Style.pageNumbers}>1</div>
              <div id={Style.pageNumbers}>2</div>
              <div id={Style.pageNumbers}>3</div>
              <div id={Style.pageNumbers}>4</div>
              <div id={Style.pageNumbers}> 5</div>
            <button
              id={Style.paginationBtn}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div> */}
          <div className={Style.paginationControls}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className={Style.paginationButton}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => Math.abs(currentPage - page) <= 2)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${Style.pageButton} ${
                      currentPage === page ? Style.active : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
            
              {/* Show ellipsis and last page */}
              {currentPage < totalPages - 2 && (
                <>
                  {currentPage < totalPages - 3 && <span className={Style.ellipsis}>...</span>}
                  <button onClick={() => setCurrentPage(totalPages)} className={Style.pageButton}>
                    {totalPages}
                  </button>
                </>
              )}
            <button
              disabled={footballBetsList.length < itemsPerPage}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className={Style.paginationButton}
            >
              Next
            </button>
            {/* <span className={Style.pageIndicator}>Page {currentPage}</span> */}
          </div>


          <div id={Style.imgDiv}>
            <FilterModal
              // isOpen={isModalOpen}
              onClose={handleCloseModal}
              onApplyFilters={handleApplyFilters}
            />
            {filters && (
              <div>
                <h3>Active Filters</h3>
                <pre>{JSON.stringify(filters, null, 2)}</pre>
              </div>
            )}
            <img
              id={Style.FilterBtn}
              src={filter_img}
              onClick={handleOpenModal}
              alt="Filter"
            />
            <img src={download} alt="Download" />
          </div>
        </div>
        <div>
          {/* <div id={window.innerWidth < 480 ? Style.BetPlacedTableDiv : Style.BetTables} > */}
          {/* {toggleIndex == 0 ? */}
          <table>
            <thead>
              {(headers ||  ["s/n","Game ID","Bet type","Amount Staked","date","time","action",]).map((column) => (
                <th
                  id={Style.headerTable}
                  key={column}
                  onClick={() => handleSort(column)}
                  style={{ cursor: "pointer" }}
                >
                  {column.toUpperCase()}{" "}
                  {sortColumn === column
                    ? sortOrder === "asc"
                      ? "🔼"
                      : "🔽"
                    : ""}
                </th>
              ))}
            </thead>

            {toggleIndex == 0 ? (
              <tbody id={Style.tableContentDiv}>
                {paginatedData.map((user, index) => {
                  let lost = user.status == "Lost" ? true : false;

                  return (
                    <tr id={Style.tableRows} key={index}>
                      <td>{index + 1}</td>
                      <td>{user.betId}</td>
                      {source === "Sports" ? (
                        <td>
                          {!user.betType
                            ? "bet type not found"
                            : user.betType}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>
                          {!user.betType
                            ? "bet type not found"
                            : user.betType}
                        </td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.betType
                            ? "bet type not found"
                            : user.betType}
                        </td>
                      ) : null}
                      {source === "Sports" ? null : source === "Dice Games" ? (
                        <td>
                          {!user.amount_staked
                            ? "amount not found"
                            : user.amount_staked}{" "}
                        </td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.amount_staked
                            ? "amount not found"
                            : user.amount_staked}{" "}
                        </td>
                      ) : null}
                      {source === "Sports" ? (
                        <td>
                          {!user.matchId
                            ? "match ID not found"
                            : user.matchId}{" "}
                        </td>
                      ) : null}
                      {source === "Sports" ? (
                        <td>
                          {!user.Date ? "Date not found" : user.Date}{" "}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>No Date</td>
                      ) : source === "Dice Games" ? (
                        <td>No Date</td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.Date ? "Date not found" : user.Date}{" "}
                        </td>
                      ) : null}

                      {source === "Sports" ? (
                        <td>
                          {!user.time ? "Date not found" : user.time}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>No Time</td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.time ? "Date not found" : user.time}
                        </td>
                      ) : null}

                      {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                      {/* <td>{user.Winners}</td>
                      <td>{user.win}</td> */}
                      <td>
                        <div id={Style.action_field}>
                          <button
                            onClick={() => {
                              HandleViewMoreBtn(user.betId);
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
                                  HandleViewMoreBtn(user);
                                }}
                              ></div>

                              <span id={Style.BetFullDetailsBackground}></span>
                              <div id={Style.BetFullDetailsBody}>
                                <button onClick={()=>setBetDetailsModal(false)} id={Style.betModalClose} style={{fontWeight:"bold" }}> &times;</button>
                                <div id={Style.RowOne}>
                                  <div id={Style.HeroHighlights}>
                                    <div id={Style.modalHeading}>
                                     <div id={Style.headerTextsDiv}>
                                        <h3 id={Style.HeroText}>
                                          Game Details
                                        </h3>
                                        <p id={Style.heroSummary}>
                                          Complete information for{" "}
                                          {user.betId}
                                        </p>
                                      </div>
                                    </div>
                                    <div id={Style.avatarSection}>
                                      {/* User Card */}
                                      <div id={Style.profileCard}>
                                        <div></div>
                                        <img
                                          className={Style.profileAvatar}
                                          src={Hulk}
                                          alt=""
                                        />
                                        {/* {betDetailsData.players.user.isWinner &&( */}
                                            <img
                                            id={Style.CrownAvatar}
                                            src={crownAvatar}
                                            alt=""
                                          />
                                        {/* )} */}
                                      
                                        <h3 id={Style.playersFullname}>{betDetailsData?.players?.user?.username} </h3>
                                        <div id={Style.locationDiv}>
                                          {/* <img src={location} alt="" srcset="" /> */}
                                          <img
                                            id={Style.locationsvg}
                                            src={locationIcon}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                        <div>
                                          <p style={{marginTop:"-9px"}}><span style={{fontWeight:"600"}}>Bet Type:</span> Away(win)</p>
                                        </div>
                                      </div>
                                          {/* Opponent Card */}
                                          {betDetailsData?.players?.opponent &&(
                                            <div id={Style.profileCard}>
                                            <img
                                              className={Style.profileAvatar}
                                              src={coolBoiAvatar}
                                              alt=""
                                            />
                                            {betDetailsData.players.opponent.isWinner &&(
                                              <img
                                              id={Style.CrownAvatar}
                                              src={crownAvatar}
                                              alt=""
                                            />
                                          )

                                            }
                                            <div className={Style.playerInfoDiv}>
                                              <h3 id={Style.playersFullname}>{betDetailsData.players.opponent.username}</h3>
                                              <div id={Style.locationDiv}>
                                                <img
                                                  id={Style.locationsvg}
                                                  src={locationIcon}
                                                  alt=""
                                                />
                                                <p id={Style.playerslocation}>
                                                  {" "}
                                                  Lagos, Nigeria{" "}
                                                </p>
                                              </div>
                                              <p style={{marginTop:"-9px"}}> <span style={{fontWeight:"600"}}>Bet Type:</span> Home(win)</p>
                                            </div>
                                            </div>
                                            )
                                          }
                                    </div>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}>
                                    {" "}
                                    Game summary
                                  </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> {betDetailsData?.gameSummary?.betType}</div>
                                        <div> {betDetailsData?.gameSummary?.gameStatus}</div>
                                        <div> {betDetailsData?.gameSummary?.staked}</div>
                                        <div> {betDetailsData?.gameSummary?.time}</div>
                                        <div> {betDetailsData?.gameSummary?.Date}</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          ) : (
                            // <div>
                            //   id={`modalOverLay`}
                            // </div>
                            <></>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) :
             toggleIndex == 1 ? (
              <tbody>
                {source ==="Dashboard"? dashboardFootballData: paginatedData.map((user, index) => {
                  let lost = user.status == "Lost" ? true : false;

                  return (
                    <tr id={Style.tableRows} key={index}>
                      <td>{index + 1}</td>
                      <td>{user.bet_id}</td>
                      {source === "Sports" ? (
                        <td>
                          {" "}
                          {!user.bet_type
                            ? "bet type not found"
                            : user.bet_type}{" "}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>
                          {!user.bet_type
                            ? "bet type not found"
                            : user.bet_type}
                        </td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.bet_type
                            ? "bet type not found"
                            : user.bet_type}
                        </td>
                      ) : null}
                      {source === "Sports" ? null : source === "Dice Games" ? (
                        <td>
                          {!user.amount_staked
                            ? "amount not found"
                            : user.amount_staked}{" "}
                        </td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.amount_staked
                            ? "amount not found"
                            : user.amount_staked}{" "}
                        </td>
                      ) : null}
                      {source === "Sports" ? (
                        <td>
                          {!user.match_id
                            ? "match ID not found"
                            : user.match_id}{" "}
                        </td>
                      ) : null}
                      {source === "Sports" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}{" "}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>No Date</td>
                      ) : source === "Dice Games" ? (
                        <td>No Date</td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}{" "}
                        </td>
                      ) : null}

                      {source === "Sports" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>No Time</td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}
                        </td>
                      ) : null}

                      {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                      {/* <td>{user.Winners}</td>
                      <td>{user.win}</td> */}
                      <td>
                        <div id={Style.action_field}>
                          <button
                            onClick={() => {
                              HandleViewMoreBtn(user);
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
                                  HandleViewMoreBtn(user);
                                }}
                              ></div>

                              <span id={Style.BetFullDetailsBackground}></span>
                              <div id={Style.BetFullDetailsBody}>
                                <div id={Style.RowOne}>
                                  <div id={Style.HeroHighlights}>
                                    <div id={Style.modalHeading}>
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
                                      <div id={Style.headerTextsDiv}>
                                        <h3 id={Style.HeroText}>
                                          Game Details
                                        </h3>
                                        <p id={Style.heroSummary}>
                                          Complete information for{" "}
                                          {selectedBet.bet_id}
                                        </p>
                                      </div>
                                    </div>
                                    <div id={Style.avatarSection}>
                                      <div id={Style.profileCard}>
                                        <div></div>
                                        <img
                                          className={Style.profileAvatar}
                                          src={Hulk}
                                          alt=""
                                        />
                                        <img
                                          id={Style.CrownAvatar}
                                          src={crownAvatar}
                                          alt=""
                                        />
                                        <h3 id={Style.playersFullname}>
                                          {" "}
                                          Samuel Daniel{" "}
                                        </h3>
                                        <div id={Style.locationDiv}>
                                          {/* <img src={location} alt="" srcset="" /> */}
                                          <img
                                            id={Style.locationsvg}
                                            src={location}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                      </div>

                                      <div id={Style.profileCard}>
                                        <img
                                          className={Style.profileAvatar}
                                          src={peaceLadyAvatar}
                                          alt=""
                                        />
                                        <h3 id={Style.playersFullname}>
                                          {" "}
                                          Samuel Daniel{" "}
                                        </h3>
                                        <div id={Style.locationDiv}>
                                          <img
                                            id={Style.locationsvg}
                                            src={location}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                      </div>

                                      <div id={Style.profileCard}>
                                        <img
                                          className={Style.profileAvatar}
                                          src={coolBoiAvatar}
                                          alt=""
                                        />
                                        <h3 id={Style.playersFullname}>
                                          {" "}
                                          Samuel Daniel{" "}
                                        </h3>
                                        <div id={Style.locationDiv}>
                                          <img
                                            id={Style.locationsvg}
                                            src={location}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}>
                                    {" "}
                                    Game summary
                                  </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Players</div>
                                        <div>Winner</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                        <div>Final Score</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> Top Score</div>
                                        <div> finished</div>
                                        <div> 200</div>
                                        <div> 2 </div>
                                        <div> Daniel</div>
                                        <div>12:04</div>
                                        <div>25-05-12</div>
                                        <div>12</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}> Winner </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Players</div>
                                        <div>Winner</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                        <div>Final Score</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> Top Score</div>
                                        <div> finished</div>
                                        <div> 200</div>
                                        <div> 2 </div>
                                        <div> Daniel</div>
                                        <div>12:04</div>
                                        <div>25-05-12</div>
                                        <div>12</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}>
                                    {" "}
                                    Other Players{" "}
                                  </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Players</div>
                                        <div>Winner</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                        <div>Final Score</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> Top Score</div>
                                        <div> finished</div>
                                        <div> 200</div>
                                        <div> 2 </div>
                                        <div> Daniel</div>
                                        <div>12:04</div>
                                        <div>25-05-12</div>
                                        <div>12</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // <div>
                            //   id={`modalOverLay`}
                            // </div>
                            <></>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : 
            toggleIndex == 2 ? (
              <tbody>
                {paginatedData.map((user, index) => {
                  let lost = user.status == "Lost" ? true : false;

                  return (
                    <tr id={Style.tableRows} key={index}>
                      <td>{index + 1}</td>
                      <td>{user.bet_id}</td>
                      {source === "Sports" ? (
                        <td>
                          {" "}
                          {!user.bet_type
                            ? "bet type not found"
                            : user.bet_type}{" "}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>
                          {!user.bet_type
                            ? "bet type not found"
                            : user.bet_type}
                        </td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.bet_type
                            ? "bet type not found"
                            : user.bet_type}
                        </td>
                      ) : null}
                      {source === "Sports" ? null : source === "Dice Games" ? (
                        <td>
                          {!user.amount_staked
                            ? "amount not found"
                            : user.amount_staked}{" "}
                        </td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.amount_staked
                            ? "amount not found"
                            : user.amount_staked}{" "}
                        </td>
                      ) : null}
                      {source === "Sports" ? (
                        <td>
                          {!user.match_id
                            ? "match ID not found"
                            : user.match_id}{" "}
                        </td>
                      ) : null}
                      {source === "Sports" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}{" "}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>No Date</td>
                      ) : source === "Dice Games" ? (
                        <td>No Date</td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}{" "}
                        </td>
                      ) : null}

                      {source === "Sports" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}
                        </td>
                      ) : source === "Dice Games" ? (
                        <td>No Time</td>
                      ) : source === "Dashboard" ? (
                        <td>
                          {!user.createdAt ? "Date not found" : createdAt}
                        </td>
                      ) : null}

                      {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                      {/* <td>{user.Winners}</td>
                      <td>{user.win}</td> */}
                      <td>
                        <div id={Style.action_field}>
                          <button
                            onClick={() => {
                              HandleViewMoreBtn(user);
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
                                  HandleViewMoreBtn(user);
                                }}
                              ></div>

                              <span id={Style.BetFullDetailsBackground}></span>
                              <div id={Style.BetFullDetailsBody}>
                                <div id={Style.RowOne}>
                                  <div id={Style.HeroHighlights}>
                                    <div id={Style.modalHeading}>
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
                                      <div id={Style.headerTextsDiv}>
                                        <h3 id={Style.HeroText}>
                                          Game Details
                                        </h3>
                                        <p id={Style.heroSummary}>
                                          Complete information for{" "}
                                          {/* {selectedBet.bet_id} */}
                                        </p>
                                      </div>
                                    </div>
                                    <div id={Style.avatarSection}>
                                      <div id={Style.profileCard}>
                                        <div></div>
                                        <img
                                          className={Style.profileAvatar}
                                          src={Hulk}
                                          alt=""
                                        />
                                        <img
                                          id={Style.CrownAvatar}
                                          src={crownAvatar}
                                          alt=""
                                        />
                                        <h3 id={Style.playersFullname}>
                                          {" "}
                                          Samuel Daniel{" "}
                                        </h3>
                                        <div id={Style.locationDiv}>
                                          {/* <img src={location} alt="" srcset="" /> */}
                                          <img
                                            id={Style.locationsvg}
                                            src={location}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                      </div>

                                      <div id={Style.profileCard}>
                                        <img
                                          className={Style.profileAvatar}
                                          src={peaceLadyAvatar}
                                          alt=""
                                        />
                                        <h3 id={Style.playersFullname}>
                                          {" "}
                                          Samuel Daniel{" "}
                                        </h3>
                                        <div id={Style.locationDiv}>
                                          <img
                                            id={Style.locationsvg}
                                            src={location}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                      </div>

                                      <div id={Style.profileCard}>
                                        <img
                                          className={Style.profileAvatar}
                                          src={coolBoiAvatar}
                                          alt=""
                                        />
                                        <h3 id={Style.playersFullname}>
                                          {" "}
                                          Samuel Daniel{" "}
                                        </h3>
                                        <div id={Style.locationDiv}>
                                          <img
                                            id={Style.locationsvg}
                                            src={location}
                                            alt=""
                                          />
                                          <p id={Style.playerslocation}>
                                            {" "}
                                            Lagos, Nigeria{" "}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}>
                                    {" "}
                                    Game summary
                                  </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Players</div>
                                        <div>Winner</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                        <div>Final Score</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> Top Score</div>
                                        <div> finished</div>
                                        <div> 200</div>
                                        <div> 2 </div>
                                        <div> Daniel</div>
                                        <div>12:04</div>
                                        <div>25-05-12</div>
                                        <div>12</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}> Winner </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Players</div>
                                        <div>Winner</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                        <div>Final Score</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> Top Score</div>
                                        <div> finished</div>
                                        <div> 200</div>
                                        <div> 2 </div>
                                        <div> Daniel</div>
                                        <div>12:04</div>
                                        <div>25-05-12</div>
                                        <div>12</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div id={Style.SummarySection}>
                                  <h3 id={Style.summaryHeader}>
                                    {" "}
                                    Other Players{" "}
                                  </h3>
                                  <div id={Style.tableDiv}>
                                    <table>
                                      <tr id={Style.tableHeader}>
                                        <div>Bet Type</div>
                                        <div>Game Status</div>
                                        <div>Staked</div>
                                        <div>Players</div>
                                        <div>Winner</div>
                                        <div>Time</div>
                                        <div>Date</div>
                                        <div>Final Score</div>
                                      </tr>
                                      <tr id={Style.tablerow}>
                                        <div> Top Score</div>
                                        <div> finished</div>
                                        <div> 200</div>
                                        <div> 2 </div>
                                        <div> Daniel</div>
                                        <div>12:04</div>
                                        <div>25-05-12</div>
                                        <div>12</div>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // <div>
                            //   id={`modalOverLay`}
                            // </div>
                            <></>
                          )}
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
