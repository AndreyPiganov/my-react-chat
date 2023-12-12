import { useFormik } from 'formik';
import { Button, Form} from 'react-bootstrap';

const ChatForm = () =>{
    return (<Form id="chat" className='py-0 border-0 rounded-2'>
        <Form.Group controlId='message' className='input-group'>
            <Form.Control placeholder='Введите сообщение' name='message' type='text' value='' className='py-3 border'></Form.Control>
            <button type='submit' className='btn btn-group-vertical border-0' disabled>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" fill="currentColor" viewBox="0 0 24 24" aria-label="Создать сообщение"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z">
                </path>
                </svg>
<span className='visually-hidden'>Отправить</span>
</button>
        </Form.Group>
    </Form>)
};
export default ChatForm;