import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route"

import Redirection from "./redirect"
import Login from "../pages/Login";
import Timeline from "../pages/Timeline";

const Routes = () =>{

    return(
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/feed" component={Timeline} isPrivate/>
            <Route component={Redirection} />
        </Switch>
    );

}

export default Routes;