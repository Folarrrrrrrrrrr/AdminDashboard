import React, { useEffect, useState } from "react";
import Style from "../all_footSoldiers/All_FootSoldiers.module.css";
import Header from "../../../../components/header/Header";
import person from "../../../../assets/images/Person1.png";
import arrow_down from "../../../../assets/svg/arrow_down-dark.svg";
import search from "../../../../assets/svg/Search.svg";
import InputField from "../../../../components/input/InputField";
import list_view from "../../../../assets/svg/list_view.svg";
import nig_flag from "../../../../assets/svg/nig_flag.svg";
import Category_Grid from "../../../../assets/svg/Category_Grid.svg";
import List_viewTable from "../../../../components/listView/List_viewTable";
import UsersCard from "./component/UsersCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootSolidersOnboardedUsers } from "../../api_detaills/GlobalStates/UserFromFootSoldier";

const All_FootSoldiers = () => {
  const [isGridView, setIsGridView] = useState(true);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFootSolidersOnboardedUsers());
  }, []);

  const { footSolidersOnboardedUsersData, footSolidersOnboardedUsersloading, footSolidersOnboardedUserserror } = useSelector((state) => state.UserFromFootSoldier);


  const all_soldiers_arr = footSolidersOnboardedUsersData;

  //  [
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   {
  //     name: {
  //       img: person,
  //       name: "John Doe",
  //     },
  //     countries: "Nigeria",
  //     flag: nig_flag,
  //     email: "Johndoe@gmail.com",
  //     onboardedBy: "Onboarded by John Doe",
  //     action: "View Users",
  //     status: "Online",
  //   },
  //   // {
  //   //     name: {
  //   //         img: person,
  //   //         name: "John Doe"
  //   //     },
  //   //     countries: "Nigeria",
  //   //     flag: country_flag,
  //   //     action: "View Users",
  //   //     status: "Online"
  //   // },
  // ];

  return (
    <div id={Style.All_FootSoldiers_mainDiv}>
      <Header
        headerText={"Users From Foot Soldiers"}
        headerInfo={"Here’s an information of all Users from Foot Soldiers"}
      />

      <div id={Style.All_FootSoldiers_wrapperDiv}>
        <div id={Style.All_Users_toggle_dateDiv}>
          <p id={Style.All_FootSoldiers_headerText}>Users from Foot Soldiers</p>

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

            <p id={Style.dateText}>
              3rd July, 2024 <img src={arrow_down} alt="" />
            </p>

            <p id={Style.searchDiv}>
              <img src={search} alt="" />
              <InputField placeholder={"A-Z"} />
            </p>
          </div>
        </div>

        {isGridView ? (
          <div id={Style.All_Users_Card}>
            {all_soldiers_arr.map((object) => {
              return (
                <UsersCard
                  // img={object.name.img}
                  status={object.status}
                  name={object.username}
                  country={object.countries}
                  email={object.email}
                  onboardedBy={object.onboardedBy}
                  to={object.to}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}

        {!isGridView ? (
          <div id={window.innerWidth ? Style.SoldiersListView : null}>
            <List_viewTable listView_arr={all_soldiers_arr} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default All_FootSoldiers;
