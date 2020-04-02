const connection = require('../database/connection');

module.exports = {
    async login(req, res) {

        const { login, password } = req.body;


        return res.json({ login, password });
    },
}