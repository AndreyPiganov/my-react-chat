import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const initValidationSchema = (nicknames) => yup.object().shape({
  nickname: yup.string().min(3, 'От 3 до 20 символов').max(20, 'От 3 до 20 символов').test('unique','Пользователь с таким именем уже существует', (value) => !nicknames.includes(value)).required('Имя обязательно к заполнению'),
  password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Пароль должен быть заполнен'),
  confirmPassword: yup.string().required('Подтвердите пароль').oneOf([yup.ref('password'),null], 'Пароли должны совпадать')
});

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
  return (
    <div>
      <Formik
        initialValues={{nickname: '', password: '', confirmPassword: ''}}
        validationSchema={initValidationSchema(['Andrey','Andro','admin'])}
        validateOnBlur={true}
        onSubmit={async (values, formikBag) => {
          alert(`Данные отправились ${values.nickname} ${values.password} ${values.confirmPassword}`);
          console.log(JSON.stringify(values));
          const user = await axios.post('http://localhost:8080/api/v1/user',{nickname: values.nickname, password: values.password})
          formikBag.setSubmitting(false);
        }}
      >
        <RegistrationForm />
      </Formik>
    </div>
  );
}
