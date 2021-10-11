import logo from './logo.svg';
import './App.css';
import Signin from './pages/signin/Signin';
import Forgotpass from './pages/forgot-pass/Forgotpass.jsx';
import Usersignup from './pages/registration/UserSignup';

function App() {
  return (
    <div className="App">
        {/* <Forgotpass/> */}
        <Signin/>
        {/* <Usersignup/> */}
    </div>
  );
}

export default App;
