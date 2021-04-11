import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/user' component={ Dashboard }/>
      </Switch>
    </div>
  );
}

export default App;
