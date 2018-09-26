import React from 'react';

const login = () => {
    return (
        <div className="mdl-grid">

            <div class="mdl-cell mdl-cell--4-col"></div>
            <div class="mdl-cell mdl-cell--4-col">
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h1>Log in</h1>

                    </div>

                    <br />
                    <label>Enter your email</label>
                    <br />
                    <input type="text" name="email" className="mdl-textfield__input" />
                    <br />
                    <label>Enter your password</label>
                    <br />
                    <input type="password" name="pass" className="mdl-textfield__input" />
                    <br />
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Login
                       </a>
                    </div>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--4-col"></div>
        </div>

    );
}
export default login;