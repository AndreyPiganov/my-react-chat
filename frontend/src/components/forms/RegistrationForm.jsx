import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import { Formik, useFormikContext } from 'formik';
import axios from 'axios';
import Validator from '../../validations/Validator.js';


function RegistrationForm() {
  const { handleChange, handleSubmit, errors, values, handleBlur , touched } = useFormikContext();
  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={10} md={6}>
        <h1 className='text-center'>Регистрация</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Имя Пользователя' type='text' name='nickname' value={values.nickname} onChange={handleChange} required isInvalid={touched.nickname && !!errors.nickname} onBlur={handleBlur} className='form-control' autoComplete='Имя'/>
      <Form.Label>Имя пользователя</Form.Label>
      <Form.Control.Feedback type='invalid'>{errors.nickname}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-3'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={values.password} onChange={handleChange} required isInvalid={touched.password && !!errors.password} onBlur={handleBlur} className='form-control'/>
        <Form.Label>Пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='confirmPassword' className='form-floating mb-3'>
        <Form.Control placeholder="Подтвердите пароль" type='password' name="confirmPassword" value={values.confirmPassword} onChange={handleChange} required isInvalid={touched.confirmPassword && !!errors.confirmPassword} onBlur={handleBlur} className='form-control'/>
        <Form.Label>Подтвердите пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className='outline-primary'>Зарегистрироваться</Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}

export default function Registration() {
  const [validateState, setValidateState] = useState(true);
  const navigate = useNavigate();
  const validator = new Validator();
  return (
    <div>
      <Formik
        initialValues={{nickname: '', password: '', confirmPassword: ''}}
        validationSchema={validator.registration()}
        validateOnBlur={validateState}
        validateOnChange={validateState}
        onSubmit={async (values, formikBag) => {
          try{
          const response = await axios.post('http://localhost:8080/api/v1/registration',{nickname: values.nickname, password: values.password})
          setValidateState(true);
          localStorage.setItem('user', JSON.stringify(response.data));
          navigate('/')
        }catch(error){
          console.log(error);
            formikBag.setErrors({nickname: error.response.data.message});
            setValidateState(false);
        }
        formikBag.setSubmitting(false);
        }}
      >
        <RegistrationForm />
      </Formik>
    </div>
  );
}
