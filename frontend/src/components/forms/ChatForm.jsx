import { useFormik } from 'formik';
import { Form} from 'react-bootstrap';
import io from 'socket.io-client';

const ChatForm = () =>{
    const {handleChange, values} = useFormik({initialValues: {message: ''},onSubmit: async(values,formikBag) =>{
        const socket = io(process.env.REACT_APP_API_URL);
        socket.emit('sendMessage', values.message)
    }})
    return (<Form id="chat" className='py-0 border-0 rounded-2'>
        <Form.Group controlId='message' className='input-group'>
            <Form.Control placeholder='Введите сообщение' name='message' type='text' value={values.message} className='py-3 border' onChange={handleChange}></Form.Control>
            <button type='submit' className='btn btn-group-vertical border-0' disabled={!values.message.trim()}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" fill="currentColor" viewBox="0 0 24 24" aria-label="Создать сообщение"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z">
                </path>
                </svg>
<span className='visually-hidden'>Отправить</span>
</button>
        </Form.Group>
    </Form>)
};
export default ChatForm;