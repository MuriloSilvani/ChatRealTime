const express = require('express');

const routes = express.Router();

const loginController = require('./login/loginRoutes');

routes.use(loginController);

module.exports = routes;