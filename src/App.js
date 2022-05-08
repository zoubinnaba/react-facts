import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {

    const [darkMode, setDarkeMode] = useState(true)

    function toggleDarkMode() {
        setDarkeMode(prevTheme => !prevTheme)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode}/>
        </div>
    )
}