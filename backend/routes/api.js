/* eslint-disable */
const express = require("express");
const route = express.Router();
const { sendEmail } = require("../controllers/getProjects");

route.post('/api/send-email', sendEmail)

module.exports = route
