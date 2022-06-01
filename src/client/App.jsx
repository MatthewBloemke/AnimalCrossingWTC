import React from 'react';
import CityFolkDash from './CityFolkDash';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {today, now, currentMonth} from "../server/utils/date-time"
import NewHorizonsDash from './NewHorizonsDash';
const cf_bugs = require("../server/db/00-cf_bugs.json")
const cf_fish = require("../server/db/01-cf_fish.json")
const nh_n_fish = require("../server/db/02-nh_n_fish.json")
import { ThemeProvider, createTheme } from '@mui/material/styles'


const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
            light: '#63a4ff',
            dark: '#004ba0',
            contrastText: "#fff"
        },
        secondary: {
            light: '#ab4fff',
            main: '#7517d1',
            dark: '#3c009f',
            contrastText: '#fff',
        }
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Dashboard/>
                    </Route>
                </Switch>            
            </Router>            
        </ThemeProvider>

    )
}

export default App;