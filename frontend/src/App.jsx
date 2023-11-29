import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import Authefication from './components/forms/AutheficationForm';
import Registration from './components/forms/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<Authefication/>}/>
      <Route path="/reg" element={<Registration/>}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}
{/* <div className="App">
Hello world
</div> */}

export default App;
