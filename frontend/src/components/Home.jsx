// import React from 'react'
import { Link } from "react-router-dom"
import "../styles/global.css"
import UpdatesItem from "./page_items/UpdatesItem"

export default function Homepage() {
    return (
        <main>

            <h2>About this website</h2>
            <p>
                This website is a toolbox of many resources and tools that I am using or have used in the past.
                Feel free to use or view them at your leisure!
            </p>
            <p>
                Better yet, if you have any tools that you think are interesting, let me know by sending me a <Link to={'/suggestions'}>suggestion</Link>!
            </p>
            <h3>Updates</h3>
            <UpdatesItem />
        </main>
    )
}
