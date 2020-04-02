const express = require('express');
const loginRoutes = express.Router();

const messageController = require('../../controller/messageController');

loginRoutes.post('/message', messageController.send);
loginRoutes.get('/message/:id_send/:id_receive', messageController.list);

module.exports = loginRoutes;