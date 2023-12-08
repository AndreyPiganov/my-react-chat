import * as yup from 'yup';

const authSchema = {
  validationSchema: yup.object().shape({
    nickname: yup.string().required('Имя обязательно к заполнению'),
    password: yup.string().required('Пароль должен быть заполнен')
  }),
  initialValues: { nickname: '', password: '' },
  validateOnChange: false,
};

export default authSchema;

  