import {Form, Button, Container} from 'react-bootstrap';

const ModalChannelForm = ({close}) =>{
    return (<Form>
        <Form.Group controlId='channel'>
        <Form.Control name='channel' placeholder='Название канала' required className='my-3 py-2'></Form.Control>
    </Form.Group>
    <Container className='justify-content-end d-flex'>
    <Button variant='secondary' type='button' onClick={close} className='mx-2 py-2'>Отменить</Button>
    <Button variant='primary' type='submit' className='mx-2'>Отправить</Button>
    </Container>
    </Form>)
};

export default ModalChannelForm;