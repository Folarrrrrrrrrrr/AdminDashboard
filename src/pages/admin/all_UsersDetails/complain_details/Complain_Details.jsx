import React from 'react'
import Style from './Complain_Details.module.css'
import Header from '../../../../components/header/Header'
import person from '../../../../assets/images/Person1.png'
import Button from '../../../../components/button/Button'
import smiley from '../../../../assets/svg/gray_smiley.svg'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'
import Progress_Bar from '../../../../components/progress_bar/Progress_Bar'






const Complain_Details = () => {

    const { updateReAccessPopup } = PopupContextHook()

    const reAccess = () => {
        updateReAccessPopup(true)
    }

    const arr = [

        {

            date: "8/7/2024",
            queryCategory: "User",
            headline: "Lorem ipsum dolo",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pendin",
            action: "Review"
        }
    ]

    const progress = [

        {
            text: "Prompt Response",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Prompt Response",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Prompt Response",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Prompt Response",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        }
    ]


    return (
        <div id={Style.Complain_Details_mainDiv}>
            <Header
                headerText={"Report Details"}
                headerInfo={"Here is a detailed information on the complain"} />

            <div id={Style.Complain_Details_wrapperDiv}>


                <div>

                    <p className={Style.Personal_Info_headerText}>Report Details</p>

                    <div className={Style.Personal_Info_tableDiv}>

                        <table>

                            <thead>

                                {
                                    arr[0].status !== "Pending" ?

                                        <tr id={Style.headerTable}>
                                            <th>Date</th>
                                            <th>Query Category</th>
                                            <th>Headline</th>
                                            <th>Report</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr> : ""
                                }

                                {
                                    arr[0].status === "Pending" ?
                                        <tr id={Style.headerTable}>
                                            <th>Date</th>
                                            <th>Query Category</th>
                                            <th>Headline</th>
                                            <th>Query</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr> : ""
                                }

                            </thead>

                            <tbody>

                                {
                                    // arr[0].status === "Pending" ?

                                    arr.map((obj) => {

                                        let color = obj.status === "Pending" ? true : false

                                        return (
                                            <tr id={Style.Personal_Info_tr}>
                                                <td>{obj.date}</td>
                                                <td id={Style.headlineText}>{obj.queryCategory}</td>
                                                <td id={Style.headlineText}>{obj.headline}</td>
                                                <td>
                                                    <div className={Style.ReportDiv}>
                                                        <p>{obj.query}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id={Style.statusText} style={{ color: color ? "#FC9E2F" : "#31C364", backgroundColor: color ? "#fc9e2f33" : "#31c36433" }}>{obj.status}</div>
                                                </td>
                                                <td>
                                                    <button onClick={reAccess} style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.1rem", borderRadius: "8px", height: "1.37rem" }}>
                                                        {obj.action}
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    // : ""
                                }


                            </tbody>

                        </table>
                    </div>
                </div>

                {
                    arr[0].status !== "Pending" ?

                        <>
                            <div className={Style.line}></div>

                            <div>

                                <p className={Style.Personal_Info_headerText}>Review Details</p>

                                <div id={Style.Complain_Details_tableDiv_two} className={Style.Personal_Info_tableDiv}>

                                    <table>
                                        <tr id={Style.headerTable}>
                                            <th>Date</th>
                                            <th>Reviewed By</th>
                                            <th>Review</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr>


                                        <tr id={Style.Personal_Info_tr}>
                                            <td>8/7/2024</td>
                                            <td>
                                                <div id={Style.Staff_Card_WrapperDiv}>

                                                    <img src={person} alt="" />

                                                    <div id={Style.Staff_Card_textDiv}>
                                                        <p className={Style.Staff_Card_nameText}>John Doe</p>
                                                        <p className={Style.Staff_Card_careRep}>Customer Care Representative</p>
                                                        <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>Online</p>

                                                        <Button
                                                            text={"View More Details"} />


                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={Style.ReportDiv}>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div id={Style.statusText}>Reviewed</div>
                                            </td>
                                            <td>
                                                <button onClick={reAccess} style={{ backgroundColor: "#075070", border: "none", color: "#FFFFFF", fontSize: "0.7rem", borderRadius: "8px", height: "1.37rem" }}>
                                                    Reaccess
                                                </button>
                                            </td>
                                        </tr>

                                    </table>
                                </div>

                            </div>

                            <div className={Style.line}></div>

                            <div>

                                <p className={Style.Personal_Info_headerText}>User Satisfaction</p>


                                <div id={Style.Progress_BarDiv}>
                                    {
                                        progress.map((obj) => {

                                            return (
                                                <Progress_Bar
                                                    text={obj.text}
                                                    percent={obj.percent}
                                                    infoText={obj.infoText} />
                                            )
                                        })
                                    }
                                </div>

                            </div>

                        </> : ""
                }
            </div>
        </div>
    )
}

export default Complain_Details