// Display current year
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

// Display last modified date in UK format
const lmd = new Date(document.lastModified); // lmd: Last Modified Date
const lastModified = document.querySelector('#last-modified');

let lmDateString = `${lmd.getDate()}/${lmd.getMonth() + 1}/${lmd.getFullYear()}`;
let lmHourString = `${lmd.getHours()}:${lmd.getMinutes()}:${lmd.getSeconds()}`

lastModified.textContent = `Last modification: ${lmDateString} ${lmHourString}`;