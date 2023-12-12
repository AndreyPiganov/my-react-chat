import {$host, $authHost} from './index.js';
import {jwtDecode} from 'jwt-decode';


export const registration = async (nickname, password) =>{
    const {data} = await $host.post('api/v1/registration', {nickname,password, role: "USER"});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (nickname, password) =>{
    const {data} = await $host.post('api/v1/login', {nickname,password, role: "USER"});
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}
export const check = async () =>{
    const {data} = await $authHost.get('api/v1/auth')
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}