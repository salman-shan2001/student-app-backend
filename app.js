const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { studentmodel } = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://salmanshan:salman642001@cluster0.odxej1b.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0")

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/add", (req, res) => {
    let input = req.body
    let student = new studentmodel(input)
    student.save()

    res.json({"status":"success"})
})

app.get("/view", (req, res) => {
   studentmodel.find().then(
    (data)=>{res.json(data)}
   ).catch()
})

app.listen(8083, () => {
    console.log("server started")
})

