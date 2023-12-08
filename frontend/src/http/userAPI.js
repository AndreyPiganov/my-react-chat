import {$host, $authHost} from './index.js';

export const registration = async (nickname, password) =>{
    const response = await $host.post('api/v1/registration', {nickname,password, role: "USER"});
    return response;
}

export const login = async (nickname, password) =>{
    const response = await $host.post('api/v1/login', {nickname,password, role: "USER"});
    return response;
}