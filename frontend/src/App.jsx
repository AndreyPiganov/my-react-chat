import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import routes from './routes.js';
import AutheficationPage from './components/pages/AutheficationPage.jsx';
import RegistrationPage from './components/pages/RegistrationPage.jsx';
import {useDispatch} from 'react-redux';
import React, {useState,useEffect} from 'react'
import { check } from './http/userAPI.js';
import { userLogin,logout } from './store/slices/userSlice.js';
import { Spinner } from 'react-bootstrap';
import NavigateBar from './components/NavigateBar.jsx';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() =>{
    setTimeout(() =>{
      check()
      .then((data) => dispatch(userLogin(data)))
      .catch((error) => dispatch(logout))
      .finally(() => setLoading(false));
    },1000)
  },[])
if(loading){
  return <Spinner animation={'grow'}/>
}
  return (
    <BrowserRouter>
    <NavigateBar/>
    <Routes>
      <Route path={routes.root} element={<MainPage/>}/>
      <Route path={routes.login} element={<AutheficationPage/>}/>
      <Route path={routes.signup} element={<RegistrationPage/>}/>
      <Route path={routes.others} element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
