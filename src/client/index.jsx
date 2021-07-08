import "core-js/stable"
import "regenerator-runtime/runtime"
import * as React from "react"
import {render} from "react-dom"
import Dashboard from "./Dashboard"

render(<Dashboard/>, document.getElementById("app"))