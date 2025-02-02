import React, { useState } from 'react'
import Style from './Online_Players.module.css'
import Header from '../../../../components/header/Header'
import person from '../../../../assets/images/Person1.png'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import list_view from '../../../../assets/svg/list_view.svg'
import country_flag from '../../../../assets/svg/country_flag.svg'
import country_flag2 from '../../../../assets/svg/country_flag2.svg'
import nig_flag from '../../../../assets/svg/nig_flag.svg'
import Category_Grid from '../../../../assets/svg/Category_Grid.svg'
import List_viewTable from '../../../../components/listView/List_viewTable'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'
import Staff_Card from '../../../../components/userStaff_Card/Staff_Card'




const Online_Players = () => {

    const [isGridView, setIsGridView] = useState(true);
    const {updateOnlineCountPopup}= PopupContextHook()


    const onlineCount = ()=>{
        updateOnlineCountPopup(true)
    }


    const Online_Players_arr = [
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag2,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: nig_flag,
            action: "View Users",
            status: "Online"

        },
        {
            name: {
                img: person,
                name: "John Doe"
            },
            countries: "Nigeria",
            flag: country_flag,
            action: "View Users",
            status: "Online"
        },

    ]


    return (
        <div id={Style.Online_Players_mainDiv}>
            <Header
                headerText={"Total Online Players"}
                headerInfo={"Here’s an information on all Online Players"} />

            <div id={Style.Online_Players_wrapperDiv}>

                <div id={Style.header_dateDiv}>

                    <div id={Style.headerDiv}>
                        <p id={Style.headerText}>Total Online Players </p>
                        <p id={Style.numberText}>2000</p>
                        <p id={Style.seeMore_Text} onClick={onlineCount}>See More</p>
                    </div>

                    <div id={Style.input_FilterDiv}>

                        <p id={Style.viewchange_button} onClick={() => setIsGridView(!isGridView)}>
                            {isGridView ? <div className={Style.footsoldier_listGrid_view}><img src={list_view} alt="" /> List View</div> : <div className={Style.footsoldier_listGrid_view}><img src={Category_Grid} alt="" /> Grid View</div>}
                        </p>

                    

                        <p id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </p>

                    </div>
                </div>

                {isGridView ?
                    <div id={Style.Online_Players_Card}>
                        {
                            Online_Players_arr.map((obj) => {
                               
                            let statusColor = obj.status === "Online" ? true : false
                               
                                return (
                                    <Staff_Card
                                        img={obj.name.img}
                                        status={obj.status}
                                        name={obj.name.name}
                                        position={obj.countries}
                                        to={obj.to} 
                                        statusColor ={statusColor}/>
                                )
                            })
                        }
                    </div> : ""
                }

                {
                    !isGridView ?
                        <List_viewTable listView_arr={Online_Players_arr} /> : ""
                }
            </div>
        </div>
    )
}

export default Online_Players