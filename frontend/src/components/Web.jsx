// import React from 'react'
import { useEffect, useState } from "react"
import "../styles/global.css"
import PageNav from "./PageNav"
// import getWebData from "./content_providers/WebDataProvider.jsx"
import WebItem from "./page_items/WebItem"

export default function Web() {
    const [web_tools, setWebTools] = useState([])

    async function getWebData() {
        await fetch("/api/webapps")
            .then(res => res.json())
            .then(data => {
                // console.log(data) // DEBUG
                setWebTools(data)
            })
    }

    useEffect(() => {
        getWebData()
    }, [])

    return (
        <main>
            <h2>Web Tools</h2>
            <div className="intro-nav">
                <p>These are some web tools that I have found particularly useful! I have attempted to embed these where I can, but these tools often have unintended effects or deny being embedded.</p>
                <PageNav data={web_tools} />
            </div>
            <br />
            <div id="tool-list">
                {
                    web_tools.map((element, index) => (
                        <WebItem data={element} key={index} />
                    ))
                }
            </div>
        </main>
    )
}
