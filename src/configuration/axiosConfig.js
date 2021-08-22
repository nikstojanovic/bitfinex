import axios from 'axios';
import endpoints from './endpoints';

const instance = axios.create({
    baseURL: endpoints.PUBLIC_URL || '/'
});

export default instance;
