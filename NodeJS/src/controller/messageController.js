const connection = require('../database/connection');

module.exports = {
    async send(req, res) {

        const { id_send, id_receive, message } = req.body;
        const response = await connection('message')
            .insert({
                id_send,
                id_receive,
                message
            });

        return res.json(response);
    },
    async list(req, res) {

        const { id_send, id_receive } = req.body;
        const response = await connection('message')
            .where('id_send', '=', id_send)
            .where('id_receive', '=', id_receive)
            .select('*');

        return res.json(response);
    },
}