import ChatForm from "../forms/ChatForm.jsx";
import { Container,Row, Col} from 'react-bootstrap';
import Channels from "../Channels.jsx";
import HeaderChannels from "../HeaderChannels.jsx";
import HeaderMessages from "../HeaderMessages.jsx";


const ChatPage = () =>{
    return <Container fluid className="h-100">
        <Row className="flex-md-row bg-white h-100">
            <Col xs={4} md={1}className="flex-column bg-light d-flex border-end h-100">
                <HeaderChannels/>
                <Channels/>
            </Col>
            <Col className="h-100 p-0">
                <div className="d-flex flex-column h-100">
                    <HeaderMessages/>
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