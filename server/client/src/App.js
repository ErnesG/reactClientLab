import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './Components/FilmDetails';
import PickSeats from './Components/PickSeats';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
          <Switch>
            <Route exact path="/landing" component={LandingPage} />
            <Route exact path="/pickseats/:showing_id" exact component={PickSeats} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/filmdetails" component={FilmDetails} />
            <Redirect from='/' to='/login' />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
