import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Grid container textAlign="center">
            <Grid item xs={12} sx={{mt: "15px"}}>
                <Typography component="div" variant="h5">404 Not Found</Typography>
            </Grid>
            <Grid item xs={12} sx={{mt: '15px'}}>
                <Link to="/dashboard" style={{textDecoration: "none"}}><Button variant='contained'>Home</Button></Link>
            </Grid>
        </Grid>
    );
};

export default NotFound;