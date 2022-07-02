import React from "react"
import "../style.css"

export default function Navbar(){
    return(
        <nav>
            <img className="nav--logo" src={require("../images/one-piece-logo-67.png")} />
        <div className="signup">
            <img className="nav--singupimage" src={require("../images/wb-logo.png")}/>
            <span className="nav-signuptext">
            </span>
        </div>
        </nav>
    )
}