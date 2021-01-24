import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// React-icons
import { BsBuilding } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h1> Hello {user.given_name}< br/><BsBuilding /> Welcome To the Justice Community <RiCommunityLine /></h1>
            </div>
        )
    )
}

export default Profile