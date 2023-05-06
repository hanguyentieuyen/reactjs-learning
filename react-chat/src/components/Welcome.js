import React from "react";
import GoogleSignin from "../img/btn_google.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    return(
        <main className="welcome">
            <h2>Welcome to React</h2>
            <img src="" alt="React JS logo" width={50} height={50}/>
            <p>Sign in with Google</p>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign with google"
                    type="button"
                />
            </button>
        </main>
    )
}

export default Welcome