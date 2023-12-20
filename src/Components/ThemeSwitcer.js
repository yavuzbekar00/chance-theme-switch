import React from 'react'
import { MainContext, useContext } from '../Context'
import '../App.css'

function ThemeSwitcer() {
    const { theme, setTheme } = useContext(MainContext)

    const handleSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div>
            <button className='switch-btn' onClick={handleSwitch}>
                Change Theme
            </button>
        </div>
    )
}

export default ThemeSwitcer