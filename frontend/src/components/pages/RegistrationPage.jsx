import RegistrationForm from '../forms/RegistrationForm.jsx';
import NavigateBar from '../NavigateBar.jsx';
import { Container,Card,Row, Col, Image } from 'react-bootstrap';

export default function RegistrationPage() {
    return (
      <div className='d-flex flex-column h-100'>
      <NavigateBar/>
    <Container fluid className='h-100'>
        <Row className='justify-content-center mt-5 align-content-center h-100'>
        <Col xs={12} md={8} xxl={6}>
        <Card className='shadow-sm' style={{marginBottom: '14rem',width: '57.2rem'}}>
          <Card.Body className='p-5 d-flex flex-column flex-md-row justify-content-around align-items-center'>
            <div>
              <Image src='/logo2.png' alt='Регистрация' roundedCircle></Image>
              </div>
            <RegistrationForm />
            </Card.Body>
            <Card.Footer className='p4'>
              <div className='text-center'>
              <span>Есть аккаунт? </span>
              <a href='/signin'>Войти</a>
              </div>
              </Card.Footer>
        </Card>
        </Col>
        </Row>
      </Container>
      </div>
    );
  }