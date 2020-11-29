import './App.css';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" exact component={LoginSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
