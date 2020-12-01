import './App.css';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {useGlobalContext} from './context/ContextData';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  const {loading} = useGlobalContext();
  return (
  (!loading ? <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" exact component={LoginSignUp} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router> : null )
  );
}

export default App;
