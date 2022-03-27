import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.css";
import LoginForm from './Components/LoginForm';
import RegistrationFrom from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationFrom />
    </div>
  );
}

export default App;
