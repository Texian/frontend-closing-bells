import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import LoginContainer from '../containers/LoginContainer';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' 
                render={
                    () => props.user ?
                    <Redirect to='/users' />
                    :
                    <LoginContainer register={props.register} />
                }
            />
            <Route path='/login'
                render={
                    () => props.user ?
                    <Redirect to='/' />
                    :  
                    <LoginContainer login={props.login} />
                }
            />
        </Switch>
    )
}

export default Routes;