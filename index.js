const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const openaiRoutes = require("./routes/openaiRoutes")
const port = process.env.PORT || 5000
// enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/openai", openaiRoutes)

app.listen(port, () => console.log("listening on port " + port))
