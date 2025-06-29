// Imports
import express from "express";
import sqlite3 from "sqlite3"
import path from "path";
import __dirname from "../app.mjs";



// Instantiate
const router = express.Router();
// const db = new sqlite3.Database("./database/devtools.db")

// Routes
router.get("/health", (req, res) => {
    console.log("GET at '/api/health' :: Health Check")
    res.status(200).json({ message: 'OK' });
})

router.get("/courses", (req, res) => {
    const db = new sqlite3.Database("./database/devtools.db")
    db.all("SELECT document FROM courses", (err, rows) => {
        let doc_list = []
        for (const row of rows) {
            doc_list = [...doc_list, JSON.parse(row.document)]
        }
        let code = err ? err : "OK"
        console.log(`GET at '/api/courses' :: Code ${code}`)
        res.json(doc_list)
    })
    db.close()

});

router.get("/docs", (req, res) => {
    const db = new sqlite3.Database("./database/devtools.db")
    db.all("SELECT document FROM docs", (err, rows) => {
        let doc_list = []
        for (const row of rows) {
            doc_list = [...doc_list, JSON.parse(row.document)]
        }
        let code = err ? err : "OK"
        console.log(`GET at '/api/docs' :: Code ${code}`)
        res.json(doc_list)
    })
    db.close()

});

router.get("/docs/:docname", (req, res) => {
    const docname = req.params.docname
    const options = {
        root: path.join(__dirname, "database", "docs")
    }
    console.log(`GET at '/api/docs/${docname}`)
    res.sendFile(docname, options,)

});

router.get("/videos", (req, res) => {
    const db = new sqlite3.Database("./database/devtools.db")
    db.all("SELECT document FROM videos", (err, rows) => {
        let doc_list = []
        for (const row of rows) {
            doc_list = [...doc_list, JSON.parse(row.document)]
        }
        let code = err ? err : "OK"
        console.log(`GET at '/api/videos' :: Code ${code}`)
        res.json(doc_list)
    })
    db.close()

});

router.get("/webapps", (req, res) => {
    const db = new sqlite3.Database("./database/devtools.db")
    db.all("SELECT document FROM webapps", (err, rows) => {
        let doc_list = []
        for (const row of rows) {
            doc_list = [...doc_list, JSON.parse(row.document)]
        }
        let code = err ? err : "OK"
        console.log(`GET at '/api/webapps' :: Code ${code}`)
        res.json(doc_list)
    })
    db.close()

});

router.post('/suggestions', (req, res) => {
    const db = new sqlite3.Database("./database/devtools.db")
    console.log(`POST at '/api/suggestions' :: Type ${req.body.tool_type}`)
    let sectionId
    let data
    switch (req.body.tool_type) {
        case "web-tool":
            sectionId = String(req.body.tool_name).toLowerCase().replace(/\s/g, "-")

            data = {
                name: req.body.tool_name,
                section_id: sectionId,
                description: req.body.description,
                source: {
                    source_name: req.body.tool_name,
                    source_link: req.body.tool_url
                }
            }

            // console.log(data) // DEBUG
            db.run("INSERT INTO webapps (document) VALUES (json(?))", JSON.stringify(data))
            res.status(201).send('Suggestion uploaded!');
            break
        case "video":
            sectionId = String(req.body.tool_name).toLowerCase().replace(/\s/g, "-")

            data = {
                name: req.body.tool_name,
                section_id: sectionId,
                description: req.body.description,
                video_link: req.body.tool_url,
                source: {
                    source_name: req.body.source_name ? req.body.source_name : "N/A",
                    source_link: req.body.source_link ? req.body.source_link : "#" + sectionId
                }
            }

            // console.log(data) // DEBUG
            db.run("INSERT INTO videos (document) VALUES (json(?))", JSON.stringify(data))
            res.status(201).send('Suggestion uploaded!');
            break
        case "document":
            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.');
            }

            const uploadedFile = req.files.file // Use the name attribute from the form
            sectionId = String(req.body.tool_name).toLowerCase().replace(/\s/g, "-")

            data = {
                name: req.body.tool_name,
                section_id: sectionId,
                description: req.body.description,
                document_path: uploadedFile.name,
                source: {
                    source_name: req.body.source_name ? req.body.source_name : "N/A",
                    source_link: req.body.source_link ? req.body.source_link : "#" + sectionId
                }
            }

            // console.log(data) // DEBUG
            db.run("INSERT INTO docs (document) VALUES (json(?))", JSON.stringify(data))

            // Save the file or process it
            uploadedFile.mv(`./database/docs/${uploadedFile.name}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(201).send('Suggestion uploaded!');
            });
            break
        case "course":
            sectionId = String(req.body.tool_name).toLowerCase().replace(/\s/g, "-")

            data = {
                name: req.body.tool_name,
                section_id: sectionId,
                technology: ["various"],
                description: req.body.description,
                course_links: [
                    {
                        course_title: req.body.tool_name,
                        course_link: req.body.tool_url
                    }
                ]
            }

            // console.log(data) // DEBUG
            db.run("INSERT INTO courses (document) VALUES (json(?))", JSON.stringify(data))
            res.status(201).send('Suggestion uploaded!');
            break
        case "other":
            res.status(501).send("'Other' tool type not supported yet.'")
            break
        default:
            res.status(400).send("Invalid tool type.")
    }
    db.close()
});


export default router;