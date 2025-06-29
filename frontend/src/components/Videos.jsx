// import React from 'react'
import { useState, useEffect } from "react"
import "../styles/global.css"
import PageNav from "./PageNav"
// import getVideoData from "./content_providers/VideoDataProvider.jsx"
import VideoItem from "./page_items/VideoItem.jsx"

export default function Videos() {
    const [videos, setVideos] = useState([])

    async function getVideoData() {
        await fetch("/api/videos")
            .then(res => res.json())
            .then(data => {
                // console.log(data) // DEBUG
                setVideos(data)
            })
    }

    useEffect(() => {
        getVideoData()
    }, [])


    return (
        <main>
            <h2>Videos</h2>
            <div className="intro-nav">
                <p>Here are some videos that I have found useful for learning a specific tool or topic!</p>
                <PageNav data={videos} />
            </div>
            <br />

            <div id="video-list">
                {
                    videos.map((element, index) => (
                        <VideoItem data={element} key={index} />
                    ))
                }
            </div>
        </main>
    )
}
