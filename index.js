import express from 'express'
import { dirname } from "path"
import { fileURLToPath } from "url";
import cors from "cors"
import citiesData from "./data/cities.json" with { type: 'json' }
const app = express();
app.use(cors())
app.use(express.static("public"));

const __dirname = dirname(fileURLToPath(import.meta.url));

let port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/questions', (req, res) => {
    res.sendFile(__dirname + "/data/questions.json")
})

const { cities } = citiesData

app.get("/app/cities", (req, res) => {
    res.sendFile(__dirname + "/data/cities.json")
})

app.get("/app/cities/:id", (req, res) => {
    const cityId = req.params.id
    const city = cities.filter(city => city.id == cityId)
    res.json(city)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})