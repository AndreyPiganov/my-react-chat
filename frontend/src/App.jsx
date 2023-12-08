import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import routes from './routes.js';
import AutheficationPage from './components/pages/AutheficationPage.jsx';
import RegistrationPage from './components/pages/RegistrationPage.jsx';

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
