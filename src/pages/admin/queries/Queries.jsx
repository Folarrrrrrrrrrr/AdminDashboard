import React, { useState, useEffect } from "react";
import Style from "./Queries.module.css";
import three_users from "../../../assets/svg/three_users.svg";
import issues from "../../../assets/svg/Issues.svg";
import resolve from "../../../assets/svg/resolved.svg";
import Header from "../../../components/header/Header";
import Total_Card from "../../../components/total_Card/Total_Card";
import rise from "../../../assets/svg/rise.svg";
import Stats_Card from "../../../components/stats_card/Stats_Card";
import recording from "../../../assets/svg/recording.svg";
import microphone from "../../../assets/svg/microphone.svg";
import search from "../../../assets/svg/Search.svg";
import InputField from "../../../components/input/InputField";
import filter_img from "../../../assets/svg/Complete_filter_img.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuerySummary } from "../api_detaills/GlobalStates/QueriesReducer";
import { fetchQueryDetails } from "../api_detaills/GlobalStates/QueryDetails";
import { submitQueryResolution } from "../api_detaills/GlobalStates/ResolveQuery";
import queryImage from "../../../assets/images/queryImage.png";
import solar_ghost_broken from "../../../assets/images/solar_ghost_broken.png";
import { Link } from "react-router-dom";
import LoadingScreen from "../../../components/loader/LoadingSreen";
import logo from "../../../assets/images/S_icon.png";
import { motion } from "framer-motion";
import App_Pagination from "../../../components/app_Pagination/App_Pagination";

const Reports = () => {
  
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // const limit = 5;
  const [postsPerPage] = useState(10);
  
  const prevPage=() => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const nextPage=() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchQuerySummary());
  // }, [dispatch]);

    
useEffect(() => {
    dispatch(fetchQuerySummary({ page:currentPage, limit:postsPerPage }));
  }, [dispatch, currentPage]);
  console.log();

  const { QuerySummaryData, QuerySummaryDataLoading, QuerySummaryDataError } =
    useSelector((state) => state.Queries);
  const { queryDetailsData, queryDetailsDataLoading, queryDetailsDataError } = useSelector((state) => state.userQueryDetailsReducer);
  console.log(QuerySummaryData);
  
  const {
    ResolutionSubmissionLoading,
    ResolutionSubmissionSuccess,
    ResolutionSubmissionError,
  } = useSelector((state) => state.ResolveQueryReducer);


  const QueryList = QuerySummaryData.allQueries;
  // console.log(QuerySummaryData.allQueries);
  const queryingUserDetails = queryDetailsData?.userDetails?.[0] ?? null;
  const queryCustomerCareRepDetails = queryDetailsData?.customerCareAgentDetails?.[0] ?? null;
  const userQueryList = queryDetailsData?.queries?.[0] ?? null;


  // const queryingUserDetails = queryDetailsData.userDetails[0];
  // const queryCustomerCareRepDetails =
  //   queryDetailsData.customerCareAgentDetails[0];
  // const userQueryList = queryDetailsData.queries[0];

  console.log(queryingUserDetails);
  // console.log(queryCustomerCareRepDetails);
  // console.log(userQueryList);

  const [toggleIndex, setToggleIndex] = useState(100);
  const [toggleStatsIndex, setToggleStatsIndex] = useState(100);
  const [queryModal, setQueryModal] = useState(false);
  const [selectedBet, setSelectedBet] = useState(null);
  const [filteredData, setFilteredData] = useState(QueryList);
  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const toggle = (index) => {
    setToggleIndex(index);
  };

  const toggleStats = (index) => {
    setToggleStatsIndex(index);
  };
  const toggleQuery = (index) => {
    setQueryModal(index);
  };

  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [resolveScreen, setResolveScreen] = useState(false);
  const prevQueries = [];
  const stats_card4 = [
    {
      image1: three_users,
      price: "200",
      text: "In-app Message ",
      to: "/placebet",
      divText: "View All",
    },
    {
      image1: issues,
      price: "200",
      text: "Mail Queries",
      to: "/placebet",
      divText: "View All",
    },
    {
      image1: resolve,
      price: "180",
      text: "In-app call Queries",
      to: "/placebet",
      divText: "View All",
    },
    {
      image1: resolve,
      price: "20",
      text: "Toll Calls Queries",
      to: "/placebet",
      divText: "View All",
    },
  ];

  const stats_card3 = [
    {
      img: rise,
      figure: "Pending Queries",
      text: "20",
      to: "",
    },
    {
      img: rise,
      figure: "Resolved Queries",
      text: "180",
      to: "",
    },
  ];

  const genral_arr = [
    {
      date: "8/7/2024",
      queryType: "In-app Message",
      category: "Billing",
      username: "Lighty",
      headline: "Lorem ipsum dolo",
      query:
        "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
      // query:{
      // img: microphone,
      // img2: recording,
      // text: " 4:23",
      // text2: "Play Recording",
      // queryText:"Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
      // },

      status: "Pending",
      action: "Review",
    },
    {
      date: "8/7/2024",
      queryType: "In-app Message",
      category: "Billing",
      username: "Lighty",
      headline: "Lorem ipsum dolo",
      query:
        "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
      attachments: {
        img: microphone,
        img2: recording,
        text: " 4:23",
        text2: "Play Recording",
        queryText:
          "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
      },
      status: "Pending",
      action: "Review",
    },
  ];
  const headers = [
    "S/N",
    "Date",
    "QueryType",
    "Category",
    "Username",
    "Status",
    "Action",
  ];
  useEffect(() => {
    let filteredRows = QueryList;

    if (searchText) {
      filteredRows = filteredRows.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    if (filterValue !== "all") {
      filteredRows = filteredRows.filter((row) => row.status === filterValue);
    }

    if (sortConfig.key) {
      filteredRows.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredData(filteredRows);
  }, [searchText, filterValue, sortConfig, QueryList]);

  
  const totalPages = Math.ceil(QuerySummaryData.totalQueries / postsPerPage);



  const paginatedData = filteredData;
  console.log(paginatedData)


  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  const [selectedQuery, setSelectedQuery] = useState(null);

  const HandleViewMoreBtn = (a) => {
    // setSelectedQuery(a);
    dispatch(fetchQueryDetails(a));
    setQueryModal(!queryModal);
    // console.log(id);
  };


  //handling query resolution and submitting resolution fields form logic
  // const [email, setEmail] = useState(""); we took out email from resolution params

  const [message, setMessage] = useState("");
  const [new_status, setnew_status] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSendResolution = () => {
    let ticketId = userQueryList.ticket_id;
    const resolutionData = {
      ticket_id: String(ticketId), //Dynamically set
      message: message,
      new_status: new_status,
    };
    // console.log(ticketId);
    // console.log(message);
    // console.log(new_status);

    dispatch(submitQueryResolution(resolutionData))
      .unwrap()
      .catch((error) => console.error("Submission failed:", error));
  };

  useEffect(() => {
    setTimeout(
      () => (QuerySummaryData && queryingUserDetails? setLoading(false) : setLoading(true)),
      3000
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
      <div id={Style.Reports_mainDiv}>
        <Header
        />

        <div id={Style.Reports_WrapperDiv}>
          <p className={Style.ReportsText}>Queries Summary</p>

          <div id={Style.Query_header_filterDiv}>
            {toggleIndex == 100 ? (
              <p className={Style.ReportsText}>All Queries</p>
            ) : toggleIndex == 0 ? (
              <p className={Style.ReportsText}>In-app Message Queries</p>
            ) : toggleIndex == 2 ? (
              <p className={Style.ReportsText}>In-app Call Queries</p>
            ) : toggleIndex == 1 ? (
              <p className={Style.ReportsText}>Mail Queries</p>
            ) : toggleIndex == 3 ? (
              <p className={Style.ReportsText}>In-app Message Queries</p>
            ) : toggleIndex == 2 ? (
              <p className={Style.ReportsText}>In-app Call Queries</p>
            ) : toggleIndex == 1 ? (
              <p className={Style.ReportsText}>Mail Queries</p>
            ) : (
              ""
            )}
            {/* Filter and serceh boxes */}
            <div id={Style.Input_filterDiv}>
              <div id={Style.searchDiv}>
                <img id={Style.searchLogo} src={search} alt="" />
                {/* <InputField /> */}
                <input
                  id={Style.searchBox}
                  type="text"
                  // placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <select
                  id={Style.filterBox}
                  onChange={(e) => setFilterValue(e.target.value)}
                >
                  <option value="all">Filter by</option>
                  <option value="resolved">Resolved</option>
                  <option value="in-progress">In Progress</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </div>

            {/* Queries Table */}
            <div id={Style.Reports_Table_WrapperDiv}>
              <table>
                <div id={Style.headerTable}>
                  {headers.map((key) => (
                    <div
                      id={Style.colums}
                      key={key}
                      // onClick={() => handleSort(key)}
                    >
                      {key}{" "}
                      {/* {sortConfig.key === key
                        ? sortConfig.direction === "asc"
                          ? "▲"
                          : "▼"
                        : ""} */}
                    </div>
                  ))}
                </div>
                {toggleIndex == 100 ? (
                  <tbody>
                    {paginatedData.map((obj, index) => {
                      let color = obj.status === "Pending" ? true : false;

                      return (
                        <>
                          <div id={Style.Personal_Info_tr}>
                            <div> {index + 1}</div>
                            <div>{obj.date || "20/2/24"}</div>
                            <div className={Style.tableText}>{obj.query_type_name}</div>
                            <div className={Style.tableText}>{obj.category}</div>
                            <div className={Style.tableText}>{obj.username}</div>
                            {/* <div className={Style.tableText}>{obj.headline}</div> */}
                            <div>
                              <div
                                className={Style.statusText}
                                style={{
                                  backgroundColor: color
                                    ? "#fc9e2f33"
                                    : "#31c36433",
                                  color: color ? "#FC9E2F" : "#31C364",
                                }}
                              >
                                {obj.status}
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  backgroundColor: "#0E093C",
                                  border: "none",
                                  color: "#FFFFFF",
                                  fontSize: "0.7rem",
                                  width: "5.18rem",
                                  borderRadius: "8px",
                                  height: "1.37rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  HandleViewMoreBtn(obj.ticket_id);
                                  console.log(obj.ticket_id);
                                }}
                              >
                                see details...
                              </button>
                              {queryModal ? (
                                <>
                                  <span
                                    id={Style.modalOverlay}
                                    onClick={() => {
                                      resolveScreen
                                        ? setQueryModal(true)
                                        : setQueryModal(!queryModal);
                                    }}
                                  ></span>
                                  <div id={Style.queryDetailsContainer}>
                                    <div id={Style.queryModalBody}>
                                      <button
                                        id={Style.querydetailsBtn}
                                        onClick={() => setQueryModal(!queryModal)}
                                      >
                                        &times;
                                      </button>
                                      <h2 id={Style.modalHeading}> Query </h2>
                                      <p id={Style.modalSubHeading}>
                                        see full details of this query
                                      </p>
                                      <div id={Style.profileCard}>
                                        <img
                                          id={Style.queryProfileImg}
                                          src={
                                            queryingUserDetails.profile_picture
                                          }
                                          alt=""
                                        />
                                        <div id={Style.detailsBox}>
                                          <p className={Style.profileData}>
                                            {queryingUserDetails.username}
                                          </p>
                                          {/* <p className={Style.profileData}>
                                            player sub type
                                          </p> */}
                                          <p className={Style.profileData}>
                                            {queryingUserDetails.phone}
                                          </p>
                                          <p className={Style.profileData}>
                                            {" "}
                                            {queryingUserDetails.email}{" "}
                                          </p>
                                          <p className={Style.profileData}>
                                            location
                                          </p>
                                          <div id={Style.actionsDiv}>
                                            <div id={Style.userStatus}>
                                              {
                                              queryingUserDetails.status==="active"?
                                              <p
                                                id={Style.onlineStatus}
                                              ></p>:
                                              <p
                                                id={Style.offlineStatus}
                                              ></p>
                                              }
                                              <p>{queryingUserDetails.status}</p>
                                            </div>
                                            <Link
                                              to={`/userDetails/${queryingUserDetails.phone}`}
                                            >
                                              <button id={Style.viewProfileBtn}>
                                                View User Profile{" "}
                                              </button>
                                            </Link>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id={Style.qerydetailsTable}>
                                      <tr id={Style.TableHeader}>
                                        <th className={Style.headers}>S/N</th>
                                        <th className={Style.headers}>
                                          Ticket className
                                        </th>
                                        <th className={Style.headers}>
                                          Query Type
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Attachments
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Time&Data
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Query Status
                                        </th>
                                        <th className={Style.headers}> Action</th>
                                      </tr>

                                      {/* table body */}
                                      <tr id={Style.TableRows}>
                                        <td id={Style.headers}>1</td>
                                        <td id={Style.headers}>
                                          {userQueryList.ticket_id}
                                        </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          {userQueryList.query_type_name}
                                        </td>
                                        {/* <td id={Style.headers}>
                                          {" "}
                                          {userQueryList.file}
                                        </td> */}
                                        <td id={Style.headers}>
                                          <a href={userQueryList.file} target="_blank" rel="noopener noreferrer">
                                            <img
                                              src={userQueryList.file}
                                              alt="Attachment"
                                              style={{ width: "80px", height: "auto", borderRadius: "5px" }}
                                            />
                                          </a>
                                        </td>
                                        <td id={Style.headers}> null </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          {userQueryList.status}
                                        </td>
                                        <button
                                          id={Style.headersBtn}
                                          onMouseEnter={() =>
                                            setIsBtnHovered(true)
                                          }
                                          onMouseLeave={() =>
                                            setIsBtnHovered(false)
                                          }
                                          onClick={() => {
                                            setResolveScreen(!resolveScreen);
                                          }}
                                        >
                                          View | Resolve
                                        </button>
                                      </tr>
                                      <div
                                        id={
                                          isBtnHovered
                                            ? Style.btnHoverMessageDiv
                                            : Style.btnHoverMessageDivHide
                                        }
                                      >
                                        <p>{userQueryList.query}</p>
                                      </div>
                                    </div>
                                    {!prevQueries ? (
                                      <div id={Style.previousQuery}>
                                        <div id={Style.TableHeader}>
                                          <div id={Style.headers}>S/N</div>
                                          <div id={Style.headers}>Ticket ID</div>
                                          <div id={Style.headers}>Query Type</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Attachments
                                          </div>
                                          <div id={Style.headers}> Time&Data</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Query Status
                                          </div>
                                          <div id={Style.headers}> Action</div>
                                        </div>
                                        <div id={Style.TableRows}>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <button id={Style.headers}>
                                            View | Resolve
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div id={Style.noPrevQueryDiv}>
                                        <p id={Style.noPastQueriesHeader}>
                                          {" "}
                                          Past queries from this player
                                        </p>
                                        <div id={Style.noQueriesDetails}>
                                          <img
                                            id={Style.brokenGhost}
                                            src={solar_ghost_broken}
                                            alt=""
                                          />
                                        </div>
                                        <div id={Style.noQueryDetailDiv}>
                                          <h3>No Previous Query History</h3>
                                          <p style={{ textWrap: "wrap" }}>
                                            This is empty because this user has
                                            not logged any query before
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                              {resolveScreen ? (
                                <div id={Style.resolveScreenContainer}>
                                  <div id={Style.modal}>
                                    {/* Header */}
                                    <div id={Style.modalHeader}>
                                      <h2>Query Information & Resolution</h2>
                                      <button
                                        id={Style.closeBtn}
                                        onClick={() =>
                                          setResolveScreen(!resolveScreen)
                                        }
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Issue Type */}
                                    <button id={Style.issueBtn}>
                                      Money Issue
                                    </button>

                                    {/* Complaint Section */}
                                    <div id={Style.complaintSection}>
                                      <label>
                                        Complaint{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <textarea readOnly id={Style.textarea}>
                                        I won a game but I’m still yet to receive
                                        my money
                                      </textarea>
                                    </div>
                                    {/* Resolution Section */}
                                    <div className={Style.resolutionSection}>
                                      <label>
                                        Resolution{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      {/* <input
                                      type="email"
                                      id={Style.inputBox}
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder="example@gmail.com"
                                    /> */}
                                      <textarea
                                        id={Style.textarea}
                                        placeholder="Type here..."
                                        value={message}
                                        onChange={(e) =>
                                          setMessage(e.target.value)
                                        }
                                      ></textarea>
                                    </div>

                                    {/* Update Status */}
                                    {/* <div id={Style.statusSection}>
                                    <span id={Style.status}>Resolved</span>
                                    <span id={Style.status}>Unresolved</span>
                                    <span id={Style.status}>Escalated</span>
                                    <span id={Style.status}>In Motion</span>
                                  </div> */}
                                    <div>
                                      {[
                                        "resolved",
                                        "Unresolved",
                                        "in-progress",
                                      ].map((option) => (
                                        <button
                                          key={option}
                                          onClick={() => setnew_status(option)}
                                          style={{
                                            margin: "10px",
                                            fontWeight:
                                              status === option
                                                ? "bold"
                                                : "normal",
                                          }}
                                        >
                                          {option}
                                        </button>
                                      ))}
                                    </div>

                                    {/* Send Button */}
                                    {/* <button id={Style.sendBtn}>
                                    Send Resolution &gt;&gt;&gt;
                                  </button> */}
                                    {/* Submit Button */}
                                    <button
                                      onClick={handleSendResolution}
                                      disabled={ResolutionSubmissionLoading}
                                    >
                                      {ResolutionSubmissionLoading
                                        ? "Sending..."
                                        : "Send Resolution"}
                                    </button>

                                    {/* Success or Error Messages */}
                                    {ResolutionSubmissionSuccess && (
                                      <p style={{ color: "green" }}>
                                        {ResolutionSubmissionSuccess}
                                      </p>
                                    )}
                                    {ResolutionSubmissionError && (
                                      <p style={{ color: "red" }}>
                                        {ResolutionSubmissionError}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                // </div>
                                <></>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div>
                      {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          {i + 1}
                        </button>
                      ))} */}
                    </div>
                  </tbody>
                ) : (
                  ""
                )}
                {toggleIndex === 0 ? (
                  <tbody>
                    {paginatedData.map((obj, index) => {
                      let color = obj.status === "Pending" ? true : false;

                      return (
                        <>
                          <div id={Style.Personal_Info_tr}>
                            <div> {index + 1}</div>
                            <div>{obj.date || "20/2/24"}</div>
                            <div className={Style.tableText}>{obj.queryType}</div>
                            <div className={Style.tableText}>{obj.category}</div>
                            <div className={Style.tableText}>{obj.username}</div>
                            {/* <div className={Style.tableText}>{obj.headline}</div> */}
                            <div>
                              <div
                                className={Style.statusText}
                                style={{
                                  backgroundColor: color
                                    ? "#fc9e2f33"
                                    : "#31c36433",
                                  color: color ? "#FC9E2F" : "#31C364",
                                }}
                              >
                                {obj.status}
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  backgroundColor: "#0E093C",
                                  border: "none",
                                  color: "#FFFFFF",
                                  fontSize: "0.7rem",
                                  width: "5.18rem",
                                  borderRadius: "8px",
                                  height: "1.37rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  HandleViewMoreBtn(obj);
                                }}
                              >
                                see details...
                              </button>
                              {queryModal ? (
                                <>
                                  <span
                                    id={Style.modalOverlay}
                                    onClick={() => {
                                      HandleViewMoreBtn(obj.ticket_id);
                                    }}
                                  ></span>
                                  <div id={Style.queryDetailsContainer}>
                                    <div id={Style.queryModalBody}>
                                      <h2 id={Style.modalHeading}> Query </h2>
                                      <p id={Style.modalSubHeading}>
                                        see full details of this query
                                      </p>
                                      <div id={Style.profileCard}>
                                        <img
                                          id={Style.queryProfileImg}
                                          src={queryImage}
                                          alt=""
                                        />
                                        <div id={Style.detailsBox}>
                                          <p className={Style.profileData}>
                                            username
                                          </p>
                                          <p className={Style.profileData}>
                                            player sub type
                                          </p>
                                          <p className={Style.profileData}>
                                            joined StakeCut {}
                                          </p>
                                          <p className={Style.profileData}>
                                            email
                                          </p>
                                          <p className={Style.profileData}>
                                            location
                                          </p>
                                          <div id={Style.actionsDiv}>
                                            <div id={Style.userStatus}>
                                              <span
                                                id={Style.onlineStatus}
                                              ></span>
                                              <p>online</p>
                                            </div>

                                            <button id={Style.viewProfileBtn}>
                                              {" "}
                                              View User Profile{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id={Style.qerydetailsTable}>
                                      <tr id={Style.TableHeader}>
                                        <th className={Style.headers}>S/N</th>
                                        <th className={Style.headers}>
                                          Ticket className
                                        </th>
                                        <th className={Style.headers}>
                                          Query Type
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Attachments
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Time&Data
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Query Status
                                        </th>
                                        <th className={Style.headers}> Action</th>
                                      </tr>
                                      <tr id={Style.TableRows}>
                                        <td id={Style.headers}>1</td>
                                        <td id={Style.headers}>
                                          QUE-20251202-FolaOl
                                        </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          Payment Trouble
                                        </td>
                                        <td id={Style.headers}> no file</td>
                                        <td id={Style.headers}> 2025-02-12</td>
                                        <td id={Style.headers}> Open</td>
                                        <button
                                          id={Style.headersBtn}
                                          onMouseEnter={() =>
                                            setIsBtnHovered(true)
                                          }
                                          onMouseLeave={() =>
                                            setIsBtnHovered(false)
                                          }
                                          onClick={() =>
                                            setResolveScreen(!resolveScreen)
                                          }
                                        >
                                          View | Resolve
                                        </button>
                                      </tr>
                                      <div
                                        id={
                                          isBtnHovered
                                            ? Style.btnHoverMessageDiv
                                            : Style.btnHoverMessageDivHide
                                        }
                                      >
                                        <p>
                                          {" "}
                                          Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Aliquam provident
                                          consectetur harum eos saepe repellat
                                          sapiente, quaerat eius. Tempore
                                          accusantium id aliquid tenetur incidunt
                                          possimus distinctio aliquam, voluptate
                                          blanditiis ad!
                                        </p>
                                      </div>
                                    </div>
                                    {!prevQueries ? (
                                      <div id={Style.previousQuery}>
                                        <div id={Style.TableHeader}>
                                          <div id={Style.headers}>S/N</div>
                                          <div id={Style.headers}>Ticket ID</div>
                                          <div id={Style.headers}>Query Type</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Attachments
                                          </div>
                                          <div id={Style.headers}> Time&Data</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Query Status
                                          </div>
                                          <div id={Style.headers}> Action</div>
                                        </div>
                                        <div id={Style.TableRows}>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <button id={Style.headers}>
                                            View | Resolve
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div id={Style.noPrevQueryDiv}>
                                        <h3 id={Style.noPastQueriesHeader}>
                                          {" "}
                                          Past queries from this player
                                        </h3>
                                        <div id={Style.noQueriesDetails}>
                                          <img
                                            id={Style.brokenGhost}
                                            src={solar_ghost_broken}
                                            alt=""
                                          />
                                        </div>
                                        <div id={Style.noQueryDetailDiv}>
                                          <h3>No Previous Query History</h3>
                                          <p style={{ textWrap: "wrap" }}>
                                            This is empty because this user has
                                            not logged any query before
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                              {resolveScreen ? (
                                <div id={Style.resolveScreenContainer}>
                                  <div id={Style.modal}>
                                    {/* Header */}
                                    <div id={Style.modalHeader}>
                                      <h2>Query Information & Resolution</h2>
                                      <button
                                        id={Style.closeBtn}
                                        onClick={() =>
                                          setResolveScreen(!resolveScreen)
                                        }
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Issue Type */}
                                    <button id={Style.issueBtn}>
                                      Money Issue
                                    </button>

                                    {/* Complaint Section */}
                                    <div id={Style.complaintSection}>
                                      <label>
                                        Complaint{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <textarea readOnly id={Style.textarea}>
                                        I won a game but I’m still yet to receive
                                        my money
                                      </textarea>
                                    </div>
                                    {/* Resolution Section */}
                                    <div className={Style.resolutionSection}>
                                      <label>
                                        Resolution{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <input
                                        type="email"
                                        id={Style.inputBox}
                                        placeholder="example@gmail.com"
                                      />
                                      <textarea
                                        id={Style.textarea}
                                        placeholder="Type here..."
                                      ></textarea>
                                    </div>

                                    {/* Update Status */}
                                    <div id={Style.statusSection}>
                                      <span id={Style.status}>Resolved</span>
                                      <span id={Style.status}>Unresolved</span>
                                      <span id={Style.status}>Escalated</span>
                                      <span id={Style.status}>In Motion</span>
                                    </div>
                                    {/* Send Button */}
                                    <button id={Style.sendBtn}>
                                      Send Resolution &gt;&gt;&gt;
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                // </div>
                                <></>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div>
                      {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          {i + 1}
                        </button>
                      ))} */}
                    </div>
                  </tbody>
                ) : (
                  ""
                )}
                {toggleIndex === 1 ? (
                  <tbody>
                    {paginatedData.map((obj, index) => {
                      let color = obj.status === "Pending" ? true : false;

                      return (
                        <>
                          <div id={Style.Personal_Info_tr}>
                            <div> {index + 1}</div>
                            <div>{obj.date || "20/2/24"}</div>
                            <div className={Style.tableText}>{obj.queryType}</div>
                            <div className={Style.tableText}>{obj.category}</div>
                            <div className={Style.tableText}>{obj.username}</div>
                            {/* <div className={Style.tableText}>{obj.headline}</div> */}
                            <div>
                              <div
                                className={Style.statusText}
                                style={{
                                  backgroundColor: color
                                    ? "#fc9e2f33"
                                    : "#31c36433",
                                  color: color ? "#FC9E2F" : "#31C364",
                                }}
                              >
                                {obj.status}
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  backgroundColor: "#0E093C",
                                  border: "none",
                                  color: "#FFFFFF",
                                  fontSize: "0.7rem",
                                  width: "5.18rem",
                                  borderRadius: "8px",
                                  height: "1.37rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  HandleViewMoreBtn(obj);
                                }}
                              >
                                see details...
                              </button>
                              {queryModal ? (
                                <>
                                  <span
                                    id={Style.modalOverlay}
                                    onClick={() => {
                                      HandleViewMoreBtn(obj);
                                    }}
                                  ></span>
                                  <div id={Style.queryDetailsContainer}>
                                    <div id={Style.queryModalBody}>
                                      <h2 id={Style.modalHeading}> Query </h2>
                                      <p id={Style.modalSubHeading}>
                                        see full details of this query
                                      </p>
                                      <div id={Style.profileCard}>
                                        <img
                                          id={Style.queryProfileImg}
                                          src={queryImage}
                                          alt=""
                                        />
                                        <div id={Style.detailsBox}>
                                          <p className={Style.profileData}>
                                            username
                                          </p>
                                          <p className={Style.profileData}>
                                            player sub type
                                          </p>
                                          <p className={Style.profileData}>
                                            joined StakeCut {}
                                          </p>
                                          <p className={Style.profileData}>
                                            email
                                          </p>
                                          <p className={Style.profileData}>
                                            location
                                          </p>
                                          <div id={Style.actionsDiv}>
                                            <div id={Style.userStatus}>
                                              <span
                                                id={Style.onlineStatus}
                                              ></span>
                                              <p>online</p>
                                            </div>

                                            <button id={Style.viewProfileBtn}>
                                              {" "}
                                              View User Profile{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id={Style.qerydetailsTable}>
                                      <tr id={Style.TableHeader}>
                                        <th className={Style.headers}>S/N</th>
                                        <th className={Style.headers}>
                                          Ticket className
                                        </th>
                                        <th className={Style.headers}>
                                          Query Type
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Attachments
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Time&Data
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Query Status
                                        </th>
                                        <th className={Style.headers}> Action</th>
                                      </tr>
                                      <tr id={Style.TableRows}>
                                        <td id={Style.headers}>1</td>
                                        <td id={Style.headers}>
                                          QUE-20251202-FolaOl
                                        </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          Payment Trouble
                                        </td>
                                        <td id={Style.headers}> no file</td>
                                        <td id={Style.headers}> 2025-02-12</td>
                                        <td id={Style.headers}> Open</td>
                                        <button
                                          id={Style.headersBtn}
                                          onMouseEnter={() =>
                                            setIsBtnHovered(true)
                                          }
                                          onMouseLeave={() =>
                                            setIsBtnHovered(false)
                                          }
                                          onClick={() =>
                                            setResolveScreen(!resolveScreen)
                                          }
                                        >
                                          View | Resolve
                                        </button>
                                      </tr>
                                      <div
                                        id={
                                          isBtnHovered
                                            ? Style.btnHoverMessageDiv
                                            : Style.btnHoverMessageDivHide
                                        }
                                      >
                                        <p>
                                          {" "}
                                          Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Aliquam provident
                                          consectetur harum eos saepe repellat
                                          sapiente, quaerat eius. Tempore
                                          accusantium id aliquid tenetur incidunt
                                          possimus distinctio aliquam, voluptate
                                          blanditiis ad!
                                        </p>
                                      </div>
                                    </div>
                                    {!prevQueries ? (
                                      <div id={Style.previousQuery}>
                                        <div id={Style.TableHeader}>
                                          <div id={Style.headers}>S/N</div>
                                          <div id={Style.headers}>Ticket ID</div>
                                          <div id={Style.headers}>Query Type</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Attachments
                                          </div>
                                          <div id={Style.headers}> Time&Data</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Query Status
                                          </div>
                                          <div id={Style.headers}> Action</div>
                                        </div>
                                        <div id={Style.TableRows}>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <button id={Style.headers}>
                                            View | Resolve
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div id={Style.noPrevQueryDiv}>
                                        <h3 id={Style.noPastQueriesHeader}>
                                          {" "}
                                          Past queries from this player
                                        </h3>
                                        <div id={Style.noQueriesDetails}>
                                          <img
                                            id={Style.brokenGhost}
                                            src={solar_ghost_broken}
                                            alt=""
                                          />
                                        </div>
                                        <div id={Style.noQueryDetailDiv}>
                                          <h3>No Previous Query History</h3>
                                          <p style={{ textWrap: "wrap" }}>
                                            This is empty because this user has
                                            not logged any query before
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                              {resolveScreen ? (
                                <div id={Style.resolveScreenContainer}>
                                  <div id={Style.modal}>
                                    {/* Header */}
                                    <div id={Style.modalHeader}>
                                      <h2>Query Information & Resolution</h2>
                                      <button
                                        id={Style.closeBtn}
                                        onClick={() =>
                                          setResolveScreen(!resolveScreen)
                                        }
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Issue Type */}
                                    <button id={Style.issueBtn}>
                                      Money Issue
                                    </button>

                                    {/* Complaint Section */}
                                    <div id={Style.complaintSection}>
                                      <label>
                                        Complaint{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <textarea readOnly id={Style.textarea}>
                                        I won a game but I’m still yet to receive
                                        my money
                                      </textarea>
                                    </div>
                                    {/* Resolution Section */}
                                    <div className={Style.resolutionSection}>
                                      <label>
                                        Resolution{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <input
                                        type="email"
                                        id={Style.inputBox}
                                        placeholder="example@gmail.com"
                                      />
                                      <textarea
                                        id={Style.textarea}
                                        placeholder="Type here..."
                                      ></textarea>
                                    </div>

                                    {/* Update Status */}
                                    <div id={Style.statusSection}>
                                      <span id={Style.status}>Resolved</span>
                                      <span id={Style.status}>Unresolved</span>
                                      <span id={Style.status}>Escalated</span>
                                      <span id={Style.status}>In Motion</span>
                                    </div>

                                    {/* Send Button */}
                                    <button id={Style.sendBtn}>
                                      Send Resolution &gt;&gt;&gt;
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                // </div>
                                <></>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div>
                      {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          {i + 1}
                        </button>
                      ))} */}
                    </div>
                  </tbody>
                ) : (
                  ""
                )}
                {toggleIndex === 2 ? (
                  <tbody>
                    {paginatedData.map((obj, index) => {
                      let color = obj.status === "Pending" ? true : false;

                      return (
                        <>
                          <div id={Style.Personal_Info_tr}>
                            <div> {index + 1}</div>
                            <div>{obj.date || "20/2/24"}</div>
                            <div className={Style.tableText}>{obj.queryType}</div>
                            <div className={Style.tableText}>{obj.category}</div>
                            <div className={Style.tableText}>{obj.username}</div>
                            {/* <div className={Style.tableText}>{obj.headline}</div> */}
                            <div>
                              <div
                                className={Style.statusText}
                                style={{
                                  backgroundColor: color
                                    ? "#fc9e2f33"
                                    : "#31c36433",
                                  color: color ? "#FC9E2F" : "#31C364",
                                }}
                              >
                                {obj.status}
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  backgroundColor: "#0E093C",
                                  border: "none",
                                  color: "#FFFFFF",
                                  fontSize: "0.7rem",
                                  width: "5.18rem",
                                  borderRadius: "8px",
                                  height: "1.37rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  HandleViewMoreBtn(obj);
                                }}
                              >
                                see details...
                              </button>
                              {queryModal ? (
                                <>
                                  <span
                                    id={Style.modalOverlay}
                                    onClick={() => {
                                      HandleViewMoreBtn(obj);
                                    }}
                                  ></span>
                                  <div id={Style.queryDetailsContainer}>
                                    <div id={Style.queryModalBody}>
                                      <h2 id={Style.modalHeading}> Query </h2>
                                      <p id={Style.modalSubHeading}>
                                        see full details of this query
                                      </p>
                                      <div id={Style.profileCard}>
                                        <img
                                          id={Style.queryProfileImg}
                                          src={queryImage}
                                          alt=""
                                        />
                                        <div id={Style.detailsBox}>
                                          <p className={Style.profileData}>
                                            username
                                          </p>
                                          <p className={Style.profileData}>
                                            player sub type
                                          </p>
                                          <p className={Style.profileData}>
                                            joined StakeCut {}
                                          </p>
                                          <p className={Style.profileData}>
                                            email
                                          </p>
                                          <p className={Style.profileData}>
                                            location
                                          </p>
                                          <div id={Style.actionsDiv}>
                                            <div id={Style.userStatus}>
                                              <span
                                                id={Style.onlineStatus}
                                              ></span>
                                              <p>online</p>
                                            </div>

                                            <button id={Style.viewProfileBtn}>
                                              {" "}
                                              View User Profile{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id={Style.qerydetailsTable}>
                                      <tr id={Style.TableHeader}>
                                        <th className={Style.headers}>S/N</th>
                                        <th className={Style.headers}>
                                          Ticket className
                                        </th>
                                        <th className={Style.headers}>
                                          Query Type
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Attachments
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Time&Data
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Query Status
                                        </th>
                                        <th className={Style.headers}> Action</th>
                                      </tr>
                                      <tr id={Style.TableRows}>
                                        <td id={Style.headers}>1</td>
                                        <td id={Style.headers}>
                                          QUE-20251202-FolaOl
                                        </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          Payment Trouble
                                        </td>
                                        <td id={Style.headers}> no file</td>
                                        <td id={Style.headers}> 2025-02-12</td>
                                        <td id={Style.headers}> Open</td>
                                        <button
                                          id={Style.headersBtn}
                                          onMouseEnter={() =>
                                            setIsBtnHovered(true)
                                          }
                                          onMouseLeave={() =>
                                            setIsBtnHovered(false)
                                          }
                                          onClick={() =>
                                            setResolveScreen(!resolveScreen)
                                          }
                                        >
                                          View | Resolve
                                        </button>
                                      </tr>
                                      <div
                                        id={
                                          isBtnHovered
                                            ? Style.btnHoverMessageDiv
                                            : Style.btnHoverMessageDivHide
                                        }
                                      >
                                        <p>
                                          {" "}
                                          Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Aliquam provident
                                          consectetur harum eos saepe repellat
                                          sapiente, quaerat eius. Tempore
                                          accusantium id aliquid tenetur incidunt
                                          possimus distinctio aliquam, voluptate
                                          blanditiis ad!
                                        </p>
                                      </div>
                                    </div>
                                    {!prevQueries ? (
                                      <div id={Style.previousQuery}>
                                        <div id={Style.TableHeader}>
                                          <div id={Style.headers}>S/N</div>
                                          <div id={Style.headers}>Ticket ID</div>
                                          <div id={Style.headers}>Query Type</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Attachments
                                          </div>
                                          <div id={Style.headers}> Time&Data</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Query Status
                                          </div>
                                          <div id={Style.headers}> Action</div>
                                        </div>
                                        <div id={Style.TableRows}>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <button id={Style.headers}>
                                            View | Resolve
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div id={Style.noPrevQueryDiv}>
                                        <h3 id={Style.noPastQueriesHeader}>
                                          {" "}
                                          Past queries from this player
                                        </h3>
                                        <div id={Style.noQueriesDetails}>
                                          <img
                                            id={Style.brokenGhost}
                                            src={solar_ghost_broken}
                                            alt=""
                                          />
                                        </div>
                                        <div id={Style.noQueryDetailDiv}>
                                          <h3>No Previous Query History</h3>
                                          <p style={{ textWrap: "wrap" }}>
                                            This is empty because this user has
                                            not logged any query before
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                              {resolveScreen ? (
                                <div id={Style.resolveScreenContainer}>
                                  <div id={Style.modal}>
                                    {/* Header */}
                                    <div id={Style.modalHeader}>
                                      <h2>Query Information & Resolution</h2>
                                      <button
                                        id={Style.closeBtn}
                                        onClick={() =>
                                          setResolveScreen(!resolveScreen)
                                        }
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Issue Type */}
                                    <button id={Style.issueBtn}>
                                      Money Issue
                                    </button>

                                    {/* Complaint Section */}
                                    <div id={Style.complaintSection}>
                                      <label>
                                        Complaint{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <textarea readOnly id={Style.textarea}>
                                        I won a game but I’m still yet to receive
                                        my money
                                      </textarea>
                                    </div>
                                    {/* Resolution Section */}
                                    <div className={Style.resolutionSection}>
                                      <label>
                                        Resolution{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <input
                                        type="email"
                                        id={Style.inputBox}
                                        placeholder="example@gmail.com"
                                      />
                                      <textarea
                                        id={Style.textarea}
                                        placeholder="Type here..."
                                      ></textarea>
                                    </div>

                                    {/* Update Status */}
                                    <div id={Style.statusSection}>
                                      <span id={Style.status}>Resolved</span>
                                      <span id={Style.status}>Unresolved</span>
                                      <span id={Style.status}>Escalated</span>
                                      <span id={Style.status}>In Motion</span>
                                    </div>

                                    {/* Send Button */}
                                    <button id={Style.sendBtn}>
                                      Send Resolution &gt;&gt;&gt;
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                // </div>
                                <></>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div>
                      {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          {i + 1}
                        </button>
                      ))} */}
                    </div>
                  </tbody>
                ) : (
                  ""
                )}
                {toggleIndex === 3 ? (
                  <tbody>
                    {paginatedData.map((obj, index) => {
                      let color = obj.status === "Pending" ? true : false;

                      return (
                        <>
                          <div id={Style.Personal_Info_tr}>
                            <div> {index + 1}</div>
                            <div>{obj.date || "20/2/24"}</div>
                            <div className={Style.tableText}>{obj.queryType}</div>
                            <div className={Style.tableText}>{obj.category}</div>
                            <div className={Style.tableText}>{obj.username}</div>
                            {/* <div className={Style.tableText}>{obj.headline}</div> */}
                            <div>
                              <div
                                className={Style.statusText}
                                style={{
                                  backgroundColor: color
                                    ? "#fc9e2f33"
                                    : "#31c36433",
                                  color: color ? "#FC9E2F" : "#31C364",
                                }}
                              >
                                {obj.status}
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  backgroundColor: "#0E093C",
                                  border: "none",
                                  color: "#FFFFFF",
                                  fontSize: "0.7rem",
                                  width: "5.18rem",
                                  borderRadius: "8px",
                                  height: "1.37rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  HandleViewMoreBtn(obj);
                                }}
                              >
                                see details...
                              </button>
                              {queryModal ? (
                                <>
                                  <span
                                    id={Style.modalOverlay}
                                    onClick={() => {
                                      HandleViewMoreBtn(obj);
                                    }}
                                  ></span>
                                  <div id={Style.queryDetailsContainer}>
                                    <div id={Style.queryModalBody}>
                                      <h2 id={Style.modalHeading}> Query </h2>
                                      <p id={Style.modalSubHeading}>
                                        see full details of this query
                                      </p>
                                      <div id={Style.profileCard}>
                                        <img
                                          id={Style.queryProfileImg}
                                          src={queryImage}
                                          alt=""
                                        />
                                        <div id={Style.detailsBox}>
                                          <p className={Style.profileData}>
                                            username
                                          </p>
                                          <p className={Style.profileData}>
                                            player sub type
                                          </p>
                                          <p className={Style.profileData}>
                                            joined StakeCut {}
                                          </p>
                                          <p className={Style.profileData}>
                                            email
                                          </p>
                                          <p className={Style.profileData}>
                                            location
                                          </p>
                                          <div id={Style.actionsDiv}>
                                            <div id={Style.userStatus}>
                                              <span
                                                id={Style.onlineStatus}
                                              ></span>
                                              <p>online</p>
                                            </div>

                                            <button id={Style.viewProfileBtn}>
                                              {" "}
                                              View User Profile{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id={Style.qerydetailsTable}>
                                      <tr id={Style.TableHeader}>
                                        <th className={Style.headers}>S/N</th>
                                        <th className={Style.headers}>
                                          Ticket className
                                        </th>
                                        <th className={Style.headers}>
                                          Query Type
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Attachments
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Time&Data
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Query Status
                                        </th>
                                        <th className={Style.headers}> Action</th>
                                      </tr>
                                      <tr id={Style.TableRows}>
                                        <td id={Style.headers}>1</td>
                                        <td id={Style.headers}>
                                          QUE-20251202-FolaOl
                                        </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          Payment Trouble
                                        </td>
                                        <td id={Style.headers}> no file</td>
                                        <td id={Style.headers}> 2025-02-12</td>
                                        <td id={Style.headers}> Open</td>
                                        <button
                                          id={Style.headersBtn}
                                          onMouseEnter={() =>
                                            setIsBtnHovered(true)
                                          }
                                          onMouseLeave={() =>
                                            setIsBtnHovered(false)
                                          }
                                          onClick={() =>
                                            setResolveScreen(!resolveScreen)
                                          }
                                        >
                                          View | Resolve
                                        </button>
                                      </tr>
                                      <div
                                        id={
                                          isBtnHovered
                                            ? Style.btnHoverMessageDiv
                                            : Style.btnHoverMessageDivHide
                                        }
                                      >
                                        <p>
                                          {" "}
                                          Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Aliquam provident
                                          consectetur harum eos saepe repellat
                                          sapiente, quaerat eius. Tempore
                                          accusantium id aliquid tenetur incidunt
                                          possimus distinctio aliquam, voluptate
                                          blanditiis ad!
                                        </p>
                                      </div>
                                    </div>
                                    {!prevQueries ? (
                                      <div id={Style.previousQuery}>
                                        <div id={Style.TableHeader}>
                                          <div id={Style.headers}>S/N</div>
                                          <div id={Style.headers}>Ticket ID</div>
                                          <div id={Style.headers}>Query Type</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Attachments
                                          </div>
                                          <div id={Style.headers}> Time&Data</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Query Status
                                          </div>
                                          <div id={Style.headers}> Action</div>
                                        </div>
                                        <div id={Style.TableRows}>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <button id={Style.headers}>
                                            View | Resolve
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div id={Style.noPrevQueryDiv}>
                                        <h3 id={Style.noPastQueriesHeader}>
                                          {" "}
                                          Past queries from this player
                                        </h3>
                                        <div id={Style.noQueriesDetails}>
                                          <img
                                            id={Style.brokenGhost}
                                            src={solar_ghost_broken}
                                            alt=""
                                          />
                                        </div>
                                        <div id={Style.noQueryDetailDiv}>
                                          <h3>No Previous Query History</h3>
                                          <p style={{ textWrap: "wrap" }}>
                                            This is empty because this user has
                                            not logged any query before
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                              {resolveScreen ? (
                                <div id={Style.resolveScreenContainer}>
                                  <div id={Style.modal}>
                                    {/* Header */}
                                    <div id={Style.modalHeader}>
                                      <h2>Query Information & Resolution</h2>
                                      <button
                                        id={Style.closeBtn}
                                        onClick={() =>
                                          setResolveScreen(!resolveScreen)
                                        }
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Issue Type */}
                                    <button id={Style.issueBtn}>
                                      Money Issue
                                    </button>

                                    {/* Complaint Section */}
                                    <div id={Style.complaintSection}>
                                      <label>
                                        Complaint{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <textarea readOnly id={Style.textarea}>
                                        I won a game but I’m still yet to receive
                                        my money
                                      </textarea>
                                    </div>
                                    {/* Resolution Section */}
                                    <div className={Style.resolutionSection}>
                                      <label>
                                        Resolution{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <input
                                        type="email"
                                        id={Style.inputBox}
                                        placeholder="example@gmail.com"
                                      />
                                      <textarea
                                        id={Style.textarea}
                                        placeholder="Type here..."
                                      ></textarea>
                                    </div>

                                    {/* Update Status */}
                                    <div id={Style.statusSection}>
                                      <span id={Style.status}>Resolved</span>
                                      <span id={Style.status}>Unresolved</span>
                                      <span id={Style.status}>Escalated</span>
                                      <span id={Style.status}>In Motion</span>
                                    </div>

                                    {/* Send Button */}
                                    <button id={Style.sendBtn}>
                                      Send Resolution &gt;&gt;&gt;
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                // </div>
                                <></>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div>
                      {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          {i + 1}
                        </button>
                      ))} */}
                    </div>
                  </tbody>
                ) : (
                  ""
                )}
                {toggleIndex === 4 ? (
                  <tbody>
                    {paginatedData.map((obj, index) => {
                      let color = obj.status === "Pending" ? true : false;

                      return (
                        <>
                          <div id={Style.Personal_Info_tr}>
                            <div> {index + 1}</div>
                            <div>{obj.date || "20/2/24"}</div>
                            <div className={Style.tableText}>{obj.queryType}</div>
                            <div className={Style.tableText}>{obj.category}</div>
                            <div className={Style.tableText}>{obj.username}</div>
                            {/* <div className={Style.tableText}>{obj.headline}</div> */}
                            <div>
                              <div
                                className={Style.statusText}
                                style={{
                                  backgroundColor: color
                                    ? "#fc9e2f33"
                                    : "#31c36433",
                                  color: color ? "#FC9E2F" : "#31C364",
                                }}
                              >
                                {obj.status}
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  backgroundColor: "#0E093C",
                                  border: "none",
                                  color: "#FFFFFF",
                                  fontSize: "0.7rem",
                                  width: "5.18rem",
                                  borderRadius: "8px",
                                  height: "1.37rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  HandleViewMoreBtn(obj);
                                }}
                              >
                                see details...
                              </button>
                              {queryModal ? (
                                <>
                                  <span
                                    id={Style.modalOverlay}
                                    onClick={() => {
                                      HandleViewMoreBtn(obj);
                                    }}
                                  ></span>
                                  <div id={Style.queryDetailsContainer}>
                                    <div id={Style.queryModalBody}>
                                      <h2 id={Style.modalHeading}> Query </h2>
                                      <p id={Style.modalSubHeading}>
                                        see full details of this query
                                      </p>
                                      <div id={Style.profileCard}>
                                        <img
                                          id={Style.queryProfileImg}
                                          src={queryImage}
                                          alt=""
                                        />
                                        <div id={Style.detailsBox}>
                                          <p className={Style.profileData}>
                                            username
                                          </p>
                                          <p className={Style.profileData}>
                                            player sub type
                                          </p>
                                          <p className={Style.profileData}>
                                            joined StakeCut {}
                                          </p>
                                          <p className={Style.profileData}>
                                            email
                                          </p>
                                          <p className={Style.profileData}>
                                            location
                                          </p>
                                          <div id={Style.actionsDiv}>
                                            <div id={Style.userStatus}>
                                              <span
                                                id={Style.onlineStatus}
                                              ></span>
                                              <p>online</p>
                                            </div>

                                            <button id={Style.viewProfileBtn}>
                                              {" "}
                                              View User Profile{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div id={Style.qerydetailsTable}>
                                      <tr id={Style.TableHeader}>
                                        <th className={Style.headers}>S/N</th>
                                        <th className={Style.headers}>
                                          Ticket className
                                        </th>
                                        <th className={Style.headers}>
                                          Query Type
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Attachments
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Time&Data
                                        </th>
                                        <th className={Style.headers}>
                                          {" "}
                                          Query Status
                                        </th>
                                        <th className={Style.headers}> Action</th>
                                      </tr>
                                      <tr id={Style.TableRows}>
                                        <td id={Style.headers}>1</td>
                                        <td id={Style.headers}>
                                          QUE-20251202-FolaOl
                                        </td>
                                        <td id={Style.headers}>
                                          {" "}
                                          Payment Trouble
                                        </td>
                                        <td id={Style.headers}> no file</td>
                                        <td id={Style.headers}> 2025-02-12</td>
                                        <td id={Style.headers}> Open</td>
                                        <button
                                          id={Style.headersBtn}
                                          onMouseEnter={() =>
                                            setIsBtnHovered(true)
                                          }
                                          onMouseLeave={() =>
                                            setIsBtnHovered(false)
                                          }
                                          onClick={() =>
                                            setResolveScreen(!resolveScreen)
                                          }
                                        >
                                          View | Resolve
                                        </button>
                                      </tr>
                                      <div
                                        id={
                                          isBtnHovered
                                            ? Style.btnHoverMessageDiv
                                            : Style.btnHoverMessageDivHide
                                        }
                                      >
                                        <p>
                                          {" "}
                                          Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Aliquam provident
                                          consectetur harum eos saepe repellat
                                          sapiente, quaerat eius. Tempore
                                          accusantium id aliquid tenetur incidunt
                                          possimus distinctio aliquam, voluptate
                                          blanditiis ad!
                                        </p>
                                      </div>
                                    </div>
                                    {!prevQueries ? (
                                      <div id={Style.previousQuery}>
                                        <div id={Style.TableHeader}>
                                          <div id={Style.headers}>S/N</div>
                                          <div id={Style.headers}>Ticket ID</div>
                                          <div id={Style.headers}>Query Type</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Attachments
                                          </div>
                                          <div id={Style.headers}> Time&Data</div>
                                          <div id={Style.headers}>
                                            {" "}
                                            Query Status
                                          </div>
                                          <div id={Style.headers}> Action</div>
                                        </div>
                                        <div id={Style.TableRows}>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <div id={Style.headers}></div>
                                          <button id={Style.headers}>
                                            View | Resolve
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div id={Style.noPrevQueryDiv}>
                                        <h3 id={Style.noPastQueriesHeader}>
                                          {" "}
                                          Past queries from this player
                                        </h3>
                                        <div id={Style.noQueriesDetails}>
                                          <img
                                            id={Style.brokenGhost}
                                            src={solar_ghost_broken}
                                            alt=""
                                          />
                                        </div>
                                        <div id={Style.noQueryDetailDiv}>
                                          <h3>No Previous Query History</h3>
                                          <p style={{ textWrap: "wrap" }}>
                                            This is empty because this user has
                                            not logged any query before
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                              {resolveScreen ? (
                                <div id={Style.resolveScreenContainer}>
                                  <div id={Style.modal}>
                                    {/* Header */}
                                    <div id={Style.modalHeader}>
                                      <h2>Query Information & Resolution</h2>
                                      <button
                                        id={Style.closeBtn}
                                        onClick={() =>
                                          setResolveScreen(!resolveScreen)
                                        }
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Issue Type */}
                                    <button id={Style.issueBtn}>
                                      Money Issue
                                    </button>

                                    {/* Complaint Section */}
                                    <div id={Style.complaintSection}>
                                      <label>
                                        Complaint{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <textarea readOnly id={Style.textarea}>
                                        I won a game but I’m still yet to receive
                                        my money
                                      </textarea>
                                    </div>
                                    {/* Resolution Section */}
                                    <div className={Style.resolutionSection}>
                                      <label>
                                        Resolution{" "}
                                        <span id={Style.date}>(09/01/25)</span>
                                      </label>
                                      <input
                                        type="email"
                                        id={Style.inputBox}
                                        placeholder="example@gmail.com"
                                      />
                                      <textarea
                                        id={Style.textarea}
                                        placeholder="Type here..."
                                      ></textarea>
                                    </div>

                                    {/* Update Status */}
                                    <div id={Style.statusSection}>
                                      <span id={Style.status}>Resolved</span>
                                      <span id={Style.status}>Unresolved</span>
                                      <span id={Style.status}>Escalated</span>
                                      <span id={Style.status}>In Motion</span>
                                    </div>

                                    {/* Send Button */}
                                    <button id={Style.sendBtn}>
                                      Send Resolution &gt;&gt;&gt;
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                // </div>
                                <></>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div>
                      {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          {i + 1}
                        </button>
                      ))} */}
                    </div>
                  </tbody>
                ) : (
                  ""
                )}
              </table>
            </div>
                {/*  Paagination */}
                    <div className={Style.pagination}>
                      <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                       className={`${Style.pageButton} ${currentPage === 1 ? Style.disabled : ""}`}
                      >
                        Previous
                      </button>
                       {/* Show a range of page numbers around the current page */}
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
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`${Style.pageButton} ${currentPage === totalPages ? Style.disabled : ""}`}
                      >
                        Next
                      </button>
                      <span>Page {currentPage} of {totalPages}</span>
                    </div>
              {/* paginations */}
            {/* {toggleIndex == 100 && 
              (
                <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
                  <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={paginatedData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              )
            }
            {toggleIndex == 0 && 
              (
                <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
                  <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={paginatedData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              )
            }
            {toggleIndex == 1 && 
              (
                <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
                  <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={paginatedData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              )
            }
            {toggleIndex == 2 && 
              (
                <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
                  <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={paginatedData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              )
            }
            {toggleIndex == 3 && 
              (
                <div id={window.innerWidth < 480 ? Style.paginationDiv : null}>
                  <App_Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={paginatedData.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              )
            } */}

            {/* Filter Cards */}
          <div id={Style.Total_Stats_CardWrapper}>
            <div id={Style.Reports_mapDiv}>
              {stats_card4.map((obj, index) => {
                let isBlack = index == toggleIndex ? true : false;
                return (
                  <div
                    id={
                      window.innerWidth < 480 ? Style.Cards : Style.firstCardSet
                    }
                  >
                    <Total_Card
                      key={index}
                      text={obj.text}
                      image1={obj.image1}
                      divText={obj.divText}
                      price={obj.price}
                      // isBlack={isBlack}
                      onClick={() => toggle(index)}
                      isPurple={index == 0 ? "true" : null}
                      isGreen={index == 1 ? "true" : null}
                      isRed={index == 2 ? "true" : null}
                      isBlack={index == 3 ? "true" : null}
                    />
                  </div>
                );
              })}
            </div>

            <div id={Style.Query_Stats_MapCard}>
              {stats_card3.map((obj, index) => {
                let colourChange = index + 4 == toggleIndex ? true : false;
                return (
                  <Stats_Card
                    img={obj.img}
                    figure={obj.figure}
                    text={obj.text}
                    to={obj.to}
                    colourChange={colourChange}
                    // onClick={() => toggle(index + 4)}
                    isPurple={index == 0 ? "true" : null}
                    isGreen={index == 1 ? "true" : null}
                    isRed={index == 2 ? "true" : null}
                    isBlack={index == 3 ? "true" : null}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
