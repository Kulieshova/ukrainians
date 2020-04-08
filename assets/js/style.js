var currentTime = new Date();
var hours = currentTime.getHours();
var page = document.getElementById('stylesheets');

if (hours < 6 || hours > 20) {
    page.setAttribute('href', 'assets/css/dark.css');
}
