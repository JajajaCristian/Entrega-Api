const express = require("express")

//importar cors

const cors = require("cors")
const app = express()

const port = 5000

app.use(cors)

app.listen(port, () => console.log(`Escuchando por el puerto ${port}`))



app.get(`/api`, (req, res) => res.json({ msm: `${data}`}))