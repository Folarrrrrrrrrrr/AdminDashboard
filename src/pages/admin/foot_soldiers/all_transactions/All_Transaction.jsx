import React, { useState } from 'react'
import Style from '../all_transactions/All_Transaction.module.css'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import filter from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import Header from '../../../../components/header/Header'
import Date_Picker from '../../../../components/date_picker/Date_Picker'
import { motion } from 'framer-motion';




const All_Transaction = () => {

    const [toggleIndex, setToggleIndex] = useState(0)

    const toggle = (index) => {
        setToggleIndex(index)
    }


    const [selectedDate, setSelectedDate] = useState(new Date());  // Initialize with current date
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);  // Initialize with current date



    const handleDateChange = (newDate) => {

        setSelectedDate(newDate);  // Update selectedDate when newDate is received
        
        console.log("New selected date:", newDate);  // This should log the new date when clicked
        
        setIsCalendarOpen(false)
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(true)
    }


    


    const arr = [

        {
            refNumber: "UA 123476689",
            timeStamp: {
                date: "24 Aug, 2024",
                time: "13:53"
            },
            paymentType: "WHAgent",
            amountPaid: "WHC 500",
            receipt: "John Doe",
            account: "WHAgent Account",
            status: "Successful"
        },
        {
            refNumber: "UA 123476689",
            timeStamp: {
                date: "24 Aug, 2024",
                time: "13:53"
            },
            paymentType: "WHAgent",
            amountPaid: "WHC 500",
            receipt: "John Doe",
            account: "WHAgent Account",
            status: "Successful"
        },
        {
            refNumber: "UA 123476689",
            timeStamp: {
                date: "24 Aug, 2024",
                time: "13:53"
            },
            paymentType: "WHAgent",
            amountPaid: "WHC 500",
            receipt: "John Doe",
            account: "WHAgent Account",
            status: "Successful"
        },
    ]

    const pageTransition = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
    };
    return (
        
        <motion.div
            variants={pageTransition}
            inital='initial'
            animate='animate'
            exit='exit'
        >

        <div id={Style.All_Transaction_mainDiv} >
            <Header
                headerText={"Transactions"}
                headerInfo={"Here’s an information on all Foot Soliders transaction"} />
            <div id={Style.All_Transaction_WrapperDiv}>
                <div id={Style.All_Transaction_headerDiv}>
                    <div id={Style.btnDiv}>
                        <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>All</button>
                        <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>WHAgent</button>
                        <button onClick={() => toggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Transaction_button}>Onboarding</button>
                    </div>

                    <div id={Style.Amount_Paid_input_FilterDiv}>
                        
                    <span>{selectedDate.toDateString()} <img src={arrow_down} onClick={toggleCalendar} alt="" /></span>
                    {
                            isCalendarOpen && (

                                <div id={Style.calendar_popup}>
                                    <Date_Picker onDateChange={handleDateChange} />
                                </div>
                            )
                        }

                      
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <div id={Style.imgDiv}>
                            <img src={filter} alt="" />
                            <img src={download} alt="" />
                        </div>
                    </div>
                </div>

                <div id={Style.All_Transaction_table_WrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>Ref Number</th>
                                <th>Time Stamp</th>
                                <th>Payment Type</th>
                                <th>Amount Paid</th>
                                <th>Recipient</th>
                                <th>Account</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arr.map((obj, index) => {

                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{obj.refNumber}</td>
                                            <td><div>
                                                <p>{obj.timeStamp.date}</p>
                                                <p>{obj.timeStamp.time}</p>
                                            </div>
                                            </td>
                                            <td>{obj.paymentType}</td>
                                            <td>{obj.amountPaid}</td>
                                            <td>{obj.receipt}</td>
                                            <td>{obj.account}</td>
                                            <td><div id={Style.status_td}>{obj.status}</div></td>
                                        </tr>
                                    )
                                })
                            }


  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </motion.div>
    )
}

export default All_Transaction