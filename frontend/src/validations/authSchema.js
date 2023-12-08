import * as yup from 'yup';

const authSchema = {
  schema: yup.object().shape({
    nickname: yup.string().required('Имя обязательно к заполнению'),
    password: yup.string().required('Пароль должен быть заполнен'),
  }),
  initialValues: {nickname: '', password: ''},
};
export default authSchema;

  