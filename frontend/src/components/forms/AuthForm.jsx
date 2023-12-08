import React, {useState} from 'react';
import { useFormik } from 'formik';
import { Button, Form} from 'react-bootstrap';
import { useNavigate,useLocation } from 'react-router-dom';
import Validator from '../../validations/Validator.js';
import { registration,login } from '../../http/userAPI.js';

function AuthForm() {  
  const {pathname} = useLocation();
  const isLogin = pathname === '/signin';
  const [validateState,setValidateState] = useState(isLogin ? false : true);
  const navigate = useNavigate();
  const validateSchema = isLogin ? Validator.authefication() : Validator.registration();

  const formik = useFormik({initialValues: validateSchema.initialValues, validationSchema: validateSchema.schema, validateOnChange: validateState, validateOnBlur: validateState, onSubmit: async (values, formikBag) => {
    try{
        let data;
        if(isLogin){
            data = await login(values.nickname, values.password);
        }else{
            data = await registration(values.nickname, values.password);
            setValidateState(true);
        }
    localStorage.setItem('user', JSON.stringify(data.data));
    navigate('/');
  }catch(error){
    isLogin ? formikBag.setErrors({nickname: ' ',password: error.response.data.message}) : formikBag.setErrors({nickname: error.response.data.message});
    setValidateState(false);
  }
    formikBag.setSubmitting(false);
  }});

  return (
    <Form onSubmit={formik.handleSubmit} className='mt-3 mt-mb-0'>
    <h1 className='text-center mb-4'>Войти</h1>
      <Form.Group controlId='nickname' className='form-floating mb-3'>
      <Form.Control placeholder='Имя пользователя' type='text' name='nickname' value={formik.values.nickname} onChange={formik.handleChange} required className='form-control' isInvalid={formik.errors.nickname}/>
      <Form.Label>Имя пользователя</Form.Label>
      <Form.Control.Feedback type='invalid'>{formik.errors.nickname}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='password' className='form-floating mb-4'>
        <Form.Control placeholder="Пароль" type="password" name='password' value={formik.values.password} onChange={formik.handleChange} required className='form-control' isInvalid={formik.errors.password}/>
        <Form.Label>Пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
      </Form.Group>
      {!isLogin && <Form.Group controlId='confirmPassword' className='form-floating mb-4'>
        <Form.Control placeholder="Подтвердите пароль" type='password' name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} required isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword} onBlur={formik.handleBlur} className='form-control'/>
        <Form.Label>Подтвердите пароль</Form.Label>
        <Form.Control.Feedback type='invalid'>{formik.errors.confirmPassword}</Form.Control.Feedback>
      </Form.Group>}
      <Button type="submit" variant='outline-primary mb-3 w-100'>Войти</Button>
    </Form>
  );
}
export default AuthForm;