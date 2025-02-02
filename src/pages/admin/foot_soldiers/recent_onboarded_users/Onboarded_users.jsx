import React from 'react'
import Style from './Onboarded_users.module.css'
import Header from '../../../../components/header/Header'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import filter from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import InputField from '../../../../components/input/InputField'



const Onboarded_users = () => {

    const arr = [


        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug 2024",
            userID: "UA 123476689",
            footSoldier: "John Doe",
            status: "Onboarded"
        }

    ]


    return (
        <div id={Style.Onboarded_users_mainDiv}>
            <Header
                headerText={"Recently Onboarded Users"}
                headerInfo={"Here’s an information on all recently Onboarded Users"} />


            <div id={Style.Onboarded_users_wrapperDiv}>

                <div id={Style.Onboarded_users_input_FilterDiv}>
                    <p  id={window.innerWidth <480 ? Style.dateText : null }> 3rd October, 2024 <img src={arrow_down} alt="" /></p>

                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField />
                    </div>
                    <div id={Style.imgDiv}>
                        <img src={filter} alt="" />
                        <img src={download} alt="" />
                    </div>
                </div>

                <div id={Style.Onboarded_users_tableWrapperDiv}>

                    <p id={Style.HeaderText}>Recently Onboarded Users</p>

                    <table id={window.innerWidth < 480? Style.table: null }>
                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>User ID</th>
                                    <th>Foot Soldier</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    arr.map((obj, index)=>{
                                        return(
                                            
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{obj.date}</td>
                                                <td>{obj.userID}</td>
                                                <td>{obj.footSoldier}</td>
                                                <td><div id={Style.status_text}>{obj.status}</div></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Onboarded_users