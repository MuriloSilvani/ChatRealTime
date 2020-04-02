const connection = require('../database/connection');

module.exports = {
    async send(req, res) {

        const { id_send, id_receive, message } = req.body;
        const responseId = await connection('message')
            .insert({
                id_send,
                id_receive,
                message
            });

        const response = await connection('message')
            .where('id', '=', responseId[0])
            .first()
            .select('*');

        const receiveSocket = req.connectedUsers[id_receive];
        if (receiveSocket) {
            req.io.to(receiveSocket).emit('message', response);
        }

        return res.json(response);
    },
    async list(req, res) {

        const id_send = req.params.id_send;
        const id_receive = req.params.id_receive;

        const response = await connection('message')
            .where(function () {
                this.where('id_send', '=', id_send)
                    .andWhere('id_receive', '=', id_receive)
            })
            .orWhere(function () {
                this.where('id_send', '=', id_receive)
                    .andWhere('id_receive', '=', id_send)
            })
            .orderBy('created_at', 'desc')
            .select('*');

        return res.json(response);
    },
}