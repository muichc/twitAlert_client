import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { useRecoilValue } from 'recoil'
import{ loggedInState } from '../recoil/selectors'

import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Register from '../pages/Register'
import Login from '../pages/Login';

const Routes = () => {
    const loggedIn = useRecoilValue(loggedInState)

    return (
        <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='/login' component = { Login } />
            <Route exact path = '/register' component = { Register } />
            { loggedIn && (
                <Switch> 
                    <Route exact path='/user/dashboard' component={ Dashboard }/>
                    <Route exact path='/user/profile' component = { Profile } />
                    <Route exact path='/user/profile/edit' component = { EditProfile } />
                </Switch>
            )}
        </Switch>
    );
}

export default Routes;

