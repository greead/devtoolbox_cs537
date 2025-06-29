// import React from 'react'
import PropType from 'prop-types'



export default function DocItem({data}) {
    // console.log(data) // DEBUG
    return (
        <>
            <article id={data.section_id}>
                <h3>{data.name} <a href="#top">↑</a></h3>
                <p>{data.description}</p>
                <details>
                    <summary>View document preview</summary>
                    <object
                        data={"http://localhost:8080/api/docs/" + data.document_path}
                        type="application/pdf"
                        // standby="Loading Preview..."
                        width="100%">
                        <p>PDF in-page preview unavailable. Use another browser or download <a href={"http://localhost:8080/api/docs/" + data.document_path}>here</a>.</p>
                    </object>
                    <p>Source: <cite><a href={data.source.source_link}>{data.source.source_name}</a></cite></p>
                </details>
            </article>
            <br></br>
        </>
    )
}

DocItem.propTypes = {
    data: PropType.object
}
