// import React from 'react'
import PropType from 'prop-types'

export default function CourseItem({ data }) {
    return (
        <>
            <section id={data.section_id}>
                <h3>{data.name} <a href="#top">↑</a></h3>
                <p><b>Technology:</b> {data.technology.join(", ")}</p>
                <p>{data.description}</p>
                <ul>
                    {
                        data.course_links.map((link, index) => (
                            <li key={index}><a href={link.course_link}>{link.course_title}</a></li>
                        ))
                    }
                </ul>
            </section>
            <br />
        </>
    )
}

CourseItem.propTypes = {
    data: PropType.object
}
