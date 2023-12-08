import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import routes from '../routes.js';
import AutheficationPage from './pages/AutheficationPage';
import RegistrationPage from './pages/RegistrationPage';
import AuthPage from './pages/AuthPage.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={routes.root} element={<MainPage/>}/>
      <Route path={routes.signin} element={<AuthPage/>}/>
      <Route path={routes.signup} element={<AuthPage/>}/>
      <Route path={routes.others} element={<ErrorPage/>}/>
      {/* <Route path={'/test'} element={<AuthForm/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
