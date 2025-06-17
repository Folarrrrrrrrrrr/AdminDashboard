import React, { useEffect, useState } from 'react'
import Style from '../all_users/All_Users.module.css'
import person from '../../../../assets/images/Person1.png'
import Header from '../../../../components/header/Header'
import { Link } from 'react-router-dom'
import AllUsers_com from '../../../../components/allUsers_com/AllUsers_com'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'
import { getAllUsersProvider } from '../../api_detaills/provider/user_provider'
import logo from "../../../../assets/images/S_icon.png"
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { fetchAllUsers } from "../../api_detaills/GlobalStates/AllUsers";
import Unauthorized from '../../../../components/errorPopup/unauthorised/Unauthorized'

const All_Users = () => {

    const dispatch = useDispatch();
    
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
    // Extracting functions from PopupContextHook for error handling
    const { updateErrorText, updateErrorPopup } = PopupContextHook()
    const [loading, setLoading ]= useState(true);
      const [erorPopup, setErrorPopup] = useState(true);
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
            // updateErrorPopup, // Function to update error popup
            // updateErrorText // Function to update error text
        })
    }, []) // Empty dependency array means this runs once on mount
    // console.log(updateErrorText);

  //   const [page, setPage] = useState(1);
  // const limit = 10;

  const { AllUsersData, AllUsersDataLoading, AllUsersDataError } = useSelector(
    (state) => state.AllUsers // Make sure the reducer is mounted as `allUsers`
  );

  useEffect(() => {
    dispatch(fetchAllUsers({ page:currentPage, limit }));
  }, [dispatch, currentPage]);
  const totalPages = Math.ceil((AllUsersData?.totalCount || 0) / limit);
  const PaginatedUsers = AllUsersData?.users || [];

    // useEffect(() => {
    //     dispatch(fetchAllUsers());
    //     // dispatch(fetchDiceBetList());
    //   }, [dispatch]);

      
  // const { AllUsersData, AllUsersDataLoading, AllUsersDataError } =  useSelector((state) => state.AllUsers);
      console.log(PaginatedUsers);
      
    useEffect(()=>{
          setTimeout(()=> users ? setLoading(false): setLoading(true), 3000)
        }, [])
        console.log(users);
        
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
        <div id={Style.All_Users_mainDiv}>

          <Header
              headerText={"All Users"}
              headerInfo={"Here’s an information on all Users"}
          />
        {/* This is 401 animation */}
        {
         // {/* This is 404 animation */}
                   erorPopup && AllUsersDataError?.includes('Failed to fetch')?
                   <Unauthorized
                     animationLink="https://lottie.host/75c1ee26-7356-43d6-983b-f0c3e9ad86ad/H1VFgjJyzy.lottie" 
                     errorResponse={AllUsersDataError} 
                     extraErrorDetails=" Not Found"
                     closePopup={()=> setErrorPopup(false)}
                     // actionText=""
                     // errorAction={()=>SignOut()}
                     />
                   : 
                 // {/* This is 401 animation */}
                   erorPopup && AllUsersDataError?.includes('401')?
                   <Unauthorized
                    animationLink="https://lottie.host/75c1ee26-7356-43d6-983b-f0c3e9ad86ad/H1VFgjJyzy.lottie" 
                     errorResponse={AllUsersDataError} 
                     extraErrorDetails=""
                     actionText="Sign Out"
                     errorAction={()=>SignOut()}
                     closePopup={()=> setErrorPopup(false)}
                     />
                     :
                     <></>
        }
            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>
                    <Link to={"/suspendedAccounts"}>
                        <button id={Style.accounts_btn}>Suspended Accounts</button>
                    </Link>
                </div>

                {/* component AllUsers*/}
                
                <div id={Style.AllUsers_com_Div}>
                    <AllUsers_com 
                      arr={PaginatedUsers}
                      currentPage={currentPage}
                      prevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      nextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      setCurrentPage={setCurrentPage}
                      totalCount={AllUsersData?.totalCount || 0} 
                      />
                </div>
            </div>
        </div>
        </>
    )
}

export default All_Users