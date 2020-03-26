//Node requirements
const express = require("express")

const app = express()
const port = 8080 //Testing port

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(8080,()=>console.log(`Listening on port ${port}`))