import React from 'react'
import Style from "./Confirm_Resolution.module.css"



const Confirm_Resolution = () => {
    return (
        <div id={Style.Escalate_Query_mainDiv}>
            <div id={Style.Escalate_Query_wrapperDiv}>

                <p>Confirm that your resolution perfectly addresses user query</p>

                <div id={Style.btnDiv}>
                    <button>Yes</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Confirm_Resolution