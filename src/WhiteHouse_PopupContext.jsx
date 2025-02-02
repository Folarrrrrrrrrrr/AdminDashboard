import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const PopupContextHook = () => useContext(myContext)




const WhiteHouse_PopupContext = ({ children }) => {
    const [phoneState, setPhoneState] = useState({
        phone: "",
        details: ""

    })

    const updatePhoneState = (data) => {
        setPhoneState(data)
    }
    const [filterPopup, setFilterPopup] = useState(false)
    const [revenuePopup, setRevenuePopup] = useState(false)
    // const [betsPopup, setBetsPopup] = useState(false)
    const [passwordPopup, setPasswordPopup] = useState(false)
    const [PerformancePopup, setPerformancePopup] = useState(false)
    const [onlineCountPopup, setOnlineCountPopup] = useState(false)
    const [profilePopup, setProfilePopup] = useState(false)
    const [reAccessPopup, setReAccessPopup] = useState(false)
    const [confirmTrashPopup, setConfirmTrashPopup] = useState(false)
    const [confirmPendingPopup, setConfirmPendingPopup] = useState(false)
    const [approveTrashPopup, setApproveTrashPopup] = useState(false)
    const [approvePendingPopup, setApprovePendingPopup] = useState(false)
    const [signUpPopup, setSignUpPopup] = useState(false)
    const [loadingPopup, setLoadingPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false);
    const [suspendUsers, setSuspendUsers] = useState(false);
    const [suspendSuccess, setSuspendSuccess] = useState(false);
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [errorText, setErrorText] = useState("");




    const updateFilterPopup = (data) => {
        setFilterPopup(data)
    }

    const updateRevenuePopup = (data) => {
        setRevenuePopup(data)
    }

    // const updateSetBetsPopup = (data) => {
    //     setBetsPopup(data)
    // }

    const updatePasswordPopup = (data) => {
        setPasswordPopup(data)
    }
    const updatePerformancePopup = (data) => {
        setPerformancePopup(data)
    }

    const updateOnlineCountPopup = (data) => {
        setOnlineCountPopup(data)
    }

    const updateProfilePopup = (data) => {
        setProfilePopup(data)
    }

    const updateReAccessPopup = (data) => {
        setReAccessPopup(data)
    }
    const updateConfirmPendingPopup = (data) => {
        setConfirmPendingPopup(data)
    }
    const updateApprovePendingPopup = (data) => {
        setApprovePendingPopup(data)
    }
    const updateConfirmTrashPopup = (data) => {
        setConfirmTrashPopup(data)
    }
    const updateApproveTrashPopup = (data) => {
        setApproveTrashPopup(data)
    }
    const updateSignUpPopup = (data) => {
        setSignUpPopup(data)
    }

    const updateLoadingPopup = (data) => {
        setLoadingPopup(data)
    }
    const updateErrorPopup = (data) => {
        setErrorPopup(data)
    }
    const updateErrorText = (data) => {
        setErrorText(data)
    }

    const updateSuspendUserPopup = (data) => {
        setSuspendUsers(data)
    }
    const updateSuspendSuccess = (data) => {
        setSuspendSuccess(data)
    }

    const updateSignInSuccess = (data) => {
        setSignInSuccess(data)
    }



    return (
        <myContext.Provider value={{
            filterPopup,
            updateFilterPopup,
            revenuePopup,
            // updateSetBetsPopup,
            updateRevenuePopup,
            passwordPopup,
            updatePasswordPopup,
            PerformancePopup,
            updatePerformancePopup,
            onlineCountPopup,
            updateOnlineCountPopup,
            profilePopup,
            updateProfilePopup,
            reAccessPopup,
            updateReAccessPopup,
            confirmPendingPopup,
            updateConfirmPendingPopup,
            approvePendingPopup,
            updateApprovePendingPopup,
            confirmTrashPopup,
            updateConfirmTrashPopup,
            approveTrashPopup,
            updateApproveTrashPopup,
            signUpPopup,
            updateSignUpPopup,
            loadingPopup,
            updateLoadingPopup,
            errorPopup,
            updateErrorPopup,
            errorText,
            updateErrorText,
            phoneState,
            updatePhoneState,
            suspendUsers,
            updateSuspendUserPopup,
            suspendSuccess,
            updateSuspendSuccess,
            signInSuccess,
            updateSignInSuccess,
            // betsPopup
        }}>
            {children}
        </myContext.Provider>
    )
}

export default WhiteHouse_PopupContext