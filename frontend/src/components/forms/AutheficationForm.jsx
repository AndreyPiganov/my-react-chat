import { useFormik } from 'formik';
import { Button, Form} from 'react-bootstrap';
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
    <Form onSubmit={formik.handleSubmit} className='mt-3 mt-mb-0'>
    <h1 className='text-center mb-4'>Войти</h1>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Ваш ник' type='text' name='nickname' value={formik.values.nickname} onChange={formik.handleChange} required className='form-control' isInvalid={formik.errors.nickname}/>
      <Form.Label>Ваш ник</Form.Label>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-4'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={formik.values.password} onChange={formik.handleChange} required className='form-control' isInvalid={formik.errors.password}/>
        <Form.Label>Пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>Неверное имя пользователя или пароль</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant='outline-primary mb-3 w-100'>Войти</Button>
    </Form>
  );
}
export default AutheficationForm;