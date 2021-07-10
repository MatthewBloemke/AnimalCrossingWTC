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

export function today() {
    return asDateString(new Date());
};

export function now() {
    return asTimeString(new Date());
};