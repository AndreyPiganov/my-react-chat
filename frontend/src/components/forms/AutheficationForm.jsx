import { useFormik } from 'formik';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Validator from '../../validations/Validator.js';

function AutheficationForm() {
  const validator = new Validator();
  const navigate = useNavigate();

  const formik = useFormik({initialValues: { nickname: '', password: '' },validationSchema: validator.authefication(),validateOnChange: false, onSubmit: async (values, formikBag) => {
    try{
    const response = await axios.post('http://localhost:8080/api/v1/login', values);
    localStorage.setItem('user', JSON.stringify(response.data));
    navigate('/');
  }catch(error){
    formikBag.setErrors({nickname: ' ',password: error.response.data.message});
  }
    formikBag.setSubmitting(false);
  }});

  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={10} md={6}>
        <h1 className='text-center'>Войти</h1>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Ваш ник' type='text' name='nickname' value={formik.values.nickname} onChange={formik.handleChange} required className='form-control' isInvalid={formik.errors.nickname}/>
      <Form.Label>Ваш ник</Form.Label>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-3'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={formik.values.password} onChange={formik.handleChange} required className='form-control' isInvalid={formik.errors.password}/>
        <Form.Label>Пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>Неверное имя пользователя или пароль</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className='outline-primary'>Войти</Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}
export default AutheficationForm;