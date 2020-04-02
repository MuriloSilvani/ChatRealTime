const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// usar redis ou db chave valor
const connectedUsers = {}

io.on('connection', socket => {
    const { id_receive } = socket.handshake.query;

    // console.log('conexao', socket.id, id_receive);

    connectedUsers[id_receive] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = server;
