import ChatForm from "../forms/ChatForm.jsx";
import { Container,Row, Col} from 'react-bootstrap';
import Channels from "../Channels.jsx";


const ChatPage = () =>{
    return <Container fluid className="h-100">
        <Row className="flex-md-row bg-white h-100">
            <Col xs={4} md={1}className="flex-column bg-light d-flex border-end h-100">
                <div className="justify-content-between d-flex mt-0 mb-2 ps-0 pe-0 p-2">
                    <b>Каналы</b>
                    <button type='button' className="text-primary btn btn-group-vertical p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                    <span className="visually-hidden">+</span>
                    </button>
                </div>
                <Channels/>
            </Col>
            <Col className="h-100 p-0">
                <div className="d-flex flex-column h-100">
                <div className="bg-light shadow-sm p-3 mb-4 d-flex flex-column">
                    <b className="m-0">
                        # general
                    </b>
                    <span className="text-muted">0 сообщений</span>
                </div>
                <div id="messages-box" className="chat-messages overflow-auto px-5"></div>
                <div className="mt-auto px-4 py-4">
                    <ChatForm/>
                </div> 
                </div>
            </Col>
        </Row>
    </Container>
};

export default ChatPage;