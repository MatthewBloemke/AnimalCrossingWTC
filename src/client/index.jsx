import "core-js/stable"
import "regenerator-runtime/runtime"
import * as React from "react"
import {render} from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"


render(
    <App/>, 
    document.getElementById("app")
)