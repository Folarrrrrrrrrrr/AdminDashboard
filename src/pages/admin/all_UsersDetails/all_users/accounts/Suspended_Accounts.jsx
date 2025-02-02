import React, { useEffect, useState } from 'react'
import Style from "./Suspended.module.css"
import Header from '../../../../../components/header/Header'
import blue from '../../../../../assets/svg/blue.svg'
import black from '../../../../../assets/svg/black.svg'
import gold from '../../../../../assets/svg/gold.svg'
import Accounts_Card from './accounts_card/Accounts_Card'
import { PopupContextHook } from '../../../../../WhiteHouse_PopupContext'
import { getSuspendedUsersProvider } from '../../../api_detaills/provider/user_provider'


const Suspended_Accounts = () => {

    const { updateErrorText, updateErrorPopup } = PopupContextHook()

    const [toggleIndex, setToggleIndex] = useState(0)

    const transactionToggle = (index) => {

        setToggleIndex(index)

    }



    const [suspend, setsuspend] = useState({
        allUsers: [],
        subscribedUsers: [],
        unsubscribedUsers: []
    })




    useEffect(() => {

        getSuspendedUsersProvider({
            updateSuspended: (data) => {
                setsuspend({
                    allUsers: data.allUsers,
                    subscribedUsers: data.subscribedUsers,
                    unsubscribedUsers: data.unsubscribedUsers
                })
            },
            updateErrorPopup,
            updateErrorText
        })
    }, [])

    console.log(suspend);

    const { allUsers, subscribedUsers, unsubscribedUsers } = suspend



    return (

        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"Suspended Accounts"}
                headerInfo={"Here’s an information on all Suspended Accounts"} />

            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>

                    <button id={Style.accounts_btn}>Suspended Accounts</button>
                </div>


                <div id={Style.All_Users_toggleDiv}>
                    <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                    <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                    <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                </div>


                <div id={Style.All_Users_Card}>


                    {
                        toggleIndex == 0 &&

                        allUsers.map((object, index) => {

                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    status={object.status}
                                    verified={verify}
                                    statusColor={statusColor} />
                            )
                        })

                    }

                    {

                        toggleIndex == 1 &&

                        subscribedUsers.map((object, index) => {

                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    status={object.status}
                                    verified={verify}
                                    statusColor={statusColor} />
                            )
                        })
                    }


                    {

                        toggleIndex == 2 &&

                        unsubscribedUsers.map((object, index) => {

                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={`/userDetails/${object.phone}`}
                                    status={object.status}
                                    verified={verify}
                                    statusColor={statusColor} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Suspended_Accounts