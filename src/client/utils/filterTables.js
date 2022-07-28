export function filterTables (array, time, month) {
    const arrFilteredByMonth = array.filter(item => item.months_array.includes(month));
    const tempArr = [];
    for (let i = 0; i < arrFilteredByMonth.length; i++) {
        if (arrFilteredByMonth[i].catch_time_end > arrFilteredByMonth[i].catch_time_start) {
            if (time > arrFilteredByMonth[i].catch_time_start && time < arrFilteredByMonth[i].catch_time_end) {
                tempArr.push(arrFilteredByMonth[i]);
            };
        } else {
            if (time > arrFilteredByMonth[i].catch_time_start || time < arrFilteredByMonth[i].catch_time_end) {
                tempArr.push(arrFilteredByMonth[i]);
            };
        };
    };
    return tempArr;
};

export function filter_nh_Tables (array, time, month, hemisphere) {
    const tempArr = [];
    for (let i = 0; i < array.length; i++) {
        const tempItem = array[i];
        
        const tempTime = tempItem[hemisphere].times_by_month[month];
        if (tempTime.includes('&')) {
            tempTime = tempTime.split(' & ');
            for (let j = 0; j < tempTime.length; j++) {
                tempTime[j] = tempTime[j].split(' – ');
            };
        } else if (tempTime.includes('–')) {
            tempTime = [tempTime.split(' – ')];
        } else if (tempTime.includes('-')) {
            tempTime = [tempTime.split(' - ')];
        } else if (tempTime === 'All day') {
            tempArr.push(tempItem);
        };

        const timeItem = [];

        for (let k = 0; k < tempTime.length; k++) {
            let tempTimeStart = '';
            let tempTimeEnd = '';
            if (tempTime != "All day" && tempTime != 'NA') {
                if (tempTime[k][0].includes('AM')) {
                    tempTimeStart = `${tempTime[k][0][0]}:00`;
                } else if (tempTime[k][0].includes("PM")) {
                    tempTimeStart = `${Number(tempTime[k][0][0])+12}:00`;
                };
                if (tempTime[k][1].includes('AM')) {
                    tempTimeEnd = `${tempTime[k][1][0]}:00`;
                } else if (tempTime[k][1].includes("PM")) {
                    tempTimeEnd = `${Number(tempTime[k][1][0])+12}:00`;
                };
                timeItem.push({
                    catch_time_start: tempTimeStart,
                    catch_time_end: tempTimeEnd
                });          
            };
        };
        for (let l = 0; l < timeItem.length; l++) {
            if (timeItem[l].catch_time_end > timeItem[l].catch_time_start) {
                if (time > timeItem[l].catch_time_start && time < timeItem[l].catch_time_end) {
                    tempArr.push(tempItem);
                };
            } else {
                if (time > timeItem[l].catch_time_start || time < timeItem[l].catch_time_end) {
                    tempArr.push(tempItem);
                };
            };       
        };

    };
    return tempArr;
};