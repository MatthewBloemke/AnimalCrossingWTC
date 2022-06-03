export function filterTables (array, time, month) {
    const arrFilteredByMonth = array.filter(item => item.months_array.includes(month))
    const tempArr = [];
    for (let i = 0; i < arrFilteredByMonth.length; i++) {
        if (arrFilteredByMonth[i].catch_time_end > arrFilteredByMonth[i].catch_time_start) {
            if (time > arrFilteredByMonth[i].catch_time_start && time < arrFilteredByMonth[i].catch_time_end) {
                tempArr.push(arrFilteredByMonth[i])
            }
        } else {
            if (time > arrFilteredByMonth[i].catch_time_start || time < arrFilteredByMonth[i].catch_time_end) {
                tempArr.push(arrFilteredByMonth[i])
            }
        }
    }
    console.log(tempArr)
    return tempArr
}