import {Navbar, Container} from 'react-bootstrap';

function NavigateBar(){
    return (<Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href='/'>My Chat</Navbar.Brand>
        </Container>
    </Navbar>)
}
export default NavigateBar;