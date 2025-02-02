import React from 'react'
import Style from '../select_field/Select_Field.module.css'

const Select_field = (props) => {
    const {option,label}= props
  return (
    <div id={Style.SelectDiv}>
        <label>{label}</label>
        <select name="" id="">
            <option value="">{option}</option>
        </select>
    </div>
  )
}

export default Select_field