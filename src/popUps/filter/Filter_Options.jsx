import React from 'react'
import Style from './Filter_Options.module.css'
import { PopupContextHook } from '../../WhiteHouse_PopupContext'


const Filter_options = () => {
  const {updateFilterPopup} = PopupContextHook()
  
  return (
    <div id={Style.Filter_options_mainDiv}>
      <button id={Style.Filter_options_mainButton} onClick={()=>updateFilterPopup(false)}></button>
      {/* <div> */}
        <div id={Style.Filter_options_wrapperDiv}>
          <div><input type="radio" name="" id="" /> Users ID</div>
          <div><input type="radio" name="" id="" /> Ticket ID</div>
          <div><input type="radio" name="" id="" /> Countries</div>
          <div><input type="radio" name="" id="" /> Amount</div>
        </div> 
      {/* </div> */}
    </div>
  )
}

export default Filter_options