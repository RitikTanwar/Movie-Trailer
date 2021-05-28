import React, { useRef } from 'react'
import './signup.css'
import { auth } from './firebase';

function Signup() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        })
            .catch((err) => {
                alert(err.message);
            })
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        })
            .catch((err) => alert(err.message));
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>SignIn</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>SignIn</button>
                <h4><span className="sign_gray">New to This?</span><span className="sign_link" onClick={register}>Sign Up now </span></h4>
            </form>
        </div>
    )
}

export default Signup
