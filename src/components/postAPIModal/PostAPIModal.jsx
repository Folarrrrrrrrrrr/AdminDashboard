import React, { useState } from 'react'
import Style from "./postModal.module.css"

function PostAPIModal( props) {

  const [showSuccess, setShowSuccess] = useState(true);

  return (
    <>
    {showSuccess &&
    <div className={Style.modalContainer}>
        <span className={Style.modalBackground} onClick={()=>setShowSuccess(!showSuccess)}></span>
        <div className={Style.modalCard}>
            <div>
                {/* Success Icon */}
                <div>
                    <div className={props.successPost? Style.successIconContainer: Style.failedIconContainer}>
                      {
                      props.successPost?
                      <span className={Style.icon}>✔</span> :
                      props.failedPost?
                      <span className={Style.failedIcon}> ❌</span> :
                      <></>
                     }
                   </div>
                </div>

                {/* Success Message */}
                <h2 className={Style.reportHeading}>
                {props.reportHeader}
                </h2>
                <p className={props.reportMessage}>
                {props.message}
                </p>

                {/* CTA Button */}
                <p
                // onClick={onClose}
                onClick={() => setShowSuccess(false)}
                className={Style.actionBtn}
                >
                {props.actionText}
                </p>
                <p
                className=" mt-[10px] font-bold text-blue-500"
                onClick={(e) =>{e.preventDefault;(false)}}
                >
                {props.actionTxtTwo}
                </p>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default PostAPIModal