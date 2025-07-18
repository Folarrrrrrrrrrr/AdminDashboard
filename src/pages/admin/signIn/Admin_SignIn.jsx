import React, { useState, useEffect } from 'react'
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
import { loginUser } from '../api_detaills/GlobalStates/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion";
import logo from '../../../assets/images/S_icon.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Admin_SignIn = () => {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginLoading, setloginLoading] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);


  const { updateLoadingPopup, updateErrorText, updateErrorPopup,} = PopupContextHook();
  const user = useSelector((state) => state.auth.user);
  const {loading, error} = useSelector((state) => state.auth);
  console.log(loading);
  console.log(error);
  
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

  // const LoginSubmit = async () => {

  //   //The request Body
    
  //   let body = signIn;
  //   dispatch(login(signIn))


  //   // Set a 6-second timeout before calling the login provider
  //   // setTimeout(() => {
  //     //This initiates the provider that handles the login API.
  //     login_provider(body, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup );
  // // }, 1000); // 6000ms = 6 seconds

  // }

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
      dispatch(loginUser({ email:signIn.email, password:signIn.password }));
    }
      

    // LoginSubmit()

    console.log(signIn.email, signIn.password)
  }
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
    if (token) {
      navigate("/dashboard"); // Prevent login if already authenticated
    }
  }, [token, navigate]);
 
  useEffect(() => {
    if (error) {
      setErrorPopup(true);

      const timer = setTimeout(() => {
        setErrorPopup(false);
      }, 5000); // Close popup after 5 seconds

      return () => clearTimeout(timer); // Clear timeout if error changes quickly
    }
  }, [error]);


  useEffect(() => {
      setTimeout(
        () =>
          loading ? setloginLoading(false) : setloginLoading(true),
        6000
      );
    }, [10000]);

  return (
    <>
     {loading ? (
        <div className={Style.loadingContainer}>
        <motion.img
            src={logo}
            alt="Loading Object"
            className="speeding-object"
            initial={{
            // x: "-100vw",
            scale: 0.5,
            }} // Starts small off-screen
            animate={{
            // x: ["-100vw", "50vw", "100vw"], // Moves from left -> center -> right
            scale: [0.5, 1.2, 0.5], // Scales up in center, back down on exit
            }}
            transition={{
            times: [0, 0.5, 1],
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
            }}
        />
        </div>
    ) : null}
    
        {error && errorPopup && (
          <motion.div
            className="errorContainer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button id="closeErrorBtn" onClick={() => setErrorPopup(false)}>&times;</button>
            <DotLottieReact
              src="https://lottie.host/75c1ee26-7356-43d6-983b-f0c3e9ad86ad/H1VFgjJyzy.lottie"
              loop
              autoplay
            />
            <p className="errorText"  style={{textAlign:"center"}}>
              {error}
              <p className="signOutBtn" onClick={() => setErrorPopup(false)}>Try Again</p>
            </p>
          </motion.div>
        )}

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
              <Button type={"submit"} text={loading===true? "signing in...": "Sign In"} />
            </div>
          }
            
          {/* </Link> */}

        </form>
      </div>
    </div >
    </>
  )
}

export default Admin_SignIn