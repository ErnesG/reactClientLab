import React from 'react';

const login = ()=>{
    return (
        <div>
            <h1>Log in</h1>

            <br/>
            <label>Enter your email</label>
            <br/>
            <input type="text" name="email" />
            <br/>
            <label>Enter your password</label>
            <br/>
            <input type="password" name="pass" />
            <br/>
            <button>
                Login
            </button>
        </div>

    );
}
export default login;