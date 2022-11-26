const express = require('express')
require("./db/conn")
const studentsRouter = require('./router/students')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(studentsRouter)


app.listen(port, () => console.log(`Server running at port ${port}`));