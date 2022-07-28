import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { asPrettyDate, asTwelveHourTimeString, now, currentMonth } from "../server/utils/date-time";
import { Grid, AppBar, Typography, FormControl, TextField} from "@mui/material";
import { filter_nh_Tables } from "./utils/filterTables";
import {formatNHBugTable, formatNHFishTable} from "./utils/formatNewHorizonTables";
import { pullNHbugs, pullNHfish } from "./utils/api";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const NewHorizonsDash = () => {
    const params = useParams();
    const [bugTable, setBugTable] = useState([]);
    const [fishTable, setFishTable] = useState([]);
    const [time, setTime] = useState(now());
    const [month, setMonth] = useState(currentMonth());
    const [activeDate, setActiveDate] = useState(new Date(Date.now()));

    const handleChange = (newDate) => {
        setMonth(newDate.getMonth()+1);
        setActiveDate(newDate);
    };

    const handleTimeChange = (newTime) => {
        setTime(newTime.getHours() + ":" + newTime.getMinutes());
        setActiveDate(newTime);
    };

    useEffect(() => {
        const  loadNhArrays = async () => {
            await pullNHfish(month)
                .then(response => {
                    if (params.hemisphere === 'north') {
                        setFishTable(formatNHFishTable(filter_nh_Tables(response.north, time, month, params.hemisphere), month, params.hemisphere));
                    } else if (params.hemisphere === 'south') {
                        setFishTable(formatNHFishTable(filter_nh_Tables(response.south, time, month, params.hemisphere), month, params.hemisphere));
                    }
                });
            await pullNHbugs(month)
                .then(response => {
                    if (params.hemisphere === 'north') {
                        setBugTable(formatNHBugTable(filter_nh_Tables(response.north, time, month, params.hemisphere), month, params.hemisphere));
                    } else if (params.hemisphere === 'south') {
                        setBugTable(formatNHBugTable(filter_nh_Tables(response.south, time, month, params.hemisphere), month, params.hemisphere));
                    }                  
                });
        };
        loadNhArrays();

    
    }, [params.hemisphere, activeDate]);

    return (
        <Grid container>
            <AppBar position="static" sx={{textAlign: "center", pb: "5px", pt: "5px"}}>
                <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                    Animal Crossing: New Horizons
                </Typography>
            </AppBar>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{mt:"20px"}}>
                <Grid container justifyContent="space-evenly" direction="row">
                    <FormControl sx={{width: "10%", minWidth: "250px", height: "65px", marginBottom: "10px"}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Date"
                                value={activeDate}
                                name="date"
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>                    
                    <FormControl sx={{width: "10px", minWidth: "250px", height: "65px"}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                label="Time"
                                value={activeDate}
                                onChange={handleTimeChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' component='div' sx={{textAlign: 'center'}}>
                    {params.hemisphere === 'north' ? "Northern" : 'Southern'} Hemisphere
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' component="div" sx={{textAlign: "center", mt: "5px", mb: "15px"}}>
                    {asPrettyDate(activeDate)}, {asTwelveHourTimeString(time)}
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
    );
};

export default NewHorizonsDash;