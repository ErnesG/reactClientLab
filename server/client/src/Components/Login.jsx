import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const divStyle = {
    margin: '40px',
    border: '5px solid blue'
  };

const labelStyle = {
    color: "blue"
};


const login = (props) => {
    console.log(props);

    const loginIn = () => {
        console.log('logging in');
        props.history.push('/landing');
    }

    return (
        // <div style={divStyle}>
        <div className="mdl-grid" style={divStyle}>

            <div className="mdl-cell mdl-cell--4-col"></div>
            <div className="mdl-cell mdl-cell--4-col">
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h1>Log in</h1>

                    </div>

                    <br />
                    <label style={labelStyle}>Enter your email</label>
                    <br />
                    <input type="text" name="email" className="mdl-textfield__input" />
                    <br />
                    <label style={labelStyle}>Enter your password</label>
                    <br />
                    <input type="password" name="pass" className="mdl-textfield__input" />
                    <br />

                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => loginIn()}>Login</button>
                    
                </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col"></div>
        </div>
        // </div>
    );
}


export default login;