import React, { useState } from "react";
import {AppBar, Grid, IconButton, Toolbar, Typography, Drawer} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from "../SideMenu";
import Routes from "../layout/Routes";
import "./layout.css";

const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <main>
            <Grid container justifyContent="center" >
                <Grid item xs={12}>
                    <AppBar position="static" sx={{backgroundColor: '#00ac00', paddingTop: "10px"}}></AppBar>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{marginRight: "10px"}}
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                                Animal Crossing: What's The Catch
                            </Typography>
                            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <SideMenu closeDrawer={closeDrawer}/>
                            </Drawer>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <Routes/>
                </Grid>
            </Grid>            
        </main>
    );
};

export default Layout;