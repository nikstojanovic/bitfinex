import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: config.PUBLIC_URL || '/'
});

export default instance;
