import React, { useState } from "react";
import {Link} from "react-router-dom"
import {AppBar, Grid, IconButton, Toolbar, Typography, MenuItem, Menu, Drawer, useMediaQuery, Avatar, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from "../SideMenu";
import Routes from "../layout/Routes";
import "./layout.css"


const Layout = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <main>
            <Grid container justifyContent="center" >
                <AppBar position="static" sx={{marginBottom: "25px"}}>
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
                <Grid item xs={12}>
                    <Routes/>
                </Grid>
            </Grid>            
        </main>

        // <div>
        //     <h1>Choose the game</h1>
        //     <Link to="/cityfolk"><button>Animal Crossing: City Folk</button></Link>
        //     <Link to="/newhorizons/northern"><button>Animal Crossing: New Horizons</button></Link>
        // </div>
    )
}

export default Layout;