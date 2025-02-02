import React from 'react'
import style from "./Error.module.css"
import errorImg from "../../assets/svg/error.svg"
import { PopupContextHook } from '../../WhiteHouse_PopupContext';

const Error = () => {

  const {errorText} = PopupContextHook();


  return (

    <div id={style.mainDiv}>

      <div id={style.wrapper}>

        <img src={errorImg} />
        <div id={style.errorText}>{errorText}</div>
     
      </div>
   
    </div>
    // <div>{errorText}</div>
  )
}

export default Error