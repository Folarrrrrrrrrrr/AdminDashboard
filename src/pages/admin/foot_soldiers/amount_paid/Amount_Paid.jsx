import React, { useEffect, useState } from 'react'
import Style from './Amount_Paid.module.css'
import Header from '../../../../components/header/Header'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../components/input/InputField'
import search from '../../../../assets/svg/Search.svg'
import filter from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import RevenueBarChat from '../../../../components/chart/CircularGraph'
import { useDispatch, useSelector } from "react-redux";
import { fetchFootSolidersPayments } from "../../api_detaills/GlobalStates/footSoldiersPayment";


const Amount_Paid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFootSolidersPayments());
  }, [dispatch]);
        
  const { footSoldierPaymentsData, footSoldierPaymentsloading, footSoldierPaymentserror } = useSelector((state) => state.footSoldiersPayment);

  console.log(footSoldierPaymentsData);
    const footSoldiersDailyRevenueTarget= 5000000
    const footSoldiersWeeklyRevenueTarget = 50000000
    const footSoldiersMonthlyRevenueTarget = 50000000
    const footSoldiersYearlyRevenueTarget = 5000000000
const footSoldiersDailyRevenue = [500, 150000, 30050, 40001, 50, 50000, 200000]
const footSoldiersYearlyRevenue = [500, 150000, 500000, 100000000 , 5000, 30050, 40001, 50, 50000, 200000]
  let footSoldiersPayments= footSoldierPaymentsData; 
    return (
        <div id={Style.Amount_Paid_mainDiv}>
            <Header
                headerText={"Amount Paid for Foot Soldiers"}
                headerInfo={"Here’s an information on all amounts paid to Foot Soldiers"} />

            <div id={Style.Amount_Paid_wrapperDiv}>
                <div id={Style.Revenue_wrapperDiv}>
                                   
                    <div className={Style.Revenue_earningDiv}>

                        <p className={Style.earningText}>Daily Payments</p>
                        <p className={Style.priceText}>$23,000</p>

                        {/* <div id={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}>
                                
                                <div id={Style.progressFill}></div>
                            </div>
                            <p id={Style.Revenue_percentText}>45%</p>
                        </div> */}
                        <RevenueBarChat revenues={footSoldiersDailyRevenue} target={footSoldiersDailyRevenueTarget} interval='day' />
                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Revenue_earningDiv}>

                        <p className={Style.earningText}>Weekly Payments</p>
                        <p className={Style.priceText}>$23,000</p>

                        {/* <div id={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}></div>
                            <p id={Style.Revenue_percentText}>45%</p>
                        </div> */}
                        <RevenueBarChat revenues={footSoldiersDailyRevenue} target={footSoldiersWeeklyRevenueTarget} interval='week' />
                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Revenue_earningDiv}>
                        <p className={Style.earningText}>Monthly Payments</p>
                        <p className={Style.priceText}>$23,000</p>

                        {/* <div id={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}></div>
                            <p id={Style.Revenue_percentText}>45%</p>
                        </div> */}
                        <RevenueBarChat revenues={footSoldiersDailyRevenue} target={footSoldiersMonthlyRevenueTarget} interval='month' />

                        <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                            watching to find out more</p>
                    </div>

                    <div className={Style.Revenue_earningDiv}>

                        <p className={Style.earningText}>Yearly Payments</p>
                        <p className={Style.priceText}>$23,000</p>

                        {/* <div id={Style.Revenue_progressDiv}>
                            <div className={Style.Revenue_progressBar}></div>
                            <p id={Style.Revenue_percentText}>45%</p>
                        </div> */}

                        <RevenueBarChat revenues={footSoldiersYearlyRevenue} target={footSoldiersYearlyRevenueTarget} interval='year' />
                        
                        <p className={Style.Revenue_infoText}>
                            70% more earning than last month, keep watching to find out more
                        </p>
                    </div>
                </div>

                <div id={Style.Amount_Paid_headerDiv}>
                    <p id={Style.Amount_Paid_headerText}>Payments</p>
                    <div id={Style.Amount_Paid_input_FilterDiv}>
                        <p id={ window.innerWidth < 480 ? Style.dateText : null}>3rd October, 2024 <img src={arrow_down} alt="" /></p>

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

                <div id={Style.Amount_Paid_table_WrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Ref Number</th>
                            <th>Date</th>
                            {/* <th>Time</th> */}
                            <th>Foot Soldier</th>
                            <th>User Onboarded</th>
                            <th>Amount Paid</th>
                            <th>Payment Type</th>
                            <th>Status</th>
                        </tr>

                        <tbody>
                            
                            {/* <tr>
                                <td>1</td>
                                <td>UA 123476689</td>
                                <td>23 Aug, 2024</td>
                                <td>14:55</td>
                                <td>John Doe</td>
                                <td>John Doe</td>
                                <td>WHC 500</td>
                                <td>WH Agent Account</td>
                                <td><div id={Style.status_td}>Successful</div></td>
                            </tr> */}
                            {footSoldierPaymentsData.map((payments, index) =>{
                                return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{payments.refNumber}</td>
                                    <td>{payments.dateTime}</td>
                                    <td>{payments.footSoldier}</td>
                                    <td>{payments.userOnboarded}</td>
                                    <td>{payments.amountPaid}</td>
                                    <td>{payments.paymentType}</td>
                                    <td>{payments.successful}</td>
                                </tr>
                                )
                            })}
                                    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Amount_Paid