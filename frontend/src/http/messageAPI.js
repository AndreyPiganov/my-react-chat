import {$host, $authHost} from './index.js';

export const fetchMessagesById = async (id) =>{
    const {data} = await $host.get(`api/v1/message/${id}`);
    return data;
};