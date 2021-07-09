import "core-js/stable"
import "regenerator-runtime/runtime"
import * as React from "react"
import {render} from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Dashboard from "./Dashboard"

render(
    <React.StrictMode>
        <Router>
            <Dashboard/>
        </Router>        
    </React.StrictMode>, 
    document.getElementById("app")
)