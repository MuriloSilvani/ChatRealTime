const express = require('express');
const loginRoutes = express.Router();

const messageController = require('../../controller/messageController');

loginRoutes.post('/message', messageController.send);
loginRoutes.get('/message', messageController.list);

module.exports = loginRoutes;