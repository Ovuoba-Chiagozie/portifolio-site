/* eslint-disable */
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
app.use(express.urlencoded({ extended: true }))
app.set('json spaces',2)
app.use('/', api)

const port = process.env.PORT || 5000

// Local/dev only — Vercel uses the exported app as a serverless function
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}

module.exports = app
