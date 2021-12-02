
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp()
{
	var currentScroll = document.documentElement.scrollTop;

	if (currentScroll > 0)
	{
		window.requestAnimationFrame(scrollUp);
		window.scrollTo (0, currentScroll - (currentScroll / 12));
		buttonUp.style.transform = "scale(0)";
	}
}

buttonUp = document.getElementById("button-up");

window.onscroll = function()
{
	var scroll = document.documentElement.scrollTop;

	if (scroll > 500)
	{
		buttonUp.style.transform = "scale(1)";
	}
	else if (scroll < 500)
	{
		buttonUp.style.transform = "scale(0)";
	}
}