import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_
});

const authInterceptor = (config) =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('user')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {$host, $authHost};