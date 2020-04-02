const express = require('express');
const loginRoutes = express.Router();

const loginController = require('../../controller/loginController');

loginRoutes.post('/login', loginController.login);

module.exports = loginRoutes;