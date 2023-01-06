// Display current year
const d = new Date()
document.querySelector('#current-year').textContent = d.getFullYear()

// Display Last Updated
document.querySelector('#last-updated').textContent = document.lastModified;