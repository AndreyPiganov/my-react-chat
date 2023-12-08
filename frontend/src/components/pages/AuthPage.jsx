import RegistrationForm from '../forms/RegistrationForm.jsx';
import NavigateBar from '../NavigateBar.jsx';
import { Container,Card,Row, Col, Image} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AuthForm from '../forms/AuthForm.jsx';


export default function AuthPage() {
  const location = useLocation();
  const isLogin = location.pathname === '/signin';
  return (
  <div className='d-flex flex-column h-100'>
    <NavigateBar/>
  <Container fluid className='h-100'>
      <Row className='justify-content-center mt-5 align-content-center h-100'>
      <Col xs={12} md={8} xxl={6}>
      <Card className='shadow-sm' style={{marginBottom: '11rem',width: '57.2rem'}}>
        <Card.Body className='row p-5'>
          <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
            <Image src={isLogin ? '/logo1.png' :'/logo2.png'} alt='Войти' roundedCircle></Image>
          </Col>
          <Col xs={12} md={6}>
          <AuthForm />
          </Col>
          </Card.Body>
          <Card.Footer className='p4'>{isLogin ? 
          <div className='text-center'><span>Нет аккаунта?</span><a href='/signup'>Зарегистрироваться</a></div> : 
          <div className='text-center'><span>Есть аккаунт?</span><a href='/signin'>Войти</a></div>}
            </Card.Footer>
      </Card>
      </Col>
      </Row>
    </Container> 
    </div>
  );
}

