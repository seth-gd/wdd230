// Display current year
document.querySelector('#year').textContent = new Date().getFullYear();
// Display last modified date in UK format
const lmd = new Date(document.lastModified); // lmd: Last Modified Date
const lastModifStr = `${lmd.getDate()}/${lmd.getMonth() + 1}/${lmd.getFullYear()} ${lmd.getHours()}:${lmd.getMinutes()}:${lmd.getSeconds()}`;
document.querySelector('#last-modified').textContent = `Last modification: ${lastModifStr}`;