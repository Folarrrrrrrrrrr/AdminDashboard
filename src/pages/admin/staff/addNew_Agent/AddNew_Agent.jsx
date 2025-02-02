import React from 'react'
import Input from '../../../../components/SignUp_input/Input'
import Style from './AddNew_Agent.module.css'
import Button from '../../../../components/button/Button'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'


const AddNew_Agent = () => {

        const {updateSignUpPopup} = PopupContextHook()

        const confirm = ()=>{

            updateSignUpPopup(true)
        }


    return (

        <div id={Style.AddNew_Agent_mainDiv}>
            {/* <label htmlFor="date">Date:</label>

        <input style={{border: "none"}} type="date" min="2021- 01 -01"
        max={2024-12-31} /> */}

            <div id={Style.AddNew_Agent_wrapperDiv}>
                <p id={Style.AddNew_Agent_headerText}>Staff Details</p>
                <form action="">
                    <p className={Style.AddNew_Agent_formText}>Fill staff detail to continue</p>

                    <div>
                        <div id={Style.inputDiv}>
                        <Input
                            label={"Full Name"}
                            placeholder={"Type Full Name"} />

                        <Input
                            label={"Email Address"}
                            placeholder={" Type Email Address"} />
                        </div>
                            
                            
                            <p className={Style.AddNew_Agent_formText}>Create Password</p>

                        <div>
                            <Input
                                label={"password"}
                                placeholder={"Type password"} />

                            <div id={Style.generatePassword}>Auto Generate Password</div>
                        </div>
                        <div id={Style.AddNew_Agent_buttonDiv}><Button text = {"Save Details"}/></div>

                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNew_Agent