import {Navbar, Container, Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../store/slices/userSlice.js';
import { useNavigate } from 'react-router-dom';

function NavigateBar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuth} = useSelector((state) => state.user);
    const handleClick = () =>{
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/')
    }
    return (<Navbar expand="lg" className="shadow-sm bg-white">
        <Container className='justify-content-between'>
            <Navbar.Brand href='/'>My Chat</Navbar.Brand>
                {isAuth && <Button variant='primary' onClick={handleClick}>Выйти</Button>}
        </Container>
    </Navbar>)
}
export default NavigateBar;