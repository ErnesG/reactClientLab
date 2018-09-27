import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './Components/FilmDetails';
import PickSeats from './Components/PickSeats';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';
import {BrowserRouter,Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
class App extends Component {
  render() {

    return (
      <BrowserRouter>
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
          <Route path="/" exact component={LandingPage}/>
          <Route path="/pickseats" exact component={PickSeats}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/checkout" exact component={Checkout}/>
          <Route component={NotFound}/>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
