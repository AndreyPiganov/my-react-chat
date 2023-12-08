import { useFormik } from 'formik';
import { Button, Form} from 'react-bootstrap';
import {login} from '../../http/userAPI.js';
import { useNavigate } from 'react-router-dom';
import Validator from '../../validations/Validator.js';

function AutheficationForm() {
  const navigate = useNavigate();
  const validateSchema = Validator.authefication();
  const {handleChange, handleSubmit, errors, values} = useFormik({
    ...validateSchema,
    onSubmit: async (values, formikBag) => {
      try{
        const response = await login(values.nickname, values.password);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/');
      }catch(error){
        formikBag.setErrors({nickname: ' ',password: error.response.data.message});
      }
      formikBag.setSubmitting(false);
    }});
    return (
    <Form onSubmit={handleSubmit} className='mt-3 mt-mb-0'>
    <h1 className='text-center mb-4'>Войти</h1>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Имя пользователя' type='text' name='nickname' value={values.nickname} onChange={handleChange} required className='form-control' isInvalid={errors.nickname}/>
      <Form.Label>Имя пользователя</Form.Label>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-4'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={values.password} onChange={handleChange} required className='form-control' isInvalid={errors.password}/>
        <Form.Label>Пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant='outline-primary mb-3 w-100'>Войти</Button>
    </Form>
  );
}
export default AutheficationForm;