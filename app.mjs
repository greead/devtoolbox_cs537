// Imports
import express from "express";
import apiRouter from "./routes/api.mjs";
import path from "path";
import { fileURLToPath } from 'url';
import cors from 'cors';
import fileUpload from "express-fileupload";

// Instantiate
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendFolder = "frontend"
const buildFolder = "dist";
console.log('__dirname: ', __dirname);

// Config
app.set('port', process.env.PORT || 8080);

// Middleware
app.use(fileUpload({createParentPath: true}))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use("/api", express.json())
app.use("/", express.static(path.join(__dirname, frontendFolder, buildFolder)));

// Routers
app.use("/api", apiRouter);
app.get("/*", (req, res) => {res.sendFile(__dirname + "/frontend/dist/index.html")})

// Error Handlers


// Server Start
app.listen(app.get('port'), () => {
    console.log(`Server started: http://localhost:${app.get('port')}`)
})

export default __dirname