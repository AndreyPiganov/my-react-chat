import renderMessages from '../renders/renderMessages';
import React, {useEffect,useState} from 'react';


const Messages = () =>{
    const [messages, setMessages] = useState([])
    return (<div id="messages-box" className="chat-messages overflow-auto px-5">
        {renderMessages(messages)}
    </div>);
};

export default Messages;