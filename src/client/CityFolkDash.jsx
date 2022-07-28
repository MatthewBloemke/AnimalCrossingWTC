import React, {useEffect, useState} from "react";
import { asPrettyDate, asTwelveHourTimeString, now, currentMonth } from "../server/utils/date-time";
import {formatBugTable, formatFishTable} from "./utils/formatInfoTables";
import { filterTables } from "./utils/filterTables";
import { AppBar, Grid, Typography,TextField, FormControl } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const CityFolkDash = ({bugs, fish}) => {
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
        setBugTable(formatBugTable(filterTables(bugs, time, month)));
        setFishTable(formatFishTable(filterTables(fish, time, month)));
    }, [activeDate]);

    return (
        <Grid container>
            <AppBar position="static" sx={{textAlign: "center", pb: "5px", pt: "5px"}}>
                <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                    Animal Crossing: City Folk
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
                <Typography variant='h6' component="div" sx={{textAlign: "center", mb: "15px"}}>
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

export default CityFolkDash;