import {Modal} from 'react-bootstrap';
import ModalChannelForm from './forms/ModalChannelForm';

const ModalChannel = ({close,show}) => {
    return (<Modal show={show} onHide={close} centered size='lg'>
        <Modal.Header closeButton>
            <Modal.Title>Добавить канал</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalChannelForm close={close}/> 
            </Modal.Body>
    </Modal>)
};

export default ModalChannel;