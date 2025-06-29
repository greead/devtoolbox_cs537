
// Get form contents
const suggestion_form = {
    // Form elements



    getJson: async function () {
        var json_string =
            `
        {
            "suggestor": "${this.suggestor.element.value}",
            "email": "${this.email.element.value}",
            "tool_type": "${this.tool_type.element.value}",
            "tool_name": "${this.tool_name.element.value}",
            "tool_url": "${this.tool_url.element.value}",
            "file_upload": "${this.file_upload.element.files[0] ? this.file_upload.element.files[0].name : ""}",
            "source_name": "${this.source_name.element.value}",
            "source_url": "${this.source_url.element.value}",
            "description": "${this.description.element.value}"
        }
        `
        return await JSON.parse(json_string)

    }

}

// Update previous suggestions function
const updateSubmissions = async function () {
    const prev_submissions = document.getElementById("prev-submissions")
    var suggestions = localStorage.getItem("suggestions")

    // Check if there are stored suggestions
    if (suggestions) {
        suggestions = await JSON.parse(suggestions)

        // Generate table rows
        var table_rows = ``
        for (var suggestion of suggestions) {
            table_rows +=
                `
                <tr>
                    <td>${suggestion.suggestor}</td>
                    <td>${suggestion.email}</td>
                    <td>${suggestion.tool_type}</td>
                    <td>${suggestion.tool_name}</td>
                    <td>${suggestion.tool_url}</td>
                    <td>${suggestion.file_upload}</td>
                    <td>${suggestion.source_name}</td>
                    <td>${suggestion.source_url}</td>
                    <td>${suggestion.description}</td>
                </tr>
                `
        }

        // Create the table
        prev_submissions.innerHTML =
            `
            <h3>Previous Submissions</h3>
            <table>
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
                ${table_rows}
            </table>
            `

    }

}

// Set tool type selector callback
suggestion_form.tool_type.element.onchange = (event) => { suggestion_form.show_hide(event) }

// Set form processing callback
suggestion_form.submit.element.onclick = async (event) => {
    const form_element = document.getElementById("suggestion-form")

    if (form_element.checkValidity()) {
        console.log(event)
        var suggestions = localStorage.getItem("suggestions")

        if (suggestions) {
            suggestions = await JSON.parse(suggestions)
        } else {
            suggestions = []
        }

        suggestions = [...suggestions, await suggestion_form.getJson()]

        localStorage.setItem("suggestions", await JSON.stringify(suggestions))

        updateSubmissions()
    }

}

// Update page on load
document.onload = updateSubmissions()

