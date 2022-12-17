import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./assets/style.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drones from './pages/Drone';
import Medications from './pages/Medications';
import Dispatch from './pages/Dispatch';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Switch>
          <Route path="/drones">
            <Drones />
          </Route>
          <Route path="/medications">
            <Medications />
          </Route>
          <Route path="/dispatch">
            <Dispatch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
 
  );
}
export default App;