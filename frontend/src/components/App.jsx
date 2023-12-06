import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import NotFound from './pages/ErrorPage.jsx';
import Authefication from './forms/AutheficationForm.jsx';
import Registration from './forms/RegistrationForm.jsx';
import routes from '../routes.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={routes.root} element={<MainPage/>}/>
      <Route path={routes.signin} element={<Authefication/>}/>
      <Route path={routes.signup} element={<Registration/>}></Route>
      <Route path={routes.others} element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
