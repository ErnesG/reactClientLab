import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './Components/FilmDetails';
import PickSeats from './Components/PickSeats';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Movie And A Dinner</h1>
          <div>
          <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Login</a>
            <a href="#">Checkout</a>
          </div>
        </header>
        <p className="App-intro">
         <Login></Login>
        </p>
        <p className="App-intro">
         <LandingPage></LandingPage>
        </p>
        <p className="App-intro">
         <PickSeats></PickSeats>
        </p>
        <p className="App-intro">
         <Checkout></Checkout>
        </p>

      </div>
    );
  }
}

export default App;
