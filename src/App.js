import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from '@testing-library/react';
import { Button } from 'react-bootstrap';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="btns_initial">
            <button id="btn_waiter" className="btn_initial">MESERO</button>
            <button id="btn_kitchen" className="btn_initial">COCINA</button>
          </div>
        </header>
      </div>
    );
  }

  export default App;