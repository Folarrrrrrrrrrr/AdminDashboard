import React from 'react'
import Style from './MainLayout.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'
import { PopupContextHook } from '../WhiteHouse_PopupContext'
import Error from '../popUps/error/Error'
import Loading from '../popUps/loading/Loading'
import Suspend_Reason from '../popUps/suspendReason/Suspend_Reason'
import SuspendUser_Success from '../popUps/suspendReason/sucess/SuspendUser_Success'
import Profile_Success from "../popUps/profile/Profile_Success"
import SignIn_Success from '../popUps/signIn_success/SignIn_Success'

// import Revenue_Details from '../pages/WhiteHouse/admin/foot_soldiers/revenue_details/Revenue_Details'
// import ForgotPassword from '../popUps/whitehouse/forgotPassword/ForgotPassword'
// import Online_PlayersCount from '../pages/WhiteHouse/admin/placeBet/totalOnline_players/online_playersCount/Online_PlayersCount'

// import ReAccess_Query from "../popUps/whitehouse/reviewQuery/ReAccess_Query"
// import Confirm_Pending from "../popUps/whitehouse/pending_trash/Confirm_Pending"
// import Confirm_Trash from "../popUps/whitehouse/pending_trash/Confirm_Trash"
// import Approve_Pending from '../popUps/whitehouse/pending_trash/approve/Approve_Pending'
// import Approve_Trash from '../popUps/whitehouse/pending_trash/approve/Approve_Trash'
// import NewAgent_Success from '../popUps/whitehouse/customerCare_signUp/NewAgent_Success'
// import Loading from '../popUps/loading/Loading'





const MainLayout = () => {

  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  const { errorPopup, loadingPopup, suspendUsers, suspendSuccess, profilePopup, signInSuccess, revenuePopup, passwordPopup, onlineCountPopup, reAccessPopup, confirmPendingPopup, approvePendingPopup, approveTrashPopup,
    confirmTrashPopup, signUpPopup } = PopupContextHook()




  return (

    <div id={Style.wrapper}>

      {showNavbar && <NavBar id={Style.NavBar} />}

      {loadingPopup && <Loading />}

      {errorPopup && <Error />}

      {suspendUsers && <Suspend_Reason />}

      {suspendSuccess && <SuspendUser_Success />}

      {profilePopup && <Profile_Success />}

      {signInSuccess && <SignIn_Success/>}

      {/* {revenuePopup && <Revenue_Details />}

      {passwordPopup && <ForgotPassword />}

      {onlineCountPopup && <Online_PlayersCount />}

     

      {reAccessPopup && <ReAccess_Query />}

      {confirmPendingPopup && <Confirm_Pending />}

      {approvePendingPopup && <Approve_Pending />}

      {confirmTrashPopup && <Confirm_Trash />}

      {approveTrashPopup && <Approve_Trash />}

      {signUpPopup && <NewAgent_Success />}

      {loadingPopup && <Loading/>} */}


      <div id={Style.generalBody}><Outlet /></div>
    </div>
  )
}

export default MainLayout