import * as yup from 'yup';

const registrationSchema = () => yup.object().shape({
    nickname: yup.string().min(3, 'От 3 до 20 символов').max(20, 'От 3 до 20 символов').required('Имя обязательно к заполнению'),
    password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Пароль должен быть заполнен'),
    confirmPassword: yup.string().required('Подтвердите пароль').oneOf([yup.ref('password'),null], 'Пароли должны совпадать')
  });
  export default registrationSchema;