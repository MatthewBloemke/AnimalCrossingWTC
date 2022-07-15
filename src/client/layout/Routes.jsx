import React from 'react';
import CityFolkDash from '../CityFolkDash';
import Dashboard from '../Dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import {today, now, currentMonth} from "../../server/utils/date-time"
import NewHorizonsDash from '../NewHorizonsDash';
import { pullNHfish } from '../utils/api';
const cf_bugs = require("../../server/db/00-cf_bugs.json");
const cf_fish = require("../../server/db/01-cf_fish.json");
const nh_n_fish = require("../../server/db/02-nh_n_fish.json")
pullNHfish()
    .then(console.log);


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
                <CityFolkDash date={today()} time={now()} month={currentMonth()} bugs = {cf_bugs} fish = {cf_fish}/>
            </Route>
            <Route path="/newhorizons/:hemisphere">
                <NewHorizonsDash date={today()} time={now()} month={currentMonth()} fish = {nh_n_fish} bugs = {[]}/>
            </Route>        
        </Switch>

    )
}

export default Routes;