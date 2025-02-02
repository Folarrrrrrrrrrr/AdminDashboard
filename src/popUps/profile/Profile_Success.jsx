import React from 'react'
import Style from "./Profile_Success.module.css"
import blue_success from "../../assets/svg/blue_success.svg"
import { PopupContextHook } from '../../WhiteHouse_PopupContext'




const Profile_Success = () => {

  const { updateProfilePopup } = PopupContextHook()


  return (

    <div id={Style.Approve_mainDiv} onClick={()=>updateProfilePopup(false)}>
            <div id={Style.Approve_wrapperDiv}>

                <img id={Style.success_img} src={blue_success} alt="" />
                <p>Profile updated Successfully</p>

            </div>
        </div>
)
}

export default Profile_Success