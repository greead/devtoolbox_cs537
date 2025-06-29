// import React from 'react'
import PropType from 'prop-types'

export default function VideoItem({data}) {
    return (
        <>
            <section id={data.section_id}>
                <h3>{data.name} <a href="#top">↑</a></h3>
                <p>{data.description}</p>
                <details>
                    <summary>View video preview</summary>
                    <iframe width="560" height="315" src={data.video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Source: <cite><a href={data.source.source_link}>{data.source.source_name}</a></cite></p>
                </details>
            </section >
            <br/>
        </>
    )
}

VideoItem.propTypes = {
    data: PropType.object
}