import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { loginGoogle, logoutGoogle } from '../../service/fetchService';

const HomePage = () => {
    
    const [text, setText] = useState("")

    useEffect(() => {
        loginGoogle()
        .then((response) => {
            console.log("Response: ")
            console.log(response)
            setText(response.User)
        })
        .catch((error) => console.log("Error retrieving Input"))
        .finally(() => {
        });
}, []);
    

    function loginOAuth(){
        loginGoogle()
        .then((response) => {
            console.log("Dato:");
            console.log(response);
            setText(response.User)
        })
        .catch((error) => console.log("Error retrieving Input"+error))
        .finally(() => {
        });
    }
    
    function logoutOAuth(){
        logoutGoogle()
        .then((response) => {
            console.log("Dato:");
            console.log(response);
            setText("")
        })
        .catch((error) => console.log("Error retrieving Input"+error))
        .finally(() => {
        });
    }
    
    return (
        <div className='homePage fadeEffect'>
            <h1>{text}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <h4><a href="http://localhost:8080/oauth2/authorization/google">Login with Google</a></h4>
            {/* <button onClick={loginOAuth}>Login</button> */}
            <button onClick={logoutOAuth}>Logout</button>
        </div>
    );
}

export default HomePage;
