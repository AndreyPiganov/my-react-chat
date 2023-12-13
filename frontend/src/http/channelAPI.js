import {$host, $authHost} from './index.js';

export const fetchChannels = async () =>{
    const {data} = await $host.get('api/v1/channel');
    return data;
}

export const addChannel = async () =>{
    const {data} = await $host.post('api/v1/channel', )
}