const express = require('express')
require("./db/conn")
const bookRouter = require('./router/books')
const memberRouter = require('./router/members')
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bookRouter)
app.use(memberRouter)


app.listen(port, () => console.log(`Server running at port ${port}`));