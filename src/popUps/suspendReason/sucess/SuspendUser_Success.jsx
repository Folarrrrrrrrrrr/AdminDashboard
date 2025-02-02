import React from 'react'
import Style from "./SuspendUser_Success.module.css"
import blue_success from "../../../assets/svg/blue_success.svg"
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'



const SuspendUser_Success = () => {


    const { updateSuspendSuccess, phoneState } = PopupContextHook()

    const { details } = phoneState

    const close = () => {

        updateSuspendSuccess(false)
    }


    // const { email, details } = suspendState

    const  status  = details
    // console.log();

    console.log(status);



    return (

        <div id={Style.success_mainDiv}>

            <div id={Style.success_wrapperDiv}>

                <img id={Style.success_img} src={blue_success} alt="" />

                {
                    status === "active" ?
                        <p>Account Suspended</p> :
                        <p>Account Succesfully Unsuspended</p>

                }

                <div id={Style.btnDiv}>

                    <button onClick={close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default SuspendUser_Success