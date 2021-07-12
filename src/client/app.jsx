import React from 'react';
import CityFolkDash from './CityFolkDash';
import Dashboard from './Dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import {today, now, currentMonth} from "../server/utils/date-time"
const cf_bugs = require("../server/db/00-cf_bugs.json")
const App = () => {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <Redirect to={"/dashboard"}/>
            </Route>
            <Route path="/dashboard" exact={true}>
                <Dashboard/>
            </Route>
            <Route path="/cityfolk" exact={true}>
                <CityFolkDash date={today()} time={now()} month={currentMonth()} bugs = {cf_bugs}/>
            </Route>            
        </Switch>

    )
}

export default App;