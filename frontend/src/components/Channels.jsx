import {ButtonGroup} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { fetchChannels } from '../http/channelAPI.js';
import renderChannels from '../renders/renderChannels.js';

export default function(){
    const [channels, setChannels] = useState([]);
    useEffect(() =>{
        fetchChannels()
        .then((data) => setChannels([...data]))
        .catch((error) => console.log(error));
    },[]);
    return (<ButtonGroup aria-label='Channels' className='d-flex flex-column'>
        {renderChannels(channels)}
    </ButtonGroup>)    
}