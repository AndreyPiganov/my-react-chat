import {Button} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { setChannel } from '../store/slices/channelSlice.js';

const renderChannels = (channels) =>{
    const {name} = useSelector((state) => state.channel)
    const dispatch = useDispatch();
    const handleClick = (channel) =>{
        localStorage.setItem('user_last_channel', channel.name);
        dispatch(setChannel(channel.name));
    }
    const buttonsChannel = channels.map((item) => {
        return (<Button key={item['channel_id']} variant={item.name === name ? 'secondary' : 'light'} className='rounded-0' onClick={() => handleClick(item)}>
            <span className='my-1'>#</span>
            {item.name}
        </Button>)
    })
    return buttonsChannel;
};

export default renderChannels;