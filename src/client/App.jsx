import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './layout/Layout';


const theme = createTheme({
    palette: {
        primary: {
            main: "#27df19",
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Layout/>
                    </Route>
                </Switch>            
            </Router>            
        </ThemeProvider>
    );
};

export default App;