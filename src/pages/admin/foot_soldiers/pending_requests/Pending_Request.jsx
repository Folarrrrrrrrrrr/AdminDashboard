import React from 'react'
import Style from './Pending_Request.module.css'
import Header from '../../../../components/header/Header'
import gray_delete from '../../../../assets/svg/gray_delete.svg'
import red_delete from '../../../../assets/svg/red_delete.svg'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'

const Pending_Request = () => {

    const {updateConfirmPendingPopup, updateConfirmTrashPopup} = PopupContextHook()

    const confirm =()=>{
        updateConfirmPendingPopup(true)
    }

    const approve =()=>{
        updateConfirmTrashPopup(true)
    }

    const arr = [

        {
            fullName: "John Doe",
            email: "johndoe@gmail.com",
            phone: "+2344816273888",
            nationality: "Nigerian",
            roo: "Ikeja",
            action: "Approve"
        },
        {
            fullName: "John Doe",
            email: "johndoe@gmail.com",
            phone: "+2344816273888",
            nationality: "Nigerian",
            roo: "Ikeja",
            action: "Approve"
        },
        {
            fullName: "John Doe",
            email: "johndoe@gmail.com",
            phone: "+2344816273888",
            nationality: "Nigerian",
            roo: "Ikeja",
            action: "Approve"
        }
    ]
    return (
        <div id={Style.Pending_Request_mainDiv}>
            <Header
                headerText={"Pending Requests"}
                headerInfo={"Here’s an information on all Pending Requests"} />

            <div id={Style.Pending_Request_wrapperDiv}>
                <div id={Style.Pending_Request_headerDiv}>
                    <p id={Style.Pending_Request_HeaderText}>Pending Requests lists <span>(2000)</span></p>
                    <Link to={"/trash"}><p id={Style.trashText}><img src={gray_delete} alt="" /> Trash</p></Link>
                </div>

                <div id={Style.Pending_Request_table_wrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Nationality</th>
                            <th>Region of Operation</th>
                            <th>Action</th>
                        </tr>

                        <tbody>

                            {
                                arr.map((obj, index) => {

                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{obj.fullName}</td>
                                            <td>{obj.email}</td>
                                            <td>{obj.phone}</td>
                                            <td>{obj.nationality}</td>
                                            <td>{obj.roo}</td>
                                            <td>
                                                <div className={Style.ActionDiv}>

                                                    <button onClick={confirm} className={Style.Action_button}>{obj.action}</button> 

                                                    <img onClick={approve} src={red_delete} alt="" />
                                                </div>
                                            </td>
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

export default Pending_Request