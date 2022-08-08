import React from "react";
import {Link} from "react-router-dom";
import {Grid, Button, Card, CardContent, Typography} from '@mui/material';


const Dashboard = () => {

    return (
        <main>
            <Grid container textAlign="center">
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Card elevation={12} sx={{width: "80%", mt: "10px"}}>
                            <CardContent>
                                <Typography variant='body1' component="div">
                                    Welcome to Animal Crossing: What's the Catch? 
                                    This websites purpose is to display the current catchable fish and bugs at a given time
                                    It starts with your PC's current time, but can be changed to any time. Choose one of the games
                                    to begin!
                                </Typography>
                            </CardContent>
                        </Card>                        
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {6} sx={{mt:'15px'}}>
                    <Link style={{textDecoration: "none"}} to="/cityfolk"><Button variant="contained">Animal Crossing: City Folk</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {6} sx={{mt:'15px'}}>
                    <Link to="/newhorizons/north" style={{textDecoration: "none"}}><Button variant="contained">New Horizons: North</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md= {6} lg = {6} sx={{mt:'15px'}}>
                    <Link to="/newhorizons/south" style={{textDecoration: "none"}}><Button variant="contained">New Horizons: South</Button></Link>
                </Grid>          
            </Grid>            
        </main>
    );
};

export default Dashboard;
