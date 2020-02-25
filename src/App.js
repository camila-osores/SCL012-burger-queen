import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button id="btn_mesero" class="btn_mesero">MESERO</button>
        <button id="btn_jefe" class="btn_jefe">JEFE DE COCINA</button>
        
      </header>
    </div>
  );
}

export default App;
