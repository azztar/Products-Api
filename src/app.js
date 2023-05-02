const express = require("express")
const cors = require("cors")
require("dotenv").config();

const productRouter = require('./products/products.router')

const { port } = require('../config')

const db = require('./utils/database')

const app = express()

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
   
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json({
      message: "server ok",
      myMessage: process.env.MESSAGE,
      myPort: process.env.PORT,
    });
  });

  app.use('/api/v1/products', productRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})