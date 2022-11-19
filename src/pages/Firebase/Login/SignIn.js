import React from 'react';
import app from '../Firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);

function SignIn() {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    )
}

export default SignIn;
