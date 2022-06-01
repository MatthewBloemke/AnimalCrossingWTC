import React from 'react'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import { Collapse, ImageListItem } from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const SideMenu = ({closeDrawer}) => {
    return (
        <List component="nav">
            <ListItemButton divider onClick={closeDrawer} component={Link} to="/cityfolk">
                <ListItemText primary="City Folk"/>
            </ListItemButton>
            <Divider/>
            <ListItemButton divider onClick={closeDrawer} component={Link} to="/newhorizons/northern">
                <ListItemText primary="New Horizons: Northern Hemisphere"/>
            </ListItemButton>
            <ListItemButton divider onClick={closeDrawer} component={Link} to="/newhorizons/southern">
                <ListItemText primary="New Horizons: Southern Hemisphere"/>
            </ListItemButton>
        </List>
    )
}

export default SideMenu;