import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Drones from './pages/Drone';
import Medications from './pages/Medications';
//import Dispatch from './pages/Dispatch';
import Settings from './pages/Settings';
//import './assets/styles.css';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drones" component={Drones} />
        <Route path="/medications" component={Medications} />
        
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
