import React from 'react'
import Style from '../department/Department.module.css'
import Header from '../../../../components/header/Header'
import Total_Card from '../../../../components/total_Card/Total_Card'
import workers from '../../../../assets/images/workers.png'
import CCTeam from '../../../../assets/images/maleC-C.jpg'
import TechSuppTeam from '../../../../assets/images/maleC-C.jpg'
import { Link } from 'react-router-dom'


const Department = () => {

    const total_Card4 = [
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'All Staff',
            divText: 'View all',
            to: '/allStaffs',
            price: '200'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'All Departments',
            divText: 'View all',
            price: '200'
        },
        {
            image1: './src/assets/svg/Work.svg',
            text: 'Online',
            divText: 'View all',
            price: '180'
        },
        {
            image1: './src/assets/svg/Activity.svg',
            text: 'offline',
            divText: 'View all',
            price: '200'
        }
    ]
    return (
        <div id={Style.Department_mainDiv}>
            <Header
                headerText={"Department"}
                headerInfo={"Here’s an overview of departments"} />
            <div id={Style.Department_wrapperDiv}>
                <p id={Style.Department_summaryText}>Customer Care Summary</p>
                <div id={Style.Total_Card_mapDiv}>
                    {
                        total_Card4.map((object) => {
                            return (
                                <Total_Card
                                    image1={object.image1}
                                    text={object.text}
                                    divText={object.divText}
                                    price={object.price}
                                    to={object.to}
                                />
                            )
                        })
                    }
                </div>
                <div id={Style.Department_details_wrapperDiv}>
                    <div id={Style.Department_detailsDiv}>
                        <img src={CCTeam} alt="" />
                        <p className={Style.Department_HeaderText}>Customer Support</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <Link to={"/customer_support"}>
                            <button>View Details</button>
                        </Link>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={workers} alt="" />
                        <p className={Style.Department_HeaderText}>Account Management</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={TechSuppTeam} alt="" />
                        <p className={Style.Department_HeaderText}>Technical Support</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={workers} alt="" />
                        <p className={Style.Department_HeaderText}>Payment and Billing</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={workers} alt="" />
                        <p className={Style.Department_HeaderText}>Risk and Fraud Management</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={workers} alt="" />
                        <p className={Style.Department_HeaderText}> Dispute Resolution </p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={workers} alt="" />
                        <p className={Style.Department_HeaderText}>VIP Support</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>b
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                    <div id={Style.Department_detailsDiv}>
                        <img src={workers} alt="" />
                        <p className={Style.Department_HeaderText}>Social Media Support</p>
                        <div id={Style.Department_TextDiv}>
                            <p>Staff</p>
                            <p className={Style.Department_staffNumber}>40</p>
                        </div>
                        <button>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department