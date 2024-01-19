// Display current year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Display last modified date in UK format
const u = new Date(document.lastModified); // u: update
const lastUpdate = document.getElementById('last-update');

let uDateString = `${u.getDate()}/${u.getMonth() + 1}/${u.getFullYear()}`;
let uHourString = `${u.getHours()}:${u.getMinutes()}:${u.getSeconds()}`

lastUpdate.textContent = `${uDateString} ${uHourString}`;