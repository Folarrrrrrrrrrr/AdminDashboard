import React from 'react'
import Style from './UsersCard.module.css'
import Button from '../../../../../components/button/Button'
import { Link } from 'react-router-dom'


const UsersCard = (props) => {

    const { img, status, country, name, to, email, onboardedBy } = props

    return (
        <div id={Style.Staff_Card_mainDiv}>

            <div id={Style.Staff_Card_WrapperDiv}>
                <div id={Style.onboardedText}>
                 <p> {onboardedBy}</p>   
                </div>
                
          

            <div id={Style.Staff_Card_textDiv}>
                <img src={img} alt="" />
                <div>
                    <p className={Style.Staff_Card_nameText}>{name}</p>
                    <p className={Style.Staff_Card_careRep}>{country}</p>
                    <p className={Style.emailText}>{email}</p>
                    <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>{status}</p>
                    
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

export default UsersCard