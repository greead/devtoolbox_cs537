// import React from 'react'
import logo from "../assets/icons/toolbox_logo.png"
import { Link } from "react-router-dom"
import "../styles/global.css"

export default function Header() {
    return (
        <header>
            <Link to={"/"}>
                <img src={logo} alt="logo"></img>
            </Link>
            <h1>Developer&#39;s ToolBox</h1>
        </header>
    )
}
