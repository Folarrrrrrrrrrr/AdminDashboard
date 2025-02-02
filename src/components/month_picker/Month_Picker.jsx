import React, { useEffect, useState } from 'react'
import Style from "./Month_Picker.module.css"

// Month_Picker component allows users to select a month
const Month_Picker = ({ onMonthSelect, defaultMonth}) => {

    // State to hold the currently selected month
    const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
    

    // Array of month names
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    // Effect to update selected month when defaultMonth prop changes
    
    useEffect(()=>{
        setSelectedMonth(defaultMonth)
    }, [defaultMonth])

    
    // Handler for when a month is selected

    const handleChange = (e) => {
        const selected = e.target.value; // Get the selected month from the event
        setSelectedMonth(selected); // Update the state with the selected month
        onMonthSelect(selected); // Pass the selected month to parent component
    };


    return (

        <div id={Style.Month_Picker_mainDiv}>

            <div id={Style.Month_Picker_wrapperDiv}>

                {months.map((month, index) => (

                    <div key={index} id={Style.Month_PickerDiv} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>

                        <input
                            type="radio"
                            id={month}
                            name="month"
                            value={month}
                            checked={selectedMonth === month} // Check if this month is the selected one
                            onChange={handleChange} // Call handleChange on selection
                            style={{ marginRight: '10px' }}
                        />

                        <label htmlFor={month}>{month}</label> {/* Label for the radio button */}

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Month_Picker