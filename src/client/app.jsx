import React from 'react';
import CityFolkDash from './CityFolkDash';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact="true">
                <Dashboard/>
            </Route>
            <Route path="/cityfolk">
                <CityFolkDash/>
            </Route>            
        </Switch>

    )
}

export default App;