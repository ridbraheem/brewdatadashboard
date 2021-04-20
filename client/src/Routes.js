import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Dashboard from "./user/Dashboard";
import PrivateRoute from './auth/PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;