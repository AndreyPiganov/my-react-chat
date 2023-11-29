import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';

const initValidationSchema = (nicknames) => yup.object().shape({
  nickname: yup.string().test('unique','Пользователь с таким именем уже существует', (value) => !nicknames.includes(value)).required('Имя обязательно к заполнению'),
  password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Пароль должен быть заполнен'),
  confirmPassword: yup.string().required('Подтвердите пароль').oneOf([yup.ref('password'),null], 'Пароли должны совпадать')
});

function RegistrationForm() {
  const { handleChange, handleSubmit, errors, values } = useFormikContext();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя</label>
        <input type="text" name='nickname' value={values.nickname} onChange={handleChange} />
        {errors.nickname && <div className='danger'>{errors.nickname}</div>}
      </div>
      <div>
        <label>Пароль</label>
        <input type="password" name='password' value={values.password} onChange={handleChange} />
        {errors.password && <div className='danger'>{errors.password}</div>}
      </div>
      <div>
        <label>Подтвердите пароль</label>
        <input type='password' name="confirmPassword" value={values.confirmPassword} onChange={handleChange}/>
        {errors.confirmPassword && <div className='danger'>{errors.confirmPassword}</div>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default function Registration() {
  return (
    <div>
      <h1>Регистрация</h1>
      <Formik
        initialValues={{ nickname: '', password: '' , confirmPassword: ''}}
        validationSchema={initValidationSchema(['Andrey','Andro','admin'])}
        onSubmit={(values, formikBag) => {
          alert(`Данные отправились ${values.nickname} ${values.password} ${values.confirmPassword}`);
          formikBag.setSubmitting(false);
        }}
      >
        <RegistrationForm />
      </Formik>
    </div>
  );
}
