import './App.css';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {useGlobalContext} from './context/ContextData';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App() {
  const {loading} = useGlobalContext();
  return (
  (!loading ? <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Switch>
        <Route path="/login" exact component={LoginSignUp} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router> : <LoadingSpinner /> )
  );
}

export default App;
