import React from 'react'
import Style from "./Successful_Resolution.module.css"
import success from "../../../../assets/svg/white_success.svg"
import copy from "../../../../assets/svg/copy.svg"
import Button from "../../../../components/button/Button"



const Successful_Resolution = () => {
    return (
        <div id={Style.Successful_Resolution_mainDiv}>
            <div id={Style.Successful_Resolution_wrapperDiv}>

                <div id={Style.imgDiv}>
                    <img src={success} alt="" />
                </div>

                <div>
                    <p id={Style.headerText}>Resolution Sent Successfully</p>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Ticket ID</p>
                        <p className={Style.detailsBold}>WH534RE0</p>
                    </div>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Username</p>
                        <p className={Style.detailsBold}>John Doe</p>
                    </div>

                    <div className={Style.detailsDiv}>
                        <p className={Style.detailsText}>Query Category </p>
                        <p className={Style.detailsBold}>Billing</p>
                    </div>

                    <p id={Style.resolutionText}>Resolution</p>

                    <p id={Style.resolution_details}>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate
                    </p>

                    <p id={Style.copyText}><img src={copy} alt="" />Copy Details</p>


                    <div id={Style.ButtonDiv}>
                        <Button text={"Go Home"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Successful_Resolution