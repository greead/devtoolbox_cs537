
// import React from 'react'
import course_icon from "../assets/icons/course.png"
import home_icon from "../assets/icons/home.png"
import doc_icon from "../assets/icons/doc.png"
import suggest_icon from "../assets/icons/suggest.png"
import video_icon from "../assets/icons/video.png"
import web_icon from "../assets/icons/web.png"
import "../styles/global.css"

import { Link } from "react-router-dom"

export default function NavigationBar() {
    return (
        <div className="site-nav-wrap">
            <nav className="site-nav">
                <Link to={'/'}>
                    <img src={home_icon} alt="home-nav"></img>
                    <span className="nav-text">Home</span>
                </Link>
                <Link to={'/web-tools'}>
                    <img src={web_icon} alt="web-nav"></img>
                    <span className="nav-text">Web Tools</span>
                </Link>
                <Link to={'/videos'}>
                    <img src={video_icon} alt="video-nav"></img>
                    <span className="nav-text">Videos</span>
                </Link>
                <Link to={'/courses'}>
                    <img src={course_icon} alt="course-nav"></img>
                    <span className="nav-text">Courses</span>
                </Link>
                <Link to={'/docs'}>
                    <img src={doc_icon} alt="docs-nav"></img>
                    <span className="nav-text">Documents</span>
                </Link>
                <Link to={'/suggestions'}>
                    <img src={suggest_icon} alt="suggest-nav"></img>
                    <span className="nav-text">Suggestions</span>
                </Link>
            </nav>
        </div>
    )
}
