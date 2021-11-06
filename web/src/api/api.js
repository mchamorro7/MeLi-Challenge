import axios from 'axios';

const baseURL = process.env.REACT_APP_API;
const instance = axios.create({baseURL});
instance.defaults.withCredentials = false;

export default instance;