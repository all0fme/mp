import React, { useState } from 'react'

import './SignIn.css';

function SignIn() {


    return (
        <div className='signIn'>
            <h2>Welcome Back !</h2>
            <p >Log in to your account</p>
            <input type='text' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
            <button >Sign In</button>
            <a href="#">Forgot Password ?</a>
        </div>
    )
}

export default SignIn
