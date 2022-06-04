/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require("./config/config")

const app = express()

app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
   res.send("hello there")
})

require('./routes')(app)

sequelize.sync()
   .then(()=>{
      app.listen(config.port)
      console.log(`server started on port ${config.port}`)
   })