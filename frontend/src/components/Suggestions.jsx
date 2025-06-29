// import React from 'react'
import "../styles/global.css"
import "../styles/form.css"
import { useState } from "react"
import { useEffect } from "react"

export default function Suggestions() {

    const [tool_type, setToolType] = useState("")

    // Form element states
    const [show_common, setShowCommon] = useState(true)
    const [tool_label, setToolLabel] = useState("Tool name*: ")
    const [require_url, setRequireUrl] = useState(false)
    const [show_upload, setShowUpload] = useState(false)
    const [require_upload, setRequireUpload] = useState(false)
    const [form_data, setFormData] = useState({})
    const [file_data, setFileData] = useState()
    const [prev_suggestions, setPrevSuggestions] = useState([])

    useEffect(() => {
        // Show common input fields or not
        if (["web-tool", "video", "course", "document", "other"].includes(tool_type)) { setShowCommon(true) }
        else { setShowCommon(false) }

        // Require url field or not
        if (["web-tool", "video", "course"].includes(tool_type)) { setRequireUrl(true) }
        else { setRequireUrl(false) }

        // Show file upload or not
        if (["document", "other"].includes(tool_type)) { setShowUpload(true) }
        else { setShowUpload(false) }

        // Require upload or not
        if (["document"].includes(tool_type)) { setRequireUpload(true) }
        else { setRequireUpload(false) }

        // Set the label for the tool name
        switch (tool_type) {
            case "web-tool": setToolLabel("Web-tool name*: "); break
            case "video": setToolLabel("Video name*: "); break
            case "course": setToolLabel("Course name*: "); break
            case "document": setToolLabel("Document name*: "); break
            default: setToolLabel("Tool name*: ");
        }

    }, [tool_type])

    useEffect(() => {
        const local_sug = JSON.parse(localStorage.getItem("suggestions"))
        if (local_sug) {
            setPrevSuggestions(local_sug)
        }
    }, [])

    useEffect(() => {
        if (prev_suggestions.length !== 0) {
            localStorage.setItem("suggestions", JSON.stringify(prev_suggestions))
        }
    }, [prev_suggestions])

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(); // Use FormData for multipart/form-data
        Object.entries(form_data).forEach(([key, value]) => {
            data.append(key, value);
        });
        if (file_data) {
            data.append("file", file_data)
            console.log(file_data)
        }

        fetch("http://localhost:8080/api/suggestions", {
            method: "POST",
            body: data,
        })
            .then((response) => {
                if (response.ok) {
                    setPrevSuggestions((values) => [...values, form_data]);
                    event.target.reset();
                    setToolType("");
                    setFileData(undefined);
                } else {
                    console.error("Failed to submit");
                }
            })
            .catch((err) => console.error("Error:", err));
    }

    function handleChange(event) {
        const name = event.target.name
        const file = event.target.files ? event.target.files[0] : file_data
        const value = event.target.value

        setFileData(file)
        setFormData(values => ({ ...values, [name]: value }))

            
    }

    return (
        <main>
            <h2>Suggestions</h2>
            <p>
                Please use the following form to suggest additions to this toolbox. If I find them useful, I&#39;ll be sure to add them to the toolbox with a shoutout (if you provide a name) and will let you know (if you provide an email)!
            </p>
            {/* <form id="suggestion-form" method="POST" action="http://localhost:8080/api/suggestions" onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data"> */}
            <form id="suggestion-form" method="POST" action="http://localhost:8080/api/suggestions" encType="multipart/form-data" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Suggestions</legend>
                    <p>
                        <label htmlFor="suggestor">Name: </label>
                        <input type="text" name="suggestor" id="suggestor" placeholder="anonymous" onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="anonymous" onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="tool-type" >Tool type*: </label>
                        <select name="tool_type" id="tool-type" onChange={(e) => { setToolType(e.target.value); handleChange(e) }} required>
                            <option value=""></option>
                            <option value="web-tool"> Web tool</option>
                            <option value="video"> Video</option>
                            <option value="document"> Document / Reference</option>
                            <option value="course"> Course</option>
                            <option value="other"> Other</option>
                        </select>
                    </p>
                    {show_common ?
                        <>
                            <p>
                                <label htmlFor="tool-name">{tool_label}</label>
                                <input type="text" name="tool_name" id="tool-name" required onChange={handleChange} />
                            </p>
                            <p>
                                <label htmlFor="tool-url">URL{require_url ? "*" : ""}: </label>
                                <input type="url" name="tool_url" id="tool-url" required={require_url} onChange={handleChange} />
                            </p>
                        </>
                        : null
                    }
                    {show_upload ?
                        <p>
                            <label htmlFor="file-upload">File upload{require_upload ? "*" : ""}: </label>
                            <input type="file" accept=".pdf" name="file_upload" id="file-upload" required={require_upload} onChange={handleChange} />
                        </p>
                        : null
                    }
                    {show_common ?
                        <>
                            <p>
                                <label htmlFor="source-name">Source name: </label>
                                <input type="text" name="source_name" id="source-name" placeholder="optional" onChange={handleChange} />
                            </p>

                            <p>
                                <label htmlFor="source-url">Source url: </label>
                                <input type="url" name="source_url" id="source-url" placeholder="optional" onChange={handleChange} />
                            </p>
                            <p>
                                <label htmlFor="description">Description*:</label>
                            </p>
                            <p>
                                <textarea name="description" id="description" cols="30" rows="10" required onChange={handleChange}></textarea>
                            </p>
                        </>
                        : null
                    }
                    <p>
                        <label htmlFor="submit"></label>
                        <button className="submit" id="submit" type="submit">Submit Suggestion</button>
                    </p>
                </fieldset>
            </form>
            {prev_suggestions.length !== 0 ?

                <div id="prev-submissions">
                    <br />
                    <br />
                    <h3>Previous Submissions</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Tool type</th>
                                <th>Tool name</th>
                                <th>URL</th>
                                <th>File</th>
                                <th>Source</th>
                                <th>Source URL</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prev_suggestions.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.suggestor}</td>
                                        <td>{item.email}</td>
                                        <td>{item.tool_type}</td>
                                        <td>{item.tool_name}</td>
                                        <td>{item.tool_url}</td>
                                        <td>{item.file_upload}</td>
                                        <td>{item.source_name}</td>
                                        <td>{item.source_url}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
                : null
            }

        </main>
    )
}
