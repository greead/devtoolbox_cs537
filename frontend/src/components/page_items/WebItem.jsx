// import React from 'react'
import PropType from 'prop-types'

export default function WebItem({ data }) {
    return (
        <>
            <section id={data.section_id}>
                <h3>{data.name} <a href="#top">↑</a></h3>
                <p>{data.description}</p>
                <p>Source: <cite><a href={data.source.source_link}>{data.source.source_name}</a></cite></p>
            </section >
            <br />

        </>
    )
}

WebItem.propTypes = {
    data: PropType.object
}
