import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { useRecoilValue } from 'recoil'
import{ loggedInState } from '../recoil/selectors'

import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes = () => {
    const loggedIn = useRecoilValue(loggedInState)

    return (
        <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='/login' component = { Login } />
            { loggedIn && (
                <Switch> 
                    <Route exact path='/user/dashboard' component={ Dashboard }/>
                </Switch>
            )}
        </Switch>
    );
}

export default Routes;

