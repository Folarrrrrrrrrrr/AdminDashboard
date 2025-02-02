import React, { useState, useEffect } from 'react'
import Style from './All_Staff.module.css'
import rise from '../../../../assets/svg/rise.svg'
import person from '../../../../assets/images/Person1.png'
import Staff_Card from '../../../../components/userStaff_Card/Staff_Card'
import InputField from '../../../../components/input/InputField'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import search from '../../../../assets/svg/Search.svg'
import Header from '../../../../components/header/Header'
import { Link } from 'react-router-dom'
import online from '../../../../assets/svg/stats_online.svg'
import offline from '../../../../assets/svg/stats_offline.svg'
import users from '../../../../assets/svg/gray_users.svg'
import Stats_Card from '../../../../components/stats_card/Stats_Card'
import AddNew_Agent from '../addNew_Agent/AddNew_Agent'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStaffs } from "../../api_detaills/GlobalStates/AllStaffs";


const All_Staff = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllStaffs());
    }, [dispatch]);

    const { AllStaffsData, AllStaffsDataLoading, AllStaffsDataError } = useSelector((state) => state.AllStaffsList);

    const staffs = AllStaffsData;    
    console.log(AllStaffsData);


    const [toggleStatsIndex, setToggleStatsIndex] = useState(0)


    const toggleStats = (index) => {
        setToggleStatsIndex(index)
    }


    // const all_Staffs = [
    //     {
    //         img: person,
    //         name: "John Doe",
    //         position: "Customer care representative",
    //         status: "Online",
    //         to: "/staffDetails"
    //     },
    //     {
    //         img: person,
    //         name: "John Doe",
    //         position: "Customer care representative",
    //         status: "Online"
    //     },
    //     {
    //         img: person,
    //         name: "John Doe",
    //         position: "Customer care representative",
    //         status: "Online"
    //     },
    //     {
    //         img: person,
    //         name: "John Doe",
    //         position: "Customer care representative",
    //         status: "Online"
    //     },
    //     {
    //         img: person,
    //         name: "John Doe",
    //         position: "Customer care representative",
    //         status: "Online"
    //     },
    //     {
    //         img: person,
    //         name: "John Doe",
    //         position: "Customer care representative",
    //         status: "Online"
    //     },

    // ]

    const staff_stats_card = [
        {
            img: rise,
            figure: AllStaffsData.staffCount,
            text: "Staff",
            to: ""

        },
        {
            img: users,
            figure: "New Staff",
            text: "Add A New Staff",
            to: ""
        },
        {
            img: online,
            figure: AllStaffsData.onlineStaff,
            text: "Online",
            to: ""
        },
        {
            img: offline,
            figure: AllStaffsData.offlineStaff,
            text: "Offline",
            to: ""
        }
    ]
    return (

        <div id={Style.All_Staff_mainDiv}>

            {/* <Header
                headerText={"All Staffs"}
                headerInfo={"Here’s an overview of all Staff"}
            /> */}
            <div id={Style.All_Staff_EntireCard_Wrapper}>

                <p className={Style.All_StaffText}>All Agents</p>
                <div id={Style.Staff_CardDiv}>
                    {
                        staff_stats_card.map((obj, index) => {
                            let colourChange = index == toggleStatsIndex ? true : false

                            return (
                                <Stats_Card
                                    key={index}
                                    img={obj.img}
                                    figure={obj.figure}
                                    text={obj.text}
                                    to={obj.to}
                                    isPurple={index == 0 ? "true" : null}
                                    isGreen={index == 1 ? "true" : null}
                                    isRed={index == 2 ? "true" : null}
                                    isBlack={index == 3 ? "true" : null}              
                                    colourChange={colourChange}
                                    onClick={() => toggleStats(index)} />
                            )
                        })
                    }
                </div>



                {
                    toggleStatsIndex !== 1 ?

                        <div>
                            <p className={Style.All_StaffText}>All Staff</p>
                            <div id={Style.input_FilterDiv}>
                                <div id={Style.searchDiv}>
                                    <img src={search} alt="" />
                                    <InputField
                                        placeholder={"Search by user ID"} />
                                </div>

                                <img src={filter_img} alt="" />
                            </div>
                        </div> : ""
                }

                {
                    toggleStatsIndex === 0 ?

                        <div id={Style.All_Staff_Card}>
                            {
                                 staffs.map((object, index) => {
                                    let statusColor = object.status === "active" ? true : false
                                    return (
                                        <Staff_Card
                                        
                                            key= {index}
                                            img={object.photo}
                                            status={object.status}
                                            name={object.fullname}
                                            position={object.designation}
                                            to={`/staffDetails/${object.email}`}
                                            statusColor={statusColor}/>
                                    )
                                })
                            }
                        </div> : toggleStatsIndex == 1 ? <AddNew_Agent/> : ""

                }
            </div>
        </div>
    )
}

export default All_Staff