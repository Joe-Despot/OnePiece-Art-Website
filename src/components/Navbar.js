import React from "react"
import "../style.css"

export default function Navbar(){
    return(
        <nav>
            <img className="nav--logo" src={require("../images/one-piece-logo-67.png")} />
        <div className="clock">
            <h1>{new Date().getHours()}h</h1>
        </div>
        </nav>
    )
}