import React from 'react'
import Style from '../add_Card/Add_Card.module.css'
import Button from '../button/Button'
import { PopupContextHook } from '../../PopupContext '



const Add_Card = (props) => {
 
    const {cols, rows, placeholder, name, AddText, btnText, type, onSubmit, onClick } = props
  return (
    <div id={Style.Add_CurrentAccount_mainDiv}>
        <div id={Style.Add_CurrentAccount_WrapperDiv}>
            <div id={Style.Add_CurrentAccount_Text}>{AddText}</div>
            <div id={Style.Add_CurrentAccount_description}>
                <p>{name}</p>
                <textarea name="" id="" cols={cols} rows={rows} placeholder={placeholder}></textarea>
            </div>
            <div id={Style.BtnDiv}>
                <button
                type={type}
                onClick={onClick}
                onSubmit={onSubmit}>{btnText}</button>


            </div>
        </div>
    </div>
  )
}

export default Add_Card