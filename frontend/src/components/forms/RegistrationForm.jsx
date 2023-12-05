import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import Validator from '../../validations/Validator.js';


function RegistrationForm() {
  const [validateState, setValidateState] = useState(true);
  const navigate = useNavigate();
  const validator = new Validator();
  const formik = useFormik({initialValues: {nickname: '', password: '', confirmPassword: ''}, validationSchema: validator.registration(), validateOnChange: validateState, validateOnBlur: validateState, onSubmit: async (values, formikBag) => {
    try{
    const response = await axios.post('http://localhost:8080/api/v1/registration',{nickname: values.nickname, password: values.password})
    setValidateState(true);
    localStorage.setItem('user', JSON.stringify(response.data));
    navigate('/')
  }catch(error){
      formikBag.setErrors({nickname: error.response.data.message});
      setValidateState(false);
  }
  formikBag.setSubmitting(false);
  }});
  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={10} md={6}>
        <h1 className='text-center'>Регистрация</h1>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Имя Пользователя' type='text' name='nickname' value={formik.values.nickname} onChange={formik.handleChange} required isInvalid={formik.touched.nickname && !!formik.errors.nickname} onBlur={formik.handleBlur} className='form-control' autoComplete='Имя'/>
      <Form.Label>Имя пользователя</Form.Label>
      <Form.Control.Feedback type='invalid'>{formik.errors.nickname}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-3'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={formik.values.password} onChange={formik.handleChange} required isInvalid={formik.touched.password && !!formik.errors.password} onBlur={formik.handleBlur} className='form-control'/>
        <Form.Label>Пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='confirmPassword' className='form-floating mb-3'>
        <Form.Control placeholder="Подтвердите пароль" type='password' name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} required isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword} onBlur={formik.handleBlur} className='form-control'/>
        <Form.Label>Подтвердите пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{formik.errors.confirmPassword}</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className='outline-primary'>Зарегистрироваться</Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}

export default RegistrationForm;
