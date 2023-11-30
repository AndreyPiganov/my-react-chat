import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import Authefication from './components/forms/AutheficationForm';
import Registration from './components/forms/RegistrationForm';
import routes from './routes.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={routes.root} element={<MainPage/>}/>
      <Route path={routes.login} element={<Authefication/>}/>
      <Route path={routes.signup} element={<Registration/>}></Route>
      <Route path={routes.others} element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
