import React, { useState } from 'react'
import Style from '../successful_Card/Successful_Card.module.css'
import green_tick from '../../assets/svg/Green_tick.svg'
import cancel_img from '../../assets/svg/cancel_img.svg'




const Successful_Card = (props) => {
    
    const {text,cancel} = props
  return (
    <div id={Style.Successful_AccCreation_mainDiv}>
        <div id={Style.Successful_AccCreation_wrapperDiv}>
        <div id={Style.cancelDiv}>
            <div></div>
           <button onClick={cancel}><img src={cancel_img} alt="" /></button>
        </div>
        <div id={Style.Successful_AccCreation_TextDiv}>
            <img src={green_tick} alt="" />
            <div id={Style.successDiv}>
                <p>Successful</p>
                <div>{text}</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Successful_Card