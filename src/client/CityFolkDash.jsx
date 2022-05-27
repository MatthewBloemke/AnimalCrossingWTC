import React, {useEffect, useState} from "react";
import { asPrettyDate, asTwelveHourTimeString } from "../server/utils/date-time";
import {formatBugTable, formatFishTable} from "./layout/formatInfoTables"

const CityFolkDash = ({time, bugs, month, fish}) => {
    const bugsFilteredByMonth = bugs.filter(bug => bug.months_array.includes(month))
    const fishFilteredByMonth = fish.filter(single_fish => single_fish.months_array.includes(month))
    const [bugTable, setBugTable] = useState([]);
    const [fishTable, setFishTable] = useState([])
    const [filterCondition, setFilterCondition] = useState("price")
    const onChange = (event) => {
        setFilterCondition(event.target.value)
    }

    useEffect(() => {
        filterBugsByTime(bugsFilteredByMonth, filterCondition)
        filterFishByTime(fishFilteredByMonth, filterCondition)
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
    const filterFishByTime = (fish, filterBy) => {
        const tempFishArr = [];
        for (let i = 0; i < fish.length; i++) {
            if (fish[i].catch_time_end > fish[i].catch_time_start) {
                if (time > fish[i].catch_time_start && time < fish[i].catch_time_end) {
                    tempFishArr.push(fish[i])
                }
            } else {
                if (time > fish[i].catch_time_start || time < fish[i].catch_time_end) {
                    tempFishArr.push(fish[i])
                }
            }
        }
        if (filterBy === "price") {
            tempFishArr.sort((a, b) => b[filterBy] - a[filterBy])  
        } else {
            tempFishArr.sort((a, b) => {
                return a[filterBy].toLowerCase().localeCompare(b[filterBy].toLowerCase())
            })
        }
        setFishTable(formatFishTable(tempFishArr))
    }

    return (
        <div>
            <h1>City Folk</h1>
            <p>{asPrettyDate()}, {asTwelveHourTimeString(time)}</p>
            <select name="filter" id="filter" onChange={onChange}>
                <option value="price">Price</option>
                <option value="location">Location</option>
                <option value="bug_name">Bug name</option>
            </select>
            {bugTable}
            {fishTable}
        </div>
    )
}

export default CityFolkDash;