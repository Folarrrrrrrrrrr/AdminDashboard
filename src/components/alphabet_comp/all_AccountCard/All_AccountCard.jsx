import React from 'react'
import Style from '../all_AccountCard/All_AccountCard.module.css'
import work from '../../assets/svg/Work.svg'
import { Link } from 'react-router-dom'



const All_AccountCard = (props) => {
    const { accNumber } = props
    return (
        <>
            <div id={Style.All_AccountCard_MainDiv}>
                <div id={Style.All_AccountCard_imgTextDiv}>
                    <img src={work} alt="" />
                    <div> Current Account</div>
                </div>
                <div id={Style.All_AccountCard_line}></div>
                <div id={Style.AccDetails}>
                    <p>{accNumber}</p>
                    <div>Account Number</div>
                </div>
                <div id={Style.All_AccountCard_BtnDiv}>
                    <Link to={'/noAccount'}><button id={Style.viewTransaction_btn}>View Transaction</button>
                    </Link>
                    
                    <button id={Style.viewBalance_btn}>View Balance</button>
                </div>
            </div>
        </>
    )
}

export default All_AccountCard