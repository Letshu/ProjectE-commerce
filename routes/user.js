const express = require('express');
const routes = express.Router();

const {sayHi} = require("../controller/user");

routes.get("/",sayHi);

module.exports = routes;
