import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
