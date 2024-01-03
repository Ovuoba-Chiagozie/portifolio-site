/* eslint-disable */
const express = require("express");
const route = express.Router();
const { sendEmail } = require("../controllers/getProjects");

route.get('/', async (req,res) => {
 
  res.status(200).json({
    success:'true'
  })
})
route.post('/api/send-email', sendEmail)

module.exports = route
