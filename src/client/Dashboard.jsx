import React from "react";
import {Link} from "react-router-dom"
import {Grid, Button} from '@mui/material';


const Dashboard = () => {

    return (
        <main>
            <Grid container textAlign="center" sx={{mt: "15px"}}>
                <Grid item xs={12} sm={6} md= {6} lg = {6}>
                    <Link style={{textDecoration: "none", marginBottom: "15px"}} to="/cityfolk"><Button variant="contained">Animal Crossing: City Folk</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {6}>
                    <Link to="/newhorizons/northern" style={{textDecoration: "none"}}><Button disabled="disabled" variant="contained">Animal Crossing: New Horizons</Button></Link>
                </Grid>
                           
            </Grid>            
        </main>
    )
}

export default Dashboard;
