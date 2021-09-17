import CovidData from './components/CovidData';
import Navbar from './components/Navbar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Email from './components/Email';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/email" component={Email} />
        <PrivateRoute exact path="/covid" component={CovidData} />
      </Switch>
    </Router>
  );
}

export default App;
