import NavigateBar from './../NavigateBar.jsx';
import ChatPage from './ChatPage.jsx';
import '../../assets/style/App.css'

export default function MainPage() {
    return (    <div className="App mh-100">
      <NavigateBar/>
      <ChatPage/>
  </div>);
}