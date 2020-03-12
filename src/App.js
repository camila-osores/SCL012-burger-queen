  
import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Breakfast from './components/Breakfast';
import Cocina from './components/Cocina';
import FirstView from './components/FirstView';


function App() {
    return (
      <Router>
        <Switch>
        <Route exact path="/"  component={FirstView}/>
        <Route exact path="/breakfast"  component={Breakfast}/>
        <Route exact path="/cocina" component={Cocina} />
        </Switch>
      </Router>
    );
  }

  export default App;
