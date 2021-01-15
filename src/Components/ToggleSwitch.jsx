import React, { useState } from 'react'
import Switch from "react-switch";


function ToggleSwitch() {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked);
    } 
    return (
        <div>
            <Switch onChange={handleChange} checked={checked} onColor='#58bcb6' uncheckedIcon checkedIcon />
        </div>
    )
}

export default ToggleSwitch
