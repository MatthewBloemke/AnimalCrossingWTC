import React from 'react';
import CityFolkDash from '../CityFolkDash';
import Dashboard from '../Dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewHorizonsDash from '../NewHorizonsDash';
import NotFound from './NotFound';
const cf_bugs = require("../../server/db/00-cf_bugs.json");
const cf_fish = require("../../server/db/01-cf_fish.json");




const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <Redirect to={"/dashboard"}/>
            </Route>
            <Route path="/dashboard" exact={true}>
                <Dashboard/>
            </Route>
            <Route path="/cityfolk" exact={true}>
                <CityFolkDash bugs = {cf_bugs} fish = {cf_fish}/>
            </Route>
            <Route path="/newhorizons/:hemisphere">
                <NewHorizonsDash />
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
};

export default Routes;