import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Usersignup from './pages/registration/UserSignup';
import Signin from './pages/signin/Signin';
import Forgotmail from './pages/forgot-mail/Fotgotmail.jsx';
import Resetpass from './pages/reset-pass/Resetpass';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Signin}/>
          <Route exact path='/signup' component={Usersignup}/>
          <Route exact path='/forgotmail' component={Forgotmail}/>
          <Route path='/resetpassword' component={Resetpass}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
