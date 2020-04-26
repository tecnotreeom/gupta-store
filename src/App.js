import React from 'react';
import {Switch, Route} from 'react-router-dom';
import  HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatPage = () => (
  <div>
    <h3> HATS PAGE</h3>
  </div>
)
function App() {
  return (
    <div>
        <Switch>
        <Route exact path = "/" component = {HomePage} />
        <Route exact path = "/hats" component = {HatPage} />
        </Switch>
    </div>
  );
}

export default App;
