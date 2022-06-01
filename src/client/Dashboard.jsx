import React, { useState } from "react";
import {Link} from "react-router-dom"
import {AppBar, Grid, IconButton, Toolbar, Typography, MenuItem, Menu, Drawer, useMediaQuery, Avatar, Divider, Button} from '@mui/material';


const Dashboard = () => {

    return (
        <main>
            <Grid container justifyContent="center" >
                <Link style={{textDecoration: "none"}} to="/cityfolk"><Button sx={{marginBottom: "15px", marginRight: "15px"}} variant="contained">Animal Crossing: City Folk</Button></Link>
                <Link to="/newhorizons/northern" style={{textDecoration: "none"}}><Button variant="contained">Animal Crossing: New Horizons</Button></Link>             
            </Grid>            
        </main>
    )
}

export default Dashboard;