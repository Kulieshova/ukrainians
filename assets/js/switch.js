        var page = document.getElementById('stylesheets');

        // // function to toggle between light and dark theme
        // function toggleTheme() {
        //     if (localStorage.getItem('theme') === 'theme-dark') {
        //         page.href = 'assets/css/dark.css';
        //     } else {
        //         page.href = 'assets/css/main.css';
        //     }
        // }

        // var slider = document.getElementById('slider').checked;

        // function toggleTheme() {
        //     if( slider = true)
        //     {
        //         page.href = 'assets/css/dark.css';
        //     }
        //     else {
        //         page.href = 'assets/css/main.css';
        //     }
        //     slider = !slider;
        // }

        function toggleTheme() {
            if (document.getElementById('slider').checked == true) {
                page.href = 'assets/css/dark.css';
            } else {
                page.href = 'assets/css/main.css';
            }
        }