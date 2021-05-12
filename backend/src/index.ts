const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let lists: any[] = []

app.post("/save", (req:any, res:any) => {
    console.log(req.body)
    lists = req.body.lists
    return res.json({ success: true })
})

app.get("/load", (req:any, res:any) => res.json({ lists }))

app.listen(PORT,() => {
    console.log(`Kanban backend running on http://localhost:${PORT}!`)
})