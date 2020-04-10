var currentTime = new Date();
var hours = currentTime.getHours();
var page = document.getElementById('stylesheets');
var slider = document.getElementById('slider');

if (hours < 6 || hours > 20) {
    page.setAttribute('href', 'assets/css/dark.css');
    slider.checked = true;
}

function toggleTheme() {
    if (slider.checked == true) {
        page.href = 'assets/css/dark.css';
    } else {
        page.href = 'assets/css/main.css';
    }
}