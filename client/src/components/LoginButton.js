import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className = "logContainer">

                <button className="logBtn" onClick={() => loginWithRedirect()}>
                    Log In
                </button>

            </div>
        )
    )
}

export default LoginButton