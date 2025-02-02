import React from 'react'
import Style from '../escalateQuery/Escalate_Query.module.css'


const Escalate_Query = () => {
  return (
    <div id={Style.Escalate_Query_mainDiv}>
        <div id={Style.Escalate_Query_wrapperDiv}>
            <p>This query will be sent to the Amin Officer for review</p>

            <div id={Style.btnDiv}>
                <button>Yes</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Escalate_Query