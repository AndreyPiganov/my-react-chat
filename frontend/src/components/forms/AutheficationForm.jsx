import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';

const initValidationSchema = (confirmPassword) => yup.object().shape({
  nickname: yup.string().required('Имя обязательно к заполнению'),
  password: yup.string().test('confirm','Неправильный пароль', (password) => password !== confirmPassword).required('Пароль должен быть заполнен'),
});

function AutheficationForm() {
  const { handleChange, handleSubmit, errors, values } = useFormikContext();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя</label>
        <input type="text" name='nickname' value={values.nickname} onChange={handleChange} required/>
      </div>
      <div>
        <label>Пароль</label>
        <input type="password" name='password' value={values.password} onChange={handleChange} required/>
        {Object.keys(errors).length > 0 && <div className='danger'>Неправильное имя или пароль</div>}
      </div>
      <button type="submit">Войти</button>
    </form>
  );
}

export default function Authefication() {
  return (
    <div>
      <h1>Войти</h1>
      <Formik
        initialValues={{ nickname: '', password: '' }}
        validationSchema={initValidationSchema('qwerty')}
        validateOnChange={false}
        onSubmit={(values, formikBag) => {
          alert(`Данные отправились ${values.nickname} ${values.password}`);
          console.log(values);
          formikBag.setSubmitting(false);
        }}
      >
        <AutheficationForm />
      </Formik>
    </div>
  );
}