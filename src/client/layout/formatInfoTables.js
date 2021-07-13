import React from 'react';
import { asTwelveHourTimeString } from '../../server/utils/date-time';

export function formatBugTable (bugs) {
    const formattedTable = []
    for (let i = 0; i<bugs.length; i++) {
        let timeRange =""
        if (bugs[i].catch_time_start === "0:00") {
            timeRange = "All day"
        } else {
            timeRange = `${asTwelveHourTimeString(bugs[i].catch_time_start)} - ${asTwelveHourTimeString(bugs[i].catch_time_end)}`
        }
        formattedTable.push(
            <tr key={bugs[i].bug_name}>
                <td>{bugs[i].bug_name}</td>
                <td>Image coming soon</td>
                <td>{bugs[i].price}</td>
                <td>{bugs[i].location}</td>
                <td>{timeRange}</td>
                <td>{bugs[i].months_str}</td>
            </tr>
        )
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Bug Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Months</th>
                </tr>                
            </thead>
            <tbody>
                {formattedTable}
            </tbody>
        </table>
    )
}