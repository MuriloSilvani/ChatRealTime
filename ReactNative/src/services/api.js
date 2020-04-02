const axios = require('axios');

const api = axios.create({
    baseURL: 'http://192.168.0.18:3333',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;