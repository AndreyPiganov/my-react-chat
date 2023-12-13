import {Form, Button, Container} from 'react-bootstrap';
import React, {useState} from 'react';
import { addChannel } from '../../http/channelAPI';
import {useSelector, useDispatch} from 'react-redux';
import { setChannel } from '../../store/slices/channelSlice.js';

const ModalChannelForm = ({close}) =>{
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const [nameChannel, setNameChannel] = useState('');
    const handleChange = ({target}) =>{
        setNameChannel(target.value);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const {name} = await addChannel(nameChannel,user.id);
            localStorage.setItem('user_last_channel', name);
            dispatch(setChannel(name))
        }catch(e){
            console.error(e);
        }
        close();
    }
    return (<Form onSubmit={handleSubmit}>
        <Form.Group controlId='channel'>
        <Form.Control name='channel' placeholder='Название канала' required className='my-3 py-2' onChange={handleChange}></Form.Control>
    </Form.Group>
    <Container className='justify-content-end d-flex'>
    <Button variant='secondary' type='button' onClick={close} className='mx-2 py-2'>Отменить</Button>
    <Button variant='primary' type='submit' className='mx-2'>Отправить</Button>
    </Container>
    </Form>)
};

export default ModalChannelForm;