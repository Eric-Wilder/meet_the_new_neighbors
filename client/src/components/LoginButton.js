import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="container text-right">

                <button type="button" className="btn btn-primary" onClick={() => loginWithRedirect()}>
                    Log In
                </button>

            </div>
        )
    )
}

export default LoginButton