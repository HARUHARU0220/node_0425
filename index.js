import express from "express"
const app = express()

app.get("/test", (req, res) => {
    res.json({
        msg: "data get all"
    })
})


const port = 8080
app.listen(port, console.log("server start"))