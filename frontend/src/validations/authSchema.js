import * as yup from 'yup';

const authSchema = () => yup.object().shape({
    nickname: yup.string().required('Имя обязательно к заполнению'),
    password: yup.string().required('Пароль должен быть заполнен'),
  });
export default authSchema;

  