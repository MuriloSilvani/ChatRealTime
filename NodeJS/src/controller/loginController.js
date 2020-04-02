const connection = require('../database/connection');

module.exports = {
    async login(req, res) {

        const { login, password } = req.body;
        const response = await connection('user')
            .where('login', '=', login)
            .select('*');

        return res.json(response);
    },
}