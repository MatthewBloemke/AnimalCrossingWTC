import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const renderImage = (params) => {
    return <img style={{height: "64px", width: "64px"}} src={params.row.id}/>
}

export function formatNHBugTable (bugs, month, hemisphere) {
    const columns = [
        {field: 'image', headerName: '', renderCell: renderImage, minWidth: 64, flex: 2, align: "center"},
        {field: 'bug_name', headerName: 'Bug Name', minWidth: 115, flex: 2},
        {field: 'nookPrice', headerName: 'Nook Price', minWidth: 65, flex: 2},
        {field: 'flickPrice', headerName: 'Flick Price', minWidth: 65, flex: 2},
        {field: 'location', headerName: 'Location', minWidth: 185, flex: 2},
        {field: 'timeRange', headerName: 'Time', minWidth: 140, flex: 2},
        {field: 'months', headerName: 'Months', minWidth: 190, flex: 2},
    ]
    const rows = []
    for (let i = 0; i < bugs.length; i++) {
        rows.push(
            {id: bugs[i].image_url, bug_name: bugs[i].name, nookPrice: bugs[i].sell_nook, flickPrice: bugs[i].sell_flick, location: bugs[i].location, timeRange: bugs[i][hemisphere].times_by_month[month], months: bugs[i][hemisphere].months}
        )
    }
    return (
        <div style = {{height: 500}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[50]}
            />
        </div>
    )
}

export function formatNHFishTable (fish, month, hemisphere) {
    const columns = [
        {field: 'image', headerName: '', renderCell: renderImage, minWidth: 64, flex: 2, align: "center"},
        {field: 'fish_name', headerName: 'Fish Name', minWidth: 115, flex: 2},
        {field: 'cjPrice', headerName: 'CJ Price', minWidth: 65, flex: 2},
        {field: 'nookPrice', headerName: 'Nook Price', minWidth: 65, flex: 2},
        {field: 'shadow_size', headerName: "Shadow Size", minWidth: 120, flex: 2},
        {field: 'location', headerName: 'Location', minWidth: 185, flex: 2},
        {field: 'timeRange', headerName: 'Time', minWidth: 140, flex: 2},
        {field: 'months', headerName: 'Months', minWidth: 190, flex: 2},
    ]
    const rows = []
    for (let i = 0; i<fish.length; i++) {
        rows.push(
            {id: fish[i].image_url, fish_name: fish[i].name, cjPrice: fish[i].sell_cj, nookPrice: fish[i].sell_nook, shadow_size: fish[i].shadow_size, location: fish[i].location, timeRange: fish[i][hemisphere].times_by_month[month] , months: fish[i][hemisphere].months}
        )
    }
    return (
        <div style={{height: 500}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[50]}
            />
        </div>
    )
}