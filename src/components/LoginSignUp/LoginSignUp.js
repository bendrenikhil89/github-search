import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './LoginSignUp.css';
import log from '../../assets/images/log.svg';
import register from '../../assets/images/register.svg';
import { useGlobalContext } from '../../context/ContextData';

const elContainer = document.getElementsByClassName('container');
const signInToggle = e => {
    elContainer[0].classList.add('sign-in-mode');
    elContainer[0].classList.remove('sign-up-mode');
}

const signUpToggle = e => {
    elContainer[0].classList.add('sign-up-mode')
    elContainer[0].classList.remove('sign-in-mode');
}

const LoginSignUp = () => {
    const signInEmailRef = useRef();
    const signInPasswordRef = useRef();
    
    const signUpGithubNameRef = useRef();
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpPasswordConfirmRef = useRef();
    
    const {signUp, signIn} = useGlobalContext();
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function signUpHandler(e) {
        e.preventDefault();
        if(signUpPasswordRef.current.value !== signUpPasswordConfirmRef.current.value){
            return setError('Passwords do not match.');
        }
        try {
            setError('');
            setLoading(true)
            await signUp(signUpEmailRef.current.value, signUpPasswordRef.current.value, signUpGithubNameRef.current.value);
            setLoading(false);
            history.push('/');
        }
        catch {
            setLoading(false);
            setError('Failed to create an account.');
        }
    }

    async function signInHandler(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true)
            await signIn(signInEmailRef.current.value, signInPasswordRef.current.value);
            setLoading(false);
            history.push('/');
        }
        catch {
            setLoading(false);
            setError('Failed to sign in.');
        }
    }

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" ref={signInEmailRef} placeholder="Username" />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" ref={signInPasswordRef} placeholder="Password" />
                        </div>
                        <input type="submit" onClick={signInHandler} value="Login" className="btn solid" />
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" ref={signUpEmailRef} placeholder="Email" />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" ref={signUpPasswordRef} placeholder="Password" />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" ref={signUpPasswordConfirmRef} placeholder="Confirm Password" />
                        </div>
                        <div className="input-field">
                        <i className="fab fa-github"></i>
                        <input type="text" ref={signUpGithubNameRef} placeholder="Github Name" />
                        </div>
                        <input type="submit" disabled={loading} onClick={signUpHandler} className="btn" value="Sign up" />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Please click on the sign up button to register.
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={signUpToggle}>
                            Sign up
                        </button>
                    </div>
                    <img src={log} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Please click on the sign in button to continue.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={signInToggle}>
                            Sign in
                        </button>
                    </div>
                    <img src={register} className="image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
