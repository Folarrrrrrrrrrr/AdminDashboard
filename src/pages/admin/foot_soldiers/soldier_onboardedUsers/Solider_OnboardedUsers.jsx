import React, { useState } from 'react'
import Style from './Solider_OnboardedUsers.module.css'
import Header from '../../../../components/header/Header';
import person from '../../../../assets/images/Person1.png'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import nig_flag from '../../../../assets/svg/nig_flag.svg'
import person_img from '../../../../assets/images/person_img.png'
import country_flag from '../../../../assets/svg/country_flag.svg'
import country_flag2 from '../../../../assets/svg/country_flag2.svg'
import Category_Grid from '../../../../assets/svg/Category_Grid.svg'
import list_view from '../../../../assets/svg/list_view.svg'
import Button from '../../../../components/button/Button'
import List_viewTable from '../../../../components/listView/List_viewTable'


const Solider_OnboardedUsers = () => {

    const [isGridView, setIsGridView] = useState(true);


    const all_soldiers_arr = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/soldiersDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/soldiersDetails"

        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/soldiersDetails"

        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/soldiersDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/soldiersDetails"

        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },

    ]

    const listView_arr = [

        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },

        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users"
        },
        {
            name: {
                img: person_img,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users"
        }
    ]


  return (
    <div id={Style.onboardedUsers}>
        <Header
                headerText={"Foot Soldier"}
                headerInfo={"Here’s an information of all Foot Soldiers"} />


            <div id={Style.All_FootSoldiers_wrapperDiv}>
                <div id={Style.All_Users_toggle_dateDiv}>
                    <p id={Style.All_FootSoldiers_headerText}>John Doe’s Onboarded Users</p>

                    <div id={Style.All_Users_input_FilterDiv}>

                        <p id={Style.viewchange_button} onClick={() => setIsGridView(!isGridView)}>
                            {isGridView ? <div className={Style.footsoldier_listGrid_view}><img src={list_view} alt="" /> List View</div> : <div className={Style.footsoldier_listGrid_view}><img src={Category_Grid} alt="" /> Grid View</div>}
                        </p>

                        <p id={Style.dateText}>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                        
                        <p id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </p> 

                    </div>
                </div>


                {
                    isGridView ?

                        <div id={Style.All_Users_Card}>
                            {
                                all_soldiers_arr.map((object) => {
                                    return (
                                        <Staff_Card
                                            img={object.img}
                                            status={object.status}
                                            name={object.name}
                                            position={object.position}
                                            to={object.to}
                                        />
                                    )
                                })
                            }

                        </div> : ""
                }


                {
                    !isGridView ?
                        <List_viewTable listView_arr={listView_arr}/> : ""
                }
            </div>
    </div>
  )
}

export default Solider_OnboardedUsers