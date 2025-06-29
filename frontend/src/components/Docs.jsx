// import React from 'react'
import "../styles/global.css"
import PageNav from "./PageNav"
// import getDocData from "./content_providers/DocDataProvider.jsx"
import DocItem from "./page_items/DocItem.jsx"
import { useEffect, useState } from "react"

export default function Docs() {
    const [docs, setDocs] = useState([]);

    async function getDocData() {
        await fetch("/api/docs")
            .then(res => res.json())
            .then(data => {
                // console.log(data) // DEBUG
                setDocs(data)
            })
    }

    useEffect(() => {
        getDocData()
    }, [])

    // console.log(docData)
    return (
        <main>
            <h2>Documents</h2>
            <div className="intro-nav">
                <p>Here are a few documents that I keep handy for when I need them!</p>
                <PageNav data={docs} />
            </div>
            <br />
            <div id="document-list">
                {
                    docs.map((element, index) => (
                        <DocItem data={element} key={index} />
                    ))
                }
            </div>
        </main>
    )
}
