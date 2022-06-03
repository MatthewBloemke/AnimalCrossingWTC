import React, {useEffect, useState} from "react";
import { asPrettyDate, asTwelveHourTimeString } from "../server/utils/date-time";
import {formatBugTable, formatFishTable} from "./utils/formatInfoTables"
import { filterTables } from "./utils/filterTables";
import { AppBar, Grid, Typography } from "@mui/material";


const CityFolkDash = ({time, bugs, month, fish}) => {
    const [bugTable, setBugTable] = useState([]);
    const [fishTable, setFishTable] = useState([])

    useEffect(() => {
        setBugTable(formatBugTable(filterTables(bugs, time, month)))
        setFishTable(formatFishTable(filterTables(fish, time, month)))
    }, [])

    return (
        <Grid container>
            <AppBar position="static" sx={{textAlign: "center", pb: "5px", pt: "5px"}}>
                <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                    Animal Crossing: City Folk
                </Typography>
            </AppBar>
            <Grid item xs={12}>
                <Typography variant='h6' component="div" sx={{textAlign: "center", mt: "15px", mb: "15px"}}>
                    {asPrettyDate()}, {asTwelveHourTimeString(time)}
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Grid container sx={{justifyContent: "center"}}>
                    <Grid item sx={{width: "80%"}}>
                        {bugTable}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{mt: "15px", mb: "15px"}}>
                <Grid container sx={{justifyContent: "center"}}>
                    <Grid item sx={{width: "80%"}}>
                        {fishTable}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CityFolkDash;