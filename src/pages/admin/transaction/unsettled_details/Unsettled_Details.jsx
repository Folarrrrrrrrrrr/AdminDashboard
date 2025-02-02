import React from 'react'
import Style from '../unsettled_details/Unsettled_Details.module.css'
import avatar from '../../../../assets/images/avatar.png'
import Header from '../../../../components/header/Header'


const Unsettled_Details = () => {

    const unsettled = [
        {
            user: {
                id: "UA 123476689",
                img: avatar,
                name: "Lighty"
            },
            RefNo: "UA 123476689",
            time: "13:45",
            date: "Oct 4",
            player: avatar,
            country: "Nigeria",
            amount: "20000",
            balance: "200",
            status: "Used",
            action: "View Details"
        },
    ]

    return (

        <div id={Style.Unsettled_Details_mainDiv}>

            <Header
                headerText={"Transactions"}
                headerInfo={"Here is a list of all transactions"} />

            <div id={Style.Unsettled_Details_wrapperDiv}>

                <p className={Style.headerText}>Unsettled Game</p>

                <div id={Style.Unsettled_Details_tableWrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>User</th>
                                <th>Game</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Players</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th>Balance</th>
                            </tr>
                        </thead>

                        <tbody>
                            {         //Unsettled



                                unsettled.map((user, index) => {
                                    let bGcolor = user.status == "Used" ? "#00800033" : ""
                                    let color = user.status == "Used" ? "green" : ""

                                    // let lost = user.status == "Lost" ? true : false
                                    return (
                                        <tr>
                                            <td>
                                                <div>
                                                    <p>{user.user.id}</p>
                                                    <p className={Style.userDetail_Text}><img src={user.user.img} alt="" /> {user.user.name}</p>
                                                </div>
                                            </td>
                                            <td>{user.RefNo}</td>
                                            <td>{user.date}</td>
                                            <td>{user.time}</td>
                                            <td>
                                                <div id={Style.players_imgDiv}>
                                                    <img src={user.player} alt="" />
                                                    <img src={user.player} alt="" />
                                                    <img src={user.player} alt="" />
                                                    <img src={user.player} alt="" />
                                                </div>
                                            </td>
                                            <td>{user.amount}</td>
                                            <td>
                                                <div id={Style.statusText} style={{ backgroundColor: bGcolor, color: color }}>{user.status}</div>
                                            </td>
                                            <td>{user.balance}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

                <p className={Style.headerText}>Games played with unsettled bet</p>


                <div id={Style.Unsettled_Details_tableWrapperDiv}>
                    <table>
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>User</th>
                                <th>Game</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Players</th>
                                <th>Amount Used</th>
                                <th>Balance</th>
                            </tr>
                        </thead>

                        <tbody>
                            {         //Unsettled



                                unsettled.map((user, index) => {

                                    return (
                                        <tr>
                                            <td>
                                                <div>
                                                    <p>{user.user.id}</p>
                                                    <p className={Style.userDetail_Text}><img src={user.user.img} alt="" /> {user.user.name}</p>
                                                </div>
                                            </td>
                                            <td>{user.RefNo}</td>
                                            <td>{user.date}</td>
                                            <td>{user.time}</td>
                                            <td>
                                                <div id={Style.players_imgDiv}>
                                                    <img src={user.player} alt="" />
                                                    <img src={user.player} alt="" />
                                                    <img src={user.player} alt="" />
                                                    <img src={user.player} alt="" />
                                                </div>
                                            </td>
                                            <td>{user.amount}</td>
                                            <td>{user.balance}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default Unsettled_Details