import React from 'react';
import "./Login.css";
import {Button} from '@material-ui/core';
import logo from "./chat-logo-design_93835-108.jpg";
import { auth , provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
const [state , dispatch] = useStateValue();
   const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type : actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error =>{
            alert(error.message);
        });
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="Chat Logo"/>
                <h1>Sign in to Connect</h1>
                <Button onClick={signIn}> SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login;
