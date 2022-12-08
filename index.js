const express = require("express")
const path = require("path")
const app = express()
const dotenv = require("dotenv").config()
// add static ("use a vue or react frontend later")

const openaiRoutes = require("./routes/openaiRoutes")
const port = process.env.PORT || 5000
// enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// use static
app.use(express.static(path.join(__dirname, "public")))
// register routes
app.use("/openai", openaiRoutes)
// serve it hot and nice
app.listen(port, () => console.log("listening on port " + port))
