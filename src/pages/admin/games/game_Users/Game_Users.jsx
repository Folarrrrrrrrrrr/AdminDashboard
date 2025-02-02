import React from 'react'
import Style from "./Game_Users.module.css"
import AllUsers_com from '../../../../components/allUsers_com/AllUsers_com'
import person from "../../../../assets/images/Person1.png"
import Header from '../../../../components/header/Header'



const Game_Users = () => {

    const all_Users_arr = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/userDetails"
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
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },

    ]

    return (
        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"Game Users"}
                headerInfo={"Here’s an information on all Users"}
            />

            <div id={Style.All_Users_wrapperDiv}>

                <AllUsers_com arr={all_Users_arr} />
            </div>
        </div>
    )
}

export default Game_Users