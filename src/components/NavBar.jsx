import "../index.css"
import { useState, useEffect } from "react";


function NavBar ({setSearchQuery}) {
const [input, setInput] = useState ("")

function onSubmit (e) {
    e.preventDefault()
    setSearchQuery(input)
}


    return (

       
    
        

        <div id="div-nav">
            <div id="div-logo">
                <p >LOGO</p>
            </div>

            <div id="div-search">
                <form onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setInput(e.target.value) }  value={input} placeholder="Search Topic"/>
                <button>Search</button>
                </form>
            </div>
        </div>
        
    )
}

export default NavBar;