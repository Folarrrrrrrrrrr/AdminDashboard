import React from 'react'
import Style from '../total_players/Total_Players.module.css'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import InputField from '../../../../components/input/InputField'
import Header from '../../../../components/header/Header'
import search from '../../../../assets/svg/Search.svg'


const Total_Players = () => {
    return (
        <div id={Style.Total_Player_mainDiv}>
            <Header
                headerText={"Total Players"}
                headerInfo={"Here’s an information on Total players"} />

            <div id={Style.Total_Player_wrapperDiv}>
                <div id={Style.TotalPlayer_input_FilterDiv}>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField />
                    </div>

                    <img src={filter_img} alt="" />
                </div>
                <div id={Style.Total_Player_tableDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>User ID</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Bank Detail</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>SA 123476689</td>
                            <td>johndoe@gmail.com</td>
                            <td>+2344816273888</td>
                            <td>Nigeria</td>
                            <td>
                                <div id={Style.BankDetails_Div}>
                                    <div>
                                        <p>Bank</p>
                                        <p className={Style.BankDetails_BoldText}>Access Bank</p>
                                    </div>
                                    <div>
                                        <p>Account Number</p>
                                        <p className={Style.BankDetails_BoldText}>0123456789</p>
                                    </div><div>
                                        <p>Account Name</p>
                                        <p className={Style.BankDetails_BoldText}>John Doe</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div id={Style.statusText}>Online</div>
                            </td>
                            <td><button style={{ backgroundColor: "#332D5B", border: "none", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px", height: "1.37rem" }}>Suspend Action</button></td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>SA 123476689</td>
                            <td>johndoe@gmail.com</td>
                            <td>+2344816273888</td>
                            <td>Nigeria</td>
                            <td>
                                <div id={Style.BankDetails_Div}>
                                    <div>
                                        <p>Bank</p>
                                        <p className={Style.BankDetails_BoldText}>Access Bank</p>
                                    </div>
                                    <div>
                                        <p>Account Number</p>
                                        <p className={Style.BankDetails_BoldText}>0123456789</p>
                                    </div><div>
                                        <p>Account Name</p>
                                        <p className={Style.BankDetails_BoldText}>John Doe</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div id={Style.action_field}>
                                    <div id={Style.statusText}>Online</div>
                                </div>
                            </td>
                            <td><button style={{ backgroundColor: "#332D5B", border: "none", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px", height: "1.37rem" }}>Suspend Action</button></td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Total_Players