import ChatPage from './ChatPage.jsx';
import '../../assets/style/App.css'
import {useSelector} from 'react-redux';
import AutheficationPage from './AutheficationPage.jsx';

export default function MainPage() {
  const {isAuth} = useSelector((state) => state.user);

    return (<div className="App mh-100">
      {isAuth ? <ChatPage/> : <AutheficationPage/>}
  </div>);
}