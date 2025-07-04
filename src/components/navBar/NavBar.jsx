import React, { useState } from "react";
import Style from "./NavBar.module.css";
import arrowDown from "../../assets/svg/arrow_down.svg";
import mail from "../../assets/svg/transparent_mail.svg";
import user from "../../assets/svg/transparent_contact.svg";
import logo from "../../assets/images/LOGO512.png";
import alphaBet_logo from "../../assets/svg/Alpha_Bet_Black_Logo.svg";
import mail_two from "../../assets/svg/staff_mail.svg";
import person from "../../assets/svg/staff_person.svg";
import scrollUp from '../../assets/images/scroll-up.png'
import { NavLink, useLocation } from "react-router-dom";
import exit from "../../assets/images/exit.png"
import { useDispatch } from "react-redux";
import ProfileCom from "../profileCom/ProfileCom";
import { getEmail } from '../../pages/admin/api_detaills/constant/local_storage'

const NavBar = () => {
  const dispatch = useDispatch();

  const [showLogOutBtn, setShowLogOutBtn] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const location = useLocation();

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [hamburger, sethamburger] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 480) {
      sethamburger(!hamburger);
    }
  };
  // Retrieve email from local storage
      const user = getEmail()
   const jsonUser = JSON.parse(user);
    const email = jsonUser?.email; 

  return (
    <div>
      <div id={Style.Nav_Bar_Wrapper}>     

        {/* <div id={hamburger ? Style.entireNav : Style.entireNavHide}> */}
          <div id={Style.NavBar_textDiv}>
            <img src={logo} alt=""  style={{width:"5%", marginRight:"-30px"}}/>
            {/* <p id={hamburger ? Style.logo :  Style.logo }  className="logo">Logo</p> */}
            <NavLink
              to={"/dashboard"}
              className={`${Style.NavBar_text} ${
                activeNav === "dashboard" ? Style.Nav_styled_Link : ""
              }`}
              onClick={() => {handleNavClick("dashboard") ; toggleMenu();}}
            >
            <p>Dashboard</p>
            </NavLink>
            {/* <NavLink
              to={"/placebet"}
              className={`${Style.NavBar_text} ${
                activeNav === "placebet" ? Style.Nav_styled_Link : ""
              }`}
              onClick={() => { handleNavClick("placebet");toggleMenu();}}
            >
            <p>Bet Placed</p>
            </NavLink> */}
            <div
              className={`${Style.NavBar_text} ${
                activeNav === "game" ? Style.Nav_styled_Link : ""
              }`}
            >
              <p className={Style.game}>
                Games <img src={arrowDown} alt="" />
              </p>
              <div id={Style.dropdown}>
                <ul>
                  <NavLink to={"/dice"} onClick={() => {handleNavClick("game");toggleMenu();}}>
                    <li>
                      <input
                        type="radio"
                        name="dice"
                        value="dice"
                        checked={location.pathname === "/dice"}
                        id={Style.radio_input}
                      />{" "}
                      Dice
                    </li>
                  </NavLink>
                  <NavLink
                    to={"/sports"}
                    onClick={() => {handleNavClick("game"); toggleMenu()}}
                  >

                    <li>
                      <input
                        type="radio"
                        name="game"
                        id=""
                        value="sport"
                        checked={location.pathname === "/sports"}
                      />
                      Sports
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* <NavLink
              to={"/allusers"}
              className={`${Style.NavBar_text}  ${
                activeNav === "/allUsers" ? Style.Nav_styled_Link : ""
              }`}
              onClick ={()=>{handleNavClick("allusers");toggleMenu()}}
            >
              <p>Users</p>
            </NavLink> */}
            <NavLink
              to={"/allusers"}
              className={`${Style.NavBar_text} ${
                activeNav === "/allusers" ? Style.Nav_styled_Link : ""
              }`}
              onClick={() => {handleNavClick("allusers") ; toggleMenu();}}
            >
            <p>User</p>
            </NavLink>


            <NavLink
              id="transactions"
              to={"/transactions"}
              className={`${Style.NavBar_text} ${
                activeNav === "transaction" ? Style.Nav_styled_Link : ""
              }`}
              onClick={() => { handleNavClick("transaction"); toggleMenu();} }
            >
              <p>Transactions</p>
            </NavLink>

            <NavLink
              to={"/queries"}
              className={`${Style.NavBar_text} ${
                activeNav === "queries" ? Style.Nav_styled_Link : ""
              }`}
              onClick={() => {handleNavClick("queries"); toggleMenu()}}
            >
              <p>Queries</p>
            </NavLink>

            <p
              onClick={toggleDropdown}
              className={`${Style.NavBar_text} ${
                activeNav === "customerCare" ? Style.Nav_styled_Link : ""
              }`}
            >
              {" "}
              Admin's Corner
              {dropdownOpen && (
                <div id={Style.CustomerCare_details_mainDiv}>
                  <div id={Style.CustomerCare_details_wrapperDiv}>
                    <p>See who interacts with customers! </p>
                    <div id={Style.btnDiv}>
                      <NavLink
                        to={"/customerCare"}
                        id={Style.adminCornerNavs}
                        onClick={() => {handleNavClick("customerCare"); toggleMenu();}}
                      >
                        <button>C.C </button>
                      </NavLink>
                      <NavLink
                        // to={"/FootSoldiersHome"}
                        to={"/footSoldiers"}
                        onClick={() => {handleNavClick("customerCare"); toggleMenu();}}
                      >
                        <button>Foot Soldiers </button>
                      </NavLink>
                      {/* <button onClick={() => toggleDropdown(false)}>
                        {" "}
                        Cancel
                      </button> */}
                    </div>
                  </div>
                </div>
              )}
            </p>

            
            <NavLink to={"/department"}
              onClick={() => {handleNavClick("department");}} 
            >
              <p> Management</p>
            </NavLink>
          </div>
          <div id={Style.NavBar_profile}>
          <img src={scrollUp} className={Style.scrollUpIcon} alt="" />
          
            {/* <p>
              English <img src={arrowDown} alt="" />
            </p> */}

            <div id={Style.NavBar_lastlineDiv}>
              {/* <div id={Style.NavBar_line}></div> */}
              <img src={mail} alt="" />

              {/* <NavLink
                to={"/profile"}
                onClick={() => handleNavClick("profile")}
              > */}
                
              {/* </NavLink> */}

              <div  >
                <div style={{display:"flex"}} onClick={()=>setShowLogOutBtn(!showLogOutBtn)}>
                  <div id={Style.profile_img} >
                      {activeNav === "profile" ? (
                        <img src={person} alt="" />
                      ) : (
                        <img src={user} alt="" />
                      )}
                  </div>
                  <p>
                    {email}
                  </p>
                </div>
                {showLogOutBtn&&
                  ( 
                    <div id={Style.editProfileBanner}>
                      <div id={Style.profileBox} > 
                        <ProfileCom/>
                      </div>
                    </div>
                  )       
                }                  
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
