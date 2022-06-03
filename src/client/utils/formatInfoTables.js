import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { asTwelveHourTimeString } from '../../server/utils/date-time';

export function formatBugTable (bugs) {
    const columns = [
        {field: 'bug_name', headerName: 'Bug Name', width: 150},
        {field: 'image', headerName: 'Image', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {field: 'location', headerName: 'Location', width: 150},
        {field: 'timeRange', headerName: 'Time', width: 150},
        {field: 'months', headerName: 'Months', width: 150},
    ]
    const rows = []
    for (let i = 0; i < bugs.length; i++) {
        let timeRange = "";
        if (bugs[i].catch_time_start === "0:00") {
            timeRange = "All day";
        } else {
            timeRange = `${asTwelveHourTimeString(bugs[i].catch_time_start)} - ${asTwelveHourTimeString(bugs[i].catch_time_end)}`;
        };
        rows.push(
            {id: bugs[i].bug_name, bug_name: bugs[i].bug_name, image: "Image Coming Soon", price: bugs[i].price, location: bugs[i].location, timeRange: timeRange, months: bugs[i].months_str}
            // <tr key={bugs[i].bug_name}>
            //     <td>{bugs[i].bug_name}</td>
            //     <td>Image coming soon</td>
            //     <td>{bugs[i].price}</td>
            //     <td>{bugs[i].location}</td>
            //     <td>{timeRange}</td>
            //     <td>{bugs[i].months_str}</td>
            // </tr>
        )
    }
    return (
        <div style = {{height: 500}}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </div>
    )
}

export function formatFishTable (fish) {
    const columns = [
        {field: 'fish_name', headerName: 'Fish Name', width: 150},
        {field: 'image', headerName: 'Image', width: 150},
        {field: 'shadow_size', headerName: "Shadow Size", width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {field: 'location', headerName: 'Location', width: 150},
        {field: 'timeRange', headerName: 'Time', width: 150},
        {field: 'months', headerName: 'Months', width: 150},
    ]
    const rows = []
    for (let i = 0; i<fish.length; i++) {
        let timeRange =""
        if (fish[i].catch_time_start === "0:00") {
            timeRange = "All day"
        } else {
            timeRange = `${asTwelveHourTimeString(fish[i].catch_time_start)} - ${asTwelveHourTimeString(fish[i].catch_time_end)}`
        }
        rows.push(
            {id: fish[i].fish_name, fish_name: fish[i].fish_name, image: "Image Coming Soon", price: fish[i].price, location: fish[i].location, timeRange: timeRange, months: fish[i].months_str}
            // <tr key={fish[i].fish_name}>
            //     <td>{fish[i].fish_name}</td>
            //     <td>Image coming soon</td>
            //     <td>{fish[i].price}</td>
            //     <td>{fish[i].shadow_size}</td>
            //     <td>{fish[i].location}</td>
            //     <td>{timeRange}</td>
            //     <td>{fish[i].months_str}</td>
            // </tr>
        )
    }
    return (
        <div style={{height: 500}}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </div>
    )
}