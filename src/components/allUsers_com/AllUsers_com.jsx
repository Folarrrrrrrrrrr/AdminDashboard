import React, { useState, useEffect } from "react";
import Style from "./AllUsers_com.module.css";
import InputField from "../input/InputField";
import search from "../../assets/svg/Search.svg";
import Staff_Card from "../userStaff_Card/Staff_Card";
import blue from "../../assets/svg/blue.svg";
import gold from "../../assets/svg/gold.svg";
import black from "../../assets/svg/black.svg";
import empty_user from "../../assets/svg/empty_user.svg";

import logo from "../../assets/images/S_icon.png";

import arrow_left from "../../assets/images/newArrow.png"
import arrow_right from "../../assets/images/rightArrow.png"


const AllUsers_com = (props) => {
  const [loading, setLoading] = useState(true);

  const { arr } = props;
  let array = { ...arr };

  const { allUsers, subscribedUsers, unsubscribedUsers } = array;

  const [toggleIndex, setToggleIndex] = useState(0);
  const [searchUser, setSearchUser] = useState("");
  const [sortList, setSortList] = useState("name"); // Default sort by name

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12; // Max 10 users per page

  useEffect(() => {
    setTimeout(() => (allUsers ? setLoading(false) : setLoading(true)), 3000);
  }, []);

  const transactionToggle = (index) => {
    setToggleIndex(index);  
  };

  // Filter users based on search input
  const filteredUsers = allUsers.filter((user) =>
    user.username.toLowerCase().includes(searchUser.toLowerCase())
  );

  // Sort users based on selected option
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortList === "name"
      ? a.username.localeCompare(b.username)
      : a.country.localeCompare(b.country)
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  return (
    <div>
      <div id={Style.All_Users_toggle_dateDiv}>
        <div id={Style.All_Users_toggleDiv}>
          <button
            onClick={() => transactionToggle(0)}
            className={
              toggleIndex == 0
                ? Style.toggleDiv_buttonActive
                : Style.All_Users_listDiv_button
            }
          >
            All
          </button>
          <button
            onClick={() => transactionToggle(1)}
            className={
              toggleIndex == 1
                ? Style.toggleDiv_buttonActive
                : Style.All_Users_listDiv_button
            }
          >
            Subscribed
          </button>
          <button
            onClick={() => transactionToggle(2)}
            className={
              toggleIndex == 2
                ? Style.toggleDiv_buttonActive
                : Style.All_Users_listDiv_button
            }
          >
            Unsubscribed
          </button>
          {/* <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button> */}
        </div>
        <div id={Style.sortNfilterDiv}>
          {/* Search Input */}
          <input
            id={Style.inputBox}
            type="text"
            placeholder="Search Username"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            className="search-box"
          />

          {/* Sorting Dropdown */}
          <select
            id={Style.inputBox}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-dropdown"
          >
            <option value="name">Sort by Name</option>
            <option value="country">Sort by Country</option>
          </select>
        </div>
      </div>

      <div id={Style.All_Users_Card}>
        {
          toggleIndex === 0 &&
            // <div id={Style.UserCardsDiv}>
            currentUsers.map((object) => {
              let statusColor = object.status === "Online" ? true : false;

              let verify =
                object.subscription_type == "blue"
                  ? blue
                  : object.subscription_type == "gold"
                  ? gold
                  : object.subscription_type == "black"
                  ? black
                  : "";

              return (
                <div id={Style.eachCard}>
                    <Staff_Card
                      img={object.profile_picture}
                      status={object.status}
                      name={object.username}
                      position={object.country}
                      verified={verify}
                      to={`/userDetails/${object.phone}`}
                      statusColor={statusColor}
                    />
                </div>
              );
            })
          // </div>
        }

        {toggleIndex === 1 &&
          subscribedUsers.map((object) => {
            let statusColor = object.status === "Online" ? true : false;

            let verify =
              object.subscription_type == "blue"
                ? blue
                : object.subscription_type == "gold"
                ? gold
                : object.subscription_type == "black"
                ? black
                : "";

            return (
                    <Staff_Card
                        img={object.profile_picture}
                        // status={object.status}
                        name={object.username}
                        position={object.country}
                        verified={verify}
                        to={`/userDetails/${object.phone}`}
                        statusColor={statusColor}
                    />
            );
          })}

        {toggleIndex == 2 &&
          unsubscribedUsers.map((object) => {
            let statusColor = object.status === "Online" ? true : false;

            let verify =
              object.subscription_type == "blue"
                ? blue
                : object.subscription_type == "gold"
                ? gold
                : object.subscription_type == "black"
                ? black
                : "";

            return (
              <Staff_Card
                img={object.profile_picture}
                status={object.status}
                name={object.username}
                position={object.country}
                verified={verify}
                to={`/userDetails/${object.phone}`}
                statusColor={statusColor}
              />
            );
          })}

        

        {/* {
                    allUsers === 0 || unsubscribedUsers === 0 &&
                    <div className={Style.empty_userDiv}>
                        <img src={empty_user} alt="" />
                        <p>No Subscribed Users</p>
                    </div>
                } */}
      </div>
      <div className={Style.pagination}>
            <div>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    style={{marginRight:"20px"}}
                >
                   prev 
                </button>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                   
                   next
                </button>
            </div>
            
            <span >Page {currentPage} of {totalPages}</span>
        </div>
    </div>
  );
};

export default AllUsers_com;
