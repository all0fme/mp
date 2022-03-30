        import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
        import React, { useState } from 'react'
        import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";

import { app,analytics,db,auth,provider} from '../../firebase';
import './SignIn.css';

function SignIn() {

    const handleClick = async () => {
        
        console.log("okkkkkzzzzzz");


        await signInWithPopup(auth, provider)
          .then(async (result) => {
              console.log("okkkkk");
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const docRef = await setDoc(doc(db, "users",user.uid), {
                uid : user.uid
            });
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }   

    return (
        <div className='signIn'>
            <h2>Welcome Back !</h2>
            <p >Log in to your account</p>
            <input type='text' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
            <button onClick={handleClick} >Sign In</button>
            <a href="#">Forgot Password ?</a>
        </div>
    )
}

export default SignIn
