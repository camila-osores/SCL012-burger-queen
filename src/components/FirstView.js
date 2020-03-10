import React from 'react';
import logo from '../logo.png';
import{Link} from 'react-router-dom'

const FirstView = () => {
    return ( 
        <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="btns_initial mt-5">
                  <Link to ="/breakfast" id="btn_waiter" className="btn btn-danger mr-5">MESERO</Link>
                  <Link to="/cocina" id="btn_kitchen" className="btn btn-danger ml-5">COCINA</Link>
                </div>
              </header>
            </div> 
            );
}
 
export default FirstView;


  