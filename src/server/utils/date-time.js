const dateFormat = /\d\d\d\d-\d\d-\d\d/;
const timeFormat = /\d\d:\d\d/;

function asDateString(date) {
    return `${date.getFullYear().toString(10)}-${(date.getMonth()+1)
    .toString(10)
    .padStart(2, "0")}-${date.getDate().toString(10).padStart(2, "0")}`;
};

function asTimeString(date) {
    return date.getHours() + ":" + date.getMinutes();
};

export function asTwelveHourTimeString(time) {
    if (time.slice(0,2) === "12") {
        return time + "pm"
    } else if (time.slice(0,2) > 12) {
        console.log(time.slice(0,2))
        const newTime = time.slice(0,2)-12
        return `${newTime}:${time.slice(3,5)}pm` 
    } else {
        console.log(time)
        return time + "am";
    }
}

export function currentMonth() {
    const date = new Date()
    return (date.getMonth() + 1)
}

export function today() {
    return asDateString(new Date());
};

export function now() {
    return asTimeString(new Date());
};