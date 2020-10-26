const express = require("express")
const app = express()
const PORT = 4777

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, () => {
    console.log("App running PORT =", PORT)
})
