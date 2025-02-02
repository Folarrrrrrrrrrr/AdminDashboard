import React, { useState, useEffect } from "react";
import Style from "./All_FootSoldiers.module.css";
import Header from "../../../../components/header/Header";
import person from "../../../../assets/images/Person1.png";
import arrow_down from "../../../../assets/svg/arrow_down-dark.svg";
import search from "../../../../assets/svg/Search.svg";
import download from "../../../../assets/svg/download_img.svg";
import InputField from "../../../../components/input/InputField";
import nig_flag from "../../../../assets/svg/nig_flag.svg";
import person_img from "../../../../assets/images/person_img.png";
import country_flag from "../../../../assets/svg/country_flag.svg";
import country_flag2 from "../../../../assets/svg/country_flag2.svg";
import Category_Grid from "../../../../assets/svg/Category_Grid.svg";
import list_view from "../../../../assets/svg/list_view.svg";
import Button from "../../../../components/button/Button";
import List_viewTable from "../../../../components/listView/List_viewTable";
import Staff_Card from "../../../../components/userStaff_Card/Staff_Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootSolidersProfile } from "../../api_detaills/GlobalStates/FooltSoldiersProfileSlice";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';



const All_FootSoldiers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFootSolidersProfile());
  }, [dispatch]);

  // /totalBetPlaced/${0}

  const handleViewMore = () => {
    navigate(
      `@/soldiersDetails/${FootSolidersProfileData.user_id}`
      //    {
      //   state: { source : "Sports", extraData: footballBetsList }
      // }
    );
  };

  const {
    FootSolidersProfileData,
    FootSolidersProfileloading,
    FootSolidersProfileerror,
  } = useSelector((state) => state.FooltSoldiersProfile);
  console.log(FootSolidersProfileData);

  const [isGridView, setIsGridView] = useState(true);

  const all_soldiers_arr = FootSolidersProfileData;
  //  [
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Offline",
  //     to: "/soldiersDetails",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //     to: "/soldiersDetails",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //     to: "/soldiersDetails",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //     to: "/soldiersDetails",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //     to: "/soldiersDetails",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  //   {
  //     img: person,
  //     name: "John Doe",
  //     position: "Nigeria",
  //     status: "Online",
  //   },
  // ];

  const listView_arr = [
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: nig_flag,
      action: "View Users",
    },

    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: country_flag,
      action: "View Users",
    },
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: nig_flag,
      action: "View Users",
    },
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: country_flag2,
      action: "View Users",
    },
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: nig_flag,
      action: "View Users",
    },
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: country_flag,
      action: "View Users",
    },
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: country_flag2,
      action: "View Users",
    },
    {
      name: {
        img: person_img,
        name: "John Doe",
      },
      countries: "Nigeria",
      flag: country_flag2,
      action: "View Users",
    },
  ];

  const pageTransition = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { duration: 2.5 } },
      exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };

  return (
    
    <motion.div
      variants={pageTransition}
      inital='initial'
      animate='animate'
      exit='exit'
    >
      <div id={Style.All_FootSoldiers_mainDiv}>
        <Header
          headerText={"All Foot Soldiers"}
          headerInfo={"Here’s an information of all Foot Soldiers"}
        />

        <div id={Style.All_FootSoldiers_wrapperDiv}>
          <div id={Style.All_Users_toggle_dateDiv}>
            <p id={Style.All_FootSoldiers_headerText}>All Foot Soldiers</p>

            <div id={Style.All_Users_input_FilterDiv}>
              <p
                id={Style.viewchange_button}
                onClick={() => setIsGridView(!isGridView)}
              >
                {isGridView ? (
                  <div className={Style.footsoldier_listGrid_view}>
                    <img src={list_view} alt="" /> List View
                  </div>
                ) : (
                  <div className={Style.footsoldier_listGrid_view}>
                    <img src={Category_Grid} alt="" /> Grid View
                  </div>
                )}
              </p>

              {/* <p id={Style.dateText}>3rd July, 2024 <img src={arrow_down} alt="" /></p> */}

              <p id={Style.searchDiv}>
                <img src={search} alt="" />
                <InputField placeholder={"A-Z"} />
              </p>
            </div>
          </div>

          {isGridView ? (
            <div id={Style.All_Users_Card}>
              {all_soldiers_arr.map((object) => {
                let statusColor = object.status === "Online" ? true : false;

                return (
                  <Staff_Card
                    img={object.img}
                    status={object.status}
                    name={object.name}
                    position={object.position}
                    // to="/soldiersDetails/" 
                    to={`/soldiersDetails/${object.phone}`}                  
                    // to={`/userDetails/${object.user_id}`}
                    statusColor={statusColor}
                  />
                );
              })}
            </div>
          ) : (
            ""
          )}

          {!isGridView ? (
            <div id={window.innerWidth ? Style.SoldiersListView : null}>
              <List_viewTable listView_arr={listView_arr} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default All_FootSoldiers;
