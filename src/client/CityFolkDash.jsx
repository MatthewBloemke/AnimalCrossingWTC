import React, {useEffect, useState} from "react";
import { asTwelveHourTimeString } from "../server/utils/date-time";
import {formatBugTable} from "./layout/formatInfoTables"

const CityFolkDash = ({date, time, bugs, month}) => {
    const bugsFilteredByMonth = bugs.filter(bug => bug.months_array.includes(month))
    const [bugTable, setBugTable] = useState([]);
    const [filterCondition, setFilterCondition] = useState("price")
    const onChange = (event) => {
        setFilterCondition(event.target.value)
    }

    useEffect(() => {
        filterBugsByTime(bugsFilteredByMonth, filterCondition)
    }, [filterCondition])

    const filterBugsByTime = (bugs, filterBy) => {
        const tempBugArr = [];
        for (let i = 0; i < bugs.length; i++) {
            if (bugs[i].catch_time_end > bugs[i].catch_time_start) {
                if (time > bugs[i].catch_time_start && time < bugs[i].catch_time_end) {
                    tempBugArr.push(bugs[i])
                }
            } else {
                if (time > bugs[i].catch_time_start || time < bugs[i].catch_time_end) {
                    tempBugArr.push(bugs[i])
                }
            }
        }
        if (filterBy === "price") {
            tempBugArr.sort((a, b) => b[filterBy] - a[filterBy])  
        } else {
            tempBugArr.sort((a, b) => {
                return a[filterBy].toLowerCase().localeCompare(b[filterBy].toLowerCase())
            })
        }
        setBugTable(formatBugTable(tempBugArr))
    }

    return (
        <div>
            <h1>City Folk</h1>
            <p>{date}, {time}</p>
            <select name="filter" id="filter" onChange={onChange}>
                <option value="price">Price</option>
                <option value="location">Location</option>
                <option value="bug_name">Bug name</option>
            </select>
            {bugTable}
        </div>
    )
}

export default CityFolkDash;