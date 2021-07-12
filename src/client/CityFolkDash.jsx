import React, {useEffect, useState} from "react";
import { asTwelveHourTimeString } from "../server/utils/date-time";
import {formatBugTable} from "./layout/formatInfoTables"

const CityFolkDash = ({date, time, bugs, month}) => {
    const bugsFilteredByMonth = bugs.filter(bug => bug.months_array.includes(month))
    const [filteredBugs, setFilteredBugs] = useState([]);
    const [bugTable, setBugTable] = useState([]);
    
    const clicked = () => {
        console.log(asTwelveHourTimeString("11:50"))
    }

    useEffect(() => {
        filterBugsByTime(bugsFilteredByMonth)
    }, [])

    const filterBugsByTime = (bugs) => {
        console.log("time to filter")
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
        tempBugArr.sort((a, b) => b.price - a.price)
        setBugTable(formatBugTable(tempBugArr))
        setFilteredBugs(tempBugArr)
    }

    console.log("filtered", filteredBugs)
    return (
        <div>
            <h1>City Folk</h1>
            <p>{date}, {time}, {bugs[0].bug_name}</p>
            {bugTable}
            <button onClick={clicked}>Button</button>
        </div>
    )
}

export default CityFolkDash;