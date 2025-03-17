import React, { useEffect, useState } from 'react'
import Style from '../all_users/All_Users.module.css'
import person from '../../../../assets/images/Person1.png'
import Header from '../../../../components/header/Header'
import { Link } from 'react-router-dom'
import AllUsers_com from '../../../../components/allUsers_com/AllUsers_com'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'
import { getAllUsersProvider } from '../../api_detaills/provider/user_provider'
import LoadingScreen from '../../../../components/loader/LoadingSreen'




const All_Users = () => {

    // Extracting functions from PopupContextHook for error handling
    const { updateErrorText, updateErrorPopup } = PopupContextHook()
    const [loading, setLoading ]= useState(true);
    // State to hold user data
    const [users, setUsers] = useState({
        allUsers: [],
        subscribedUsers: [],
        unsubscribedUsers: []
    })

    // Effect to fetch all users when the component mounts
    useEffect(() => {

        getAllUsersProvider({

            updateUsers: (data) => {
                // Update the users state with the fetched data
                setUsers({
                    allUsers: data.allUsers,
                    subscribedUsers: data.subscribedUsers,
                    unsubscribedUsers: data.unsubscribedUsers
                })
            },
            updateErrorPopup, // Function to update error popup
            updateErrorText // Function to update error text
        })
    }, []) // Empty dependency array means this runs once on mount

    useEffect(()=>{
          setTimeout(()=> users ? setLoading(false): setLoading(true), 3000)
        }, [])

    return (
        loading ? <LoadingScreen/> : 
        <div id={Style.All_Users_mainDiv}>

            <Header
                headerText={"All Users"}
                headerInfo={"Here’s an information on all Users"}
            />

            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>
                    <Link to={"/suspendedAccounts"}>
                        <button id={Style.accounts_btn}>Suspended Accounts</button>
                    </Link>
                </div>

                {/* component AllUsers*/}
                
                <div id={Style.AllUsers_com_Div}>
                    <AllUsers_com arr={users} />
                </div>
            </div>
        </div>
    )
}

export default All_Users