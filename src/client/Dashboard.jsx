import React from "react";
import {Link} from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <h1>Choose the game</h1>
            <Link to="/cityfolk"><button>Animal Crossing: City Folk</button></Link>
            <button>Animal Crossing: New Horizons</button>
        </div>
    )
}

export default Dashboard;