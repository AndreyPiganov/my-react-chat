import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const initValidationSchema = (confirmPassword) => yup.object().shape({
  nickname: yup.string().required('Имя обязательно к заполнению'),
  password: yup.string().test('confirm','Неправильный пароль', (password) => password !== confirmPassword).required('Пароль должен быть заполнен'),
});

function AutheficationForm() {
  
  const { handleChange, handleSubmit, errors, values } = useFormikContext();

  return (
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={10} md={6}>
        <h1 className='text-center'>Войти</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Ваш ник' type='text' name='nickname' value={values.nickname} onChange={handleChange} required className='form-control'/>
      <Form.Label>Ваш ник</Form.Label>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-3'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={values.password} onChange={handleChange} required className='form-control' isInvalid={errors.nickname || errors.password}/>
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

export default function Authefication() {
  return (
    <div>
      <Formik
        initialValues={{ nickname: '', password: '' }}
        validationSchema={initValidationSchema('qwerty')}
        validateOnChange={false}
        onSubmit={ async (values, formikBag) => {
          alert(`Данные отправились ${values.nickname} ${values.password}`);
          console.log(values);
          const response = await axios.post('http://localhost:8080/api/v1/login', values);
          console.log(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
          formikBag.setSubmitting(false);
        }}
      >
        <AutheficationForm />
      </Formik>
    </div>
  );
}