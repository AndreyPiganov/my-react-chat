import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import routes from '../routes.js';
import AutheficationPage from './pages/AutheficationPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={routes.root} element={<MainPage/>}/>
      <Route path={routes.signin} element={<AutheficationPage/>}/>
      <Route path={routes.signup} element={<RegistrationPage/>}/>
      <Route path={routes.others} element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
