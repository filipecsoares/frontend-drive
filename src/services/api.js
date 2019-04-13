import axios from 'axios';

const api = axios.create({
    baseURL: 'https://drive-backend.herokuapp.com',
});

export default api;