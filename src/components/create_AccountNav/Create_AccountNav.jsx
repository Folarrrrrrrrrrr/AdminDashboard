import React from 'react'
import Style from './Create_AccountNav.module.css'
import alpha_logo from '../../assets/svg/Alpha_Bet_Black_Logo.svg'
import arrow_black from '../../assets/svg/arrow_down-dark.svg'




const Create_AccountNav = () => {
  return (
    <div>
      <div id={Style.CreateNew_Account_Nav}>
        <p></p>
        <img src={alpha_logo} alt="" />
        <div>
          English <img src={arrow_black} alt="" />
        </div>
      </div>
      <div id={Style.CreateNew_Account_form_MainDiv}>
        <p>Create a new account</p>
      </div>
    </div>
  )
}

export default Create_AccountNav