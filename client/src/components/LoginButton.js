import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// React-icons
import { BsBuilding } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="container text-right">

                <button type="button" className="logBtn btn btn-primary" onClick={() => loginWithRedirect()}>
                    Log In
                </button>

                <div>
                <h1><BsBuilding /> Welcome To the Justice Community <RiCommunityLine /></h1>
            </div>

            </div>
        )
    )
}

export default LoginButton