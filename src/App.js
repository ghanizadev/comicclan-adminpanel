import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './routes/login'
import Dashboard from './routes/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/panel" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
