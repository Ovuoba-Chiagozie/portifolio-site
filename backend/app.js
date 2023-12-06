const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const api = require('./routes/api')
app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
  }));



app.use(express.json())
app.use(express.urlencoded())
app.set('json spaces',2)
app.use('/', api)

// app.get('/', (req,res) => {
 
//     res.status(200).json({
//         success:'true'
//     })
// })

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})