import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { asPrettyDate, asTwelveHourTimeString } from "../server/utils/date-time";
import { Grid, AppBar, Typography, } from "@mui/material";
import { filter_nh_Tables } from "./utils/filterTables";
import {formatNHBugTable, formatNHFishTable} from "./utils/formatNewHorizonTables"
import { pullNHbugs, pullNHfish } from "./utils/api";

const NewHorizonsDash = ({time,  month}) => {
    const params = useParams()
    const [bugTable, setBugTable] = useState([]);
    const [fishTable, setFishTable] = useState([])

    useEffect(() => {
        const  loadNhArrays = async () => {
            await pullNHfish(month)
                .then(response => {
                    if (params.hemisphere === 'north') {
                        setFishTable(formatNHFishTable(filter_nh_Tables(response.north, time, month, params.hemisphere), month, params.hemisphere))
                    } else if (params.hemisphere === 'south') {
                        setFishTable(formatNHFishTable(filter_nh_Tables(response.south, time, month, params.hemisphere), month, params.hemisphere))
                    }
                });
            await pullNHbugs(month)
                .then(response => {
                    if (params.hemisphere === 'north') {
                        setBugTable(formatNHBugTable(filter_nh_Tables(response.north, time, month, params.hemisphere), month, params.hemisphere))
                    } else if (params.hemisphere === 'south') {
                        setBugTable(formatNHBugTable(filter_nh_Tables(response.south, time, month, params.hemisphere), month, params.hemisphere))
                    }                  
                })
        }
        loadNhArrays();

    
    }, [params.hemisphere])

    return (
        <Grid container>
            <AppBar position="static" sx={{textAlign: "center", pb: "5px", pt: "5px"}}>
                <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                    Animal Crossing: New Horizons
                </Typography>
            </AppBar>
            <Grid item xs={12}>
                <Typography variant='h6' component='div' sx={{textAlign: 'center', mt: '15px'}}>
                    {params.hemisphere === 'north' ? "Northern" : 'Southern'} Hemisphere
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' component="div" sx={{textAlign: "center", mt: "5px", mb: "15px"}}>
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

export default NewHorizonsDash;