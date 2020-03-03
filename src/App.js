import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="btns_initial">
          <button id="btn_mesero" className="btn_initial">MESERO</button>
          <button id="btn_jefe" className="btn_initial">JEFE DE COCINA</button>
        </div>
      </header>
    </div>
  );
}

export default App;
