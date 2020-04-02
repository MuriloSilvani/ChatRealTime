const express = require('express');

const routes = express.Router();

const loginRoutes = require('./login/loginRoutes');
const messageRoutes = require('./message/messageRoutes');

routes.use(loginRoutes);
routes.use(messageRoutes);

module.exports = routes;