import React from 'react';
import {userState} from '../recoil/atoms';
import {useRecoilValue} from 'recoil';
import {Link} from 'react-router-dom';

const Profile = () => {
    const user =useRecoilValue(userState)
    console.log("are you not getting here", user);
    return (
        <div>
            <p>Username: {user.username} </p>
            <p>Email: {user.email}</p>
            <p>Location: {user.locationName ? user.locationName : user.location }</p>
            <Link to={'/user/profile/edit'}>Edit</Link>
        </div>
    );
}

export default Profile;
