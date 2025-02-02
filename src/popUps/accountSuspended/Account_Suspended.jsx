import React from 'react'
import style from "./Account_Suspended.module.css"
import Button from '../../components/button/Button'



const Account_Suspended = () => {

    return (
        <div id={style.mainDiv}>
            <div id={style.wrapper}>

                <div id={style.closeButtonWrapper}>
                    <div id={style.closeButton}>X</div>
                </div>


                <div>
                    <p>Account Suspended</p>
                    <Button text={"See Details"} />
                </div>
            </div>

        </div>
    )
}

export default Account_Suspended