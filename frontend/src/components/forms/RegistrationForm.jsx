import {Button, Form} from 'react-bootstrap';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import Validator from '../../validations/Validator.js';
import { registration } from '../../http/userAPI.js';
import {userLogin} from '../../store/slices/userSlice.js';
import {useDispatch} from 'react-redux';

function RegistrationForm() {
  const dispatch = useDispatch();
  const [validateState, setValidateState] = useState(true);
  const navigate = useNavigate();
  const schema = Validator.registration();
  const {handleBlur, handleChange, handleSubmit, errors, values, touched} = useFormik({
    ...schema,
    validateOnChange: validateState, 
    validateOnBlur: validateState,
     onSubmit: async (values, formikBag) => {
      try{
        const response = await registration(values.nickname, values.password);
        setValidateState(true);
        dispatch(userLogin(response));
        navigate('/')
      }catch(error){
        formikBag.setErrors({nickname: error.response.data.message});
        setValidateState(false);
      }
      formikBag.setSubmitting(false);
    }});
  return (
    <Form onSubmit={handleSubmit} className='mt-3 mt-mb-0'>
    <h1 className='text-center mb-4'>Регистрация</h1>
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
      <Form.Group controlId='confirmPassword' className='form-floating mb-4'>
        <Form.Control placeholder="Подтвердите пароль" type='password' name="confirmPassword" value={values.confirmPassword} onChange={handleChange} required isInvalid={touched.confirmPassword && !!errors.confirmPassword} onBlur={handleBlur} className='form-control'/>
        <Form.Label>Подтвердите пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant='outline-primary mb-3 w-100'>Зарегистрироваться</Button>
    </Form>
  );
}

export default RegistrationForm;
