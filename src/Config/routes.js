import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Profile from '../layout/Profile';
import LoginWindow from '../layout/LoginWindow';
import RegisterWindow from '../layout/RegisterWindow';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login'
                render={
                    () => props.user ?
                    <Redirect to='/' />
                    :  
                    <LoginWindow login={props.login} />
                }
            />
            <Route path='/register' 
                render={
                    () => props.user ?
                    <Redirect to='/users' />
                    :
                    <RegisterWindow register={props.register} />
                }
            />
            <Route path='/users' component={Profile} />
        </Switch>
    )
}

export default Routes;