import axios from 'axios';

const baseURL = process.env.API_URL;
const instance = axios.create({baseURL});
instance.defaults.withCredentials = false;

export default instance;