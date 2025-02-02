import React, { useState } from 'react'
import Style from "./Online_PlayersCount.module.css"
import cancel from "../../../../../../assets/svg/cancel.svg"
import arrow_down from "../../../../../../assets/svg/arrow_down.svg"
import { PopupContextHook } from '../../../../../../WhiteHouse_PopupContext'
import players from "../../../../../../assets/svg/players.svg"
import arrow_up from "../../../../../../assets/svg/arrow_up.svg"
import arrow_down2 from "../../../../../../assets/svg/arrow_down2.svg"





const Online_PlayersCount = () => {

    const hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const mins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
    const day = ["am", "pm"]


    const [hourIndex, setHourIndex] = useState(0)
    const [minIndex, setMinIndex] = useState(0)
    const [dayIndex, setDayIndex] = useState(0)



    const decrease = () => {
        setHourIndex(hourIndex - 1)
    }
    const increase = () => {
        setHourIndex(hourIndex + 1)
    }

    const decreaseMins = () => {
        setMinIndex(minIndex - 1)
    }
    const increaseMins = () => {
        setMinIndex(minIndex + 1)
    }

    const { updateOnlineCountPopup } = PopupContextHook()

    const cancelPopup = () => {
        updateOnlineCountPopup(false)
    }



    return (
        <div id={Style.Online_PlayersCount_mainDiv}>
            <div id={Style.wrapperDiv}>
                <div id={Style.blankDiv} onClick={cancelPopup}></div>

                <div id={Style.OnlineCount_details}>
                    <img onClick={cancelPopup} src={cancel} alt="" />

                    <div id={Style.headerDiv}>
                        <p id={Style.playerText}>Total Onine Players</p>
                        <p id={Style.dayText}>Today <img src={arrow_down} alt="" /></p>
                    </div>

                    <p id={Style.headerText}>Mon 26th October, 2024</p>


                    <div id={Style.timePicker_Div}>
                        <div id={Style.hourDiv}>
                           {hourIndex !== 23 ? <button onClick={increase}><img src={arrow_up} alt="" /></button> : "" } 
                            <p className={Style.Text}>{hour[hourIndex]}</p>
                          {hourIndex !== 0 ? <button onClick={decrease}><img src={arrow_down2} alt="" /></button> : ""}  
                        </div>
                        <p id={Style.Column}>:</p>

                        <div id={Style.hourDiv}>
                           {minIndex !== 59 ? <button onClick={increaseMins}><img src={arrow_up} alt="" /></button> : "" } 
                            <p className={Style.Text}>{mins[minIndex]}</p>
                          {minIndex !== 0 ? <button onClick={decreaseMins}><img src={arrow_down2} alt="" /></button> : ""}  
                        </div>

                        <div id={Style.day_div}>
                            <p className={Style.Text}>AM</p>
                            <p className={Style.Text}>PM</p>
                        </div>
                    </div>
                    <div id={Style.imgDiv}>
                        <img src={players} alt="" />


                    </div>



                    <div id={Style.TextDiv}>
                        <p id={Style.totalText}>Total Online Players </p>
                        <p id={Style.numberText}>2000</p>
                        <p id={Style.seeMore_Text}>See Players</p>
                    </div>
                </div>


            </div>
          
        </div>
    )
}

export default Online_PlayersCount