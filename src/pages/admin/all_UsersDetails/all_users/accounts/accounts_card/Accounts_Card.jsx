import React from 'react'
import Style from "./Accounts_Card.module.css"
import { Link } from 'react-router-dom'
import Button from '../../../../../../components/button/Button'



const Accounts_Card = (props) => {

    const { img, online, position, name, status, to, BG, statusColor, verified, } = props


    return (

        <div id={Style.Staff_Card_mainDiv}>

            <div id={Style.Staff_Card_WrapperDiv}>
                <div id={Style.onboardedText}>
                    <p style={{ backgroundColor: BG ? "#FC9E2F" : "#ED2F2F" }}>{status}</p>
                </div>



                <div id={Style.Staff_Card_textDiv}>

                    <div id={Style.verified_img_div}>

                        {verified && <img src={verified} alt="" />}

                    </div>
                    <img src={img} alt="" />
                    <div>
                        <p className={Style.Staff_Card_nameText}>{name}</p>

                        <p className={Style.Staff_Card_careRep}>{position}</p>

                        <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv} style={{ backgroundColor: statusColor ? "#59C150" : "#999999" }}></div>{online}</p>

                        <Link to={to}>
                            <Button
                                text={"View More Details"} />
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Accounts_Card