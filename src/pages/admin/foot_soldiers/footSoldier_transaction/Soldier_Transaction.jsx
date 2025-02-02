import React, { useState } from 'react'
import Style from './Soldier_Transaction.module.css'
import Header from '../../../../components/header/Header'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../components/input/InputField'
import search from '../../../../assets/svg/Search.svg'
import { useParams } from 'react-router-dom'
import Date_Picker from '../../../../components/date_picker/Date_Picker'

const Soldier_Transaction = () => {

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



    // let [toggleIndex, setToggleIndex] = useState(0);

    // let { indexParamsTwo } = useParams()
  
    // let paramIndex = JSON.parse(indexParamsTwo)

    // useEffect(() => {
    
    //     setToggleIndex(indexParamsTwo)
    //   })



    const arr = [

        {
            refNumber: "UA 123476689",
            date: "24 Aug, 2024",
            time: "13:24",
            amountPaid: "20000",
            paymentType: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            userOnboarded: "John Doe",
            status: "Successful"
        },
        {

            refNumber: "UA 123476689",
            date: "24 Aug, 2024",
            time: "13:24",
            amountPaid: "20000",
            paymentType: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            userOnboarded: "John Doe",
            status: "Successful"
        },
        {

            refNumber: "UA 123476689",
            date: "24 Aug, 2024",
            time: "13:24",
            amountPaid: "20000",
            paymentType: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            userOnboarded: "John Doe",
            status: "Successful"
        },
        {

            refNumber: "UA 123476689",
            date: "24 Aug, 2024",
            time: "13:24",
            amountPaid: "20000",
            paymentType: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            userOnboarded: "John Doe",
            status: "Successful"
        },
        {

            refNumber: "UA 123476689",
            date: "24 Aug, 2024",
            time: "13:24",
            amountPaid: "20000",
            paymentType: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            userOnboarded: "John Doe",
            status: "Successful"
        },
    ]

    const withdrawalArr = [

        {
            refNumber: "UA 123476689",
            time: "13:24",
            country: "Nigeria",
            coinCoverted: "430",
            amountReceived: "300",
            bankDetails: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            status: "Purchased"
        },
        {
            refNumber: "UA 123476689",
            time: "13:24",
            country: "Nigeria",
            coinCoverted: "430",
            amountReceived: "300",
            bankDetails: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            status: "Purchased"
        },
        {
            refNumber: "UA 123476689",
            time: "13:24",
            country: "Nigeria",
            coinCoverted: "430",
            amountReceived: "300",
            bankDetails: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            status: "Purchased"
        },
        {
            refNumber: "UA 123476689",
            time: "13:24",
            country: "Nigeria",
            coinCoverted: "430",
            amountReceived: "300",
            bankDetails: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            status: "Purchased"
        },
        {
            refNumber: "UA 123476689",
            time: "13:24",
            country: "Nigeria",
            coinCoverted: "430",
            amountReceived: "300",
            bankDetails: {
                bank: "Fidelity Bank",
                name: "John Doe",
                accNo: "0123456789"
            },
            status: "Purchased"
        }

    ]
    return (
        <div id={Style.Soldier_Transaction_mainDiv}>
            <Header
                headerText={"John Doe’s Transactions"}
                headerInfo={"Here’s an information on user transaction"} />

            <div id={Style.Soldier_Transaction_wrapperDiv}>

                <p id={Style.Soldier_Transaction_headerText}>John Doe's Transactions</p>
                <div id={Style.toggle_buttonDiv}>
                    <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.toggle_button}>Payments</button>
                    <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.toggle_button}>Withdrawals</button>
                </div>

                <div id={Style.InputField_Div}>

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
                </div>

                <div id={Style.Soldier_Transaction_Table_WrapperDiv}>

                    <table>
                        {
                            toggleIndex == 0 ?
                                <>
                                    <thead>
                                        <tr id={Style.headerTable}>
                                            <th>S/N</th>
                                            <th>Ref Number</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Amount Paid</th>
                                            <th>Payment Type</th>
                                            <th>User Onboarded</th>
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
                                                        <td>{obj.date}</td>
                                                        <td>{obj.time}</td>
                                                        <td>{obj.amountPaid}</td>
                                                        <td>
                                                            <div id={Style.BankDetails_Div}>
                                                                <div>
                                                                    <p>Bank</p>
                                                                    <p className={Style.BankDetails_BoldText}>{obj.paymentType.bank} </p>
                                                                </div>
                                                                <div>
                                                                    <p>Account Number</p>
                                                                    <p className={Style.BankDetails_BoldText}>{obj.paymentType.accNo}</p>
                                                                </div><div>
                                                                    <p>Account Name</p>
                                                                    <p className={Style.BankDetails_BoldText}>{obj.paymentType.name}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{obj.userOnboarded}</td>
                                                        <td><div className={Style.Status_data}>{obj.status} </div></td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </> : toggleIndex == 1 ?

                                    <>
                                        <tr id={Style.headerTable}>
                                            <th>S/N</th>
                                            <th>Ref Number</th>
                                            <th>Time</th>
                                            <th>Country</th>
                                            <th>Coin Converted</th>
                                            <th>Amount Received</th>
                                            <th>Bank Details</th>
                                            <th>Status</th>
                                        </tr>

                                        <tbody>
                                            {
                                                withdrawalArr.map((obj, index) => {

                                                    return (

                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{obj.refNumber}</td>
                                                            <td>{obj.time}</td>
                                                            <td>{obj.country}</td>
                                                            <td>{obj.coinCoverted}</td>
                                                            <td>{obj.amountReceived}</td>
                                                            <td>
                                                                <div id={Style.BankDetails_Div}>
                                                                    <div>
                                                                        <p>Bank</p>
                                                                        <p className={Style.BankDetails_BoldText}>{obj.bankDetails.bank} </p>
                                                                    </div>
                                                                    <div>
                                                                        <p>Account Number</p>
                                                                        <p className={Style.BankDetails_BoldText}>{obj.bankDetails.accNo}</p>
                                                                    </div><div>
                                                                        <p>Account Name</p>
                                                                        <p className={Style.BankDetails_BoldText}>{obj.bankDetails.name}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><div className={Style.Status_data}>{obj.status}</div></td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </> : ""
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Soldier_Transaction