// Get Current Date
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.getElementById('current-date').textContent = fulldateUK;
document.getElementById('current-year').textContent = now.getFullYear();

// Last Modification
document.getElementById('last-update').textContent = document.lastModified;

// Responsive Navigation
function toggleMenu() {
	document.getElementById('nav-list').classList.toggle('open');
	document.getElementById('nav-button').classList.toggle('open');
}

const navButton = document.getElementById('nav-button');
navButton.onclick = toggleMenu;