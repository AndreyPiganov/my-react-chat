import {useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import { fetchMessagesById } from '../http/messageAPI.js';

const HeaderMessages = () =>{
    const [count,setCount] = useState(0);
    const {name} = useSelector((state) => state.channel)
    useEffect(() =>{
        fetchMessagesById(name)
        .then((data) =>{
            setCount(data.length);
        })
        .catch((error) => console.error(error));
    },[])
    return (<div className="bg-light shadow-sm p-3 mb-4 d-flex flex-column">
    <b className="m-0">
        # {name}
    </b>
    <span className="text-muted">{count} сообщений</span>
</div>)
};

export default HeaderMessages;