var currentTime = new Date();
var hours = currentTime.getHours();
var page = document.getElementById('stylesheets');
var slider = document.getElementById('slider');

// Dark theme
if (hours < 6 || hours > 20) {
    page.setAttribute('href', 'assets/css/dark.css');
    slider.checked = true;
}

// Switch Dark/Light themes
function toggleTheme() {
    if (slider.checked == true) {
        page.href = 'assets/css/dark.css';
    } else {
        page.href = 'assets/css/main.css';
    }
}

// Main functions
(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {
		};

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '961px',   '1280px' ],
			narrow:    [ '841px',   '960px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 350,
			noOpenerFade: true,
			alignment: 'center'
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 100,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'navPanel-visible'
				});
				
})(jQuery);