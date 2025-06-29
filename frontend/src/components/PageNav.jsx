// import React from 'react'
import PropType from "prop-types"

export default function PageNav({ data }) {
    return (
        <nav className="page-nav" id="page-nav">
            <b>Page Content</b>
            <ul>
                {
                    data.map((item, index) => (
                        <li key={index}><a href={"#" + item.section_id}>{item.name}</a></li>
                    ))
                }
            </ul>

        </nav>
    )
}

PageNav.propTypes = {
    data: PropType.array
}
