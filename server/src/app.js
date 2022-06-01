/* eslint-disable @typescript-eslint/no-var-requires */
console.log('hello world')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
   res.send("hello there")
})

app.post("/register" , (req , res)=>{

   res.send({
      message: `User ${req.body.email} registered successfully`
   })

})

app.listen(process.env.PORT || 8081)