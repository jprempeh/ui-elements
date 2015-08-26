$('.accordion').on('click', '.accordion-control', function(e) { // when clicked
	e.preventDefault(); // prevent the default action
	$(this) // get the button the user clicked on
		.next('.accordion-panel') // get the panel after it
		.not(':animated') // that's not animated
		.slideToggle(); // toggle the display
});