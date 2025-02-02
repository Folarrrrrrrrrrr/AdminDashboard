import React, { useState } from 'react'
import Style from "./AllUsers_com.module.css"
import InputField from '../input/InputField'
import search from "../../assets/svg/Search.svg"
import Staff_Card from '../userStaff_Card/Staff_Card'
import blue from "../../assets/svg/blue.svg"
import gold from "../../assets/svg/gold.svg"
import black from "../../assets/svg/black.svg"
import empty_user from "../../assets/svg/empty_user.svg"


const AllUsers_com = (props) => {

    const { arr } = props
    let array = { ...arr }

    const { allUsers, subscribedUsers, unsubscribedUsers } = array


    const [toggleIndex, setToggleIndex] = useState(0)


    const transactionToggle = (index) => {
        setToggleIndex(index)
    }

    return (
        <div>

            <div id={Style.All_Users_toggle_dateDiv}>

                <div id={Style.All_Users_toggleDiv}>
                    <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                    <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                    <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                    {/* <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button> */}
                </div>

            </div>

            <div id={Style.All_Users_Card}>
                {
                    toggleIndex === 0 &&

                    allUsers.map((object) => {

                        let statusColor = object.status === "Online" ? true : false

                        let verify = object.subscription_type == "blue" ? blue
                            : object.subscription_type == "gold" ? gold
                                : object.subscription_type == "black" ? black
                                    : ""

                        return (
                            <Staff_Card
                                img={object.profile_picture}
                                status={object.status}
                                name={object.username}
                                position={object.country}
                                verified={verify}
                                to={`/userDetails/${object.phone}`}
                                statusColor={statusColor} />
                        )
                    })

                }

                {
                    toggleIndex === 1 &&

                    subscribedUsers.map((object) => {

                        let statusColor = object.status === "Online" ? true : false

                        let verify = object.subscription_type == "blue" ? blue
                            : object.subscription_type == "gold" ? gold
                                : object.subscription_type == "black" ? black
                                    : ""

                        return (
                            <Staff_Card
                                img={object.profile_picture}
                                // status={object.status}
                                name={object.username}
                                position={object.country}
                                verified={verify}
                                to={`/userDetails/${object.phone}`}
                                statusColor={statusColor} />
                        )
                    })


                }


                {
                    toggleIndex == 2 &&

                    unsubscribedUsers.map((object) => {

                        let statusColor = object.status === "Online" ? true : false

                        let verify = object.subscription_type == "blue" ? blue
                            : object.subscription_type == "gold" ? gold
                                : object.subscription_type == "black" ? black
                                    : ""

                        return (
                            <Staff_Card
                                img={object.profile_picture}
                                status={object.status}
                                name={object.username}
                                position={object.country}
                                verified={verify}
                                to={`/userDetails/${object.phone}`}
                                statusColor={statusColor} />
                        )
                    })


                }

                {/* {
                    allUsers === 0 || unsubscribedUsers === 0 &&
                    <div className={Style.empty_userDiv}>
                        <img src={empty_user} alt="" />
                        <p>No Subscribed Users</p>
                    </div>
                } */}

            </div>
        </div>
    )
}

export default AllUsers_com