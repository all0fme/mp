import React, { useState } from 'react'
import './SignUp.css';

function SignUp() {

    return (
        <div className='signUp'>
            <h2>Create your Account</h2>
            <p>Connect with your NITP family</p>
            <input type="text" placeholder='Name' />
            <input type='email' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
            <button >Sign Up</button>
        </div>
    )
}

export default SignUp
