import express from 'express'
import { dirname } from "path"
import { fileURLToPath } from "url";
import cors from "cors"

const app = express();
app.use(cors())
const __dirname = dirname(fileURLToPath(import.meta.url));

let port = process.env.PORT || 8080;

app.get('/questions', (req, res) => {
    res.sendFile(__dirname + "/data/questions.json")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})