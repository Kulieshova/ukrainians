var currentTime = new Date();
var hours = currentTime.getHours();
var page = document.getElementById('stylesheets');

if (hours < 6 || hours > 20) {
    page.setAttribute('href', 'assets/css/dark.css');
    document.getElementById('slider').checked = true;
}

function toggleTheme() {
    if (document.getElementById('slider').checked == true) {
        page.href = 'assets/css/dark.css';
    } else {
        page.href = 'assets/css/main.css';
    }
}