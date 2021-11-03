const axios = require('axios');
const apiMercadolibre = process.env.API_MERCADOLIBRE;
const instance = axios.create({
    baseURL: apiMercadolibre,
});
instance.defaults.withCredentials = false;
module.exports = instance;