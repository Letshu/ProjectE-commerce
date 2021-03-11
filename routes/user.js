const express = require('express');
const routes = express.Router();

const {signup} = require("../controller/user");

routes.post("/signup",signup);

module.exports = routes;
