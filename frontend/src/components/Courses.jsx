// import React from 'react'
import { useEffect, useState } from "react"
import "../styles/global.css"
import PageNav from "./PageNav"
// import getCourseData from "./content_providers/CourseDataProvider"
import CourseItem from "./page_items/CourseItem"

export default function Courses() {
    const [courses, setCourses] = useState([])

    async function getCourseData() {
        await fetch("/api/courses")
            .then(res => res.json())
            .then(data => {
                // console.log(data) // DEBUG
                setCourses(data)
            })
    }

    useEffect(() => {
        getCourseData()
    }, [])

    return (
        <main>
            <h2>Courses</h2>
            <div className="intro-nav">
                <p>
                    These courses are for learning specific technologies. I have personally found these courses very useful!
                </p>
                <PageNav data={courses} />
                <br />

            </div>

            <div id="course-list">
                {
                    courses.map((element, index) => (
                        <CourseItem data={element} key={index} />
                    ))
                }
            </div>

        </main>
    )
}
