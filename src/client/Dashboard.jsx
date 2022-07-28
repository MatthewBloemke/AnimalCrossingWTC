import React from "react";
import {Link} from "react-router-dom";
import {Grid, Button} from '@mui/material';


const Dashboard = () => {

    return (
        <main>
            <Grid container textAlign="center">
                <Grid item xs={12} sm={6} md= {6} lg = {6} sx={{mt:'15px'}}>
                    <Link style={{textDecoration: "none"}} to="/cityfolk"><Button variant="contained">Animal Crossing: City Folk</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {6} sx={{mt:'15px'}}>
                    <Link to="/newhorizons/north" style={{textDecoration: "none"}}><Button variant="contained">Animal Crossing: New Horizons</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {6} sx={{mt:'15px'}}>
                    <Link to="/newhorizons/south" style={{textDecoration: "none"}}><Button variant="contained">Animal Crossing: New Horizons</Button></Link>
                </Grid>          
            </Grid>            
        </main>
    );
};

export default Dashboard;
