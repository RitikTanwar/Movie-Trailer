import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './login.css'
import Signup from './Signup'

function Login() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="login">
            <div className="login_background">
                <img src="data:image/jpeg;base64,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"
                    className="logo_image"
                    alt='back'
                />
                <button
                    onClick={() => setSignIn(true)}
                    className="signin_button"
                >
                    Sign In
                </button>
                <div className="login_gradient" />
            </div>
            <div className="login_body">
                {signIn ? (
                    <Signup />
                ) :
                    <>
                        <h1 className="head_1">Unlimited Movie Trailers and more...</h1>
                        <h2 className="head_2">Watch anywhere . Cancel it anytime</h2>
                        <h3 className="head_3">Ready to watch . Enter your email and start seeing trailers </h3>
                        <div className="login_input">
                            <form>
                                <input
                                    type="email"
                                    placeholder="Enter your Email Address"
                                />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className="login_started"
                                >Get Started</button>
                            </form>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Login
