import React, { useState } from 'react'
import Style from './Admin_SignIn.module.css'
import Input from "../../../components/SignUp_input/Input"
import Button from '../../../components/button/Button'
import revenue_BG from '../../../assets/svg/revenue_BG.svg'
import chart_BG from '../../../assets/svg/chart_BG.svg'
import pie_BG from '../../../assets/svg/pie_BG.svg'
import game_BG from '../../../assets/svg/game_BG.svg'
import WH_logo from '../../../assets/images/WH_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { login_provider } from '../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'


const Admin_SignIn = () => {

  const navigate = useNavigate();
  const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateSignInSuccess } = PopupContextHook();


  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  })


  const [validation, setValidation] = useState({

    email: false,
    password: false,
  })


  const Details = (e) => {
    const name = e.target.name
    const value = e.target.value

    setSignIn(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const LoginSubmit = async () => {

    //The request Body

    let body = signIn;

    //This initiates the provider that handles the login API.
    login_provider(body, updateSignInSuccess, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup );

  }

  const handleSubmit = (e) => {

    e.preventDefault(e)

    let emailVal = signIn.email.includes("@") && signIn.email.includes(".") ? false : true;
    let passwordVal = signIn.password.length > 4 ? false : true;

    setValidation({
      email: emailVal,
      password: passwordVal,
    })

    let valid = emailVal == false && passwordVal == false

    if (valid) {
      LoginSubmit()
    }

    // LoginSubmit()

    console.log(signIn.email, signIn.password)
  }


  return (
    <div id={Style.SignIn_mainDiv}>
      <div id={Style.scattered_imagesDiv}>

        <img id={Style.gamePad} src={game_BG} alt="" />
        <img src={revenue_BG} id={Style.revenue_BG} alt="" />

        <div id={Style.pie_Chart_textDiv}>

          <img src={pie_BG} id={Style.pie_BG} alt="" />
          <div>
            <p>Daily Win</p>
            <p>$250,000</p>
          </div>
        </div>
        <img src={chart_BG} id={Style.chart_BG} alt="" />
        {/* <img id={Style.gamePad} src={lady_BG} alt="" /> */}
      </div>

      <div id={Style.admin_signIn_wrapperDiv}>

        <div id={Style.SignIn_headerDiv}>
          <img src={WH_logo} alt="" />

          <p id={Style.signIn_Text}>Sign in into your Account</p>
          <p id={Style.login_detailsText}>Sign in by filling your administrator login details below</p>
        </div>

        <form action=""  onSubmit={handleSubmit}>

          <div id={Style.inputDiv}>

            <Input
              placeholder={"account@email.com"}
              label={"Email"}
              name="email"
              value={signIn.email}
              error={validation.email}
              onChange={Details}
               />

            <Input
              placeholder={"Password"}
              label={"Password"}
              name="password"
              value={signIn.password}
              error={validation.password}
              onChange={Details} />
          </div>

          <div id={Style.checkbox_passwordDiv}>
         
            <p id={Style.Stay_signedIn}> <input type="checkbox" name="" id="" /> Stay Signed In</p>

            <p id={Style.forget_passwordText}>Forgot Password?</p>

          </div>

          {/* <Link to={"/dashboard"}> */}
          {
            window.innerWidth < 480 ? <div id={Style.btnDiv}>
             <button type="submit" id={Style.SigninBtn}> Sign In </button> </ div>: <div id={Style.btnDiv}>
              <Button type={"submit"} text={"Sign In"} />
            </div>
          }
            
          {/* </Link> */}

        </form>
      </div>
    </div >
  )
}

export default Admin_SignIn