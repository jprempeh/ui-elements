$(document).ready(function() {

	$('#ionrange_1').ionRangeSlider({
		min: 0,
		max: 6000000,
		step: 20000,
		type: 'double',
		prefix: '$',
		max_postfix: '+',
		prettify: false,
		prettify_enabled: true,
		grid: true,
		grid_num: 10,
		drag_interval: true,
		prettify_separator: ',',
		decorate_both: true
	});

	$('#ionrange_2').ionRangeSlider({
		min: 0,
		max: 8000,
		type: 'double',
		step: 100,
		grid_num: 10,
		postfix: ' sq feet',
		prettify: false,
		grid: true,
		decorate_both: false,
		prettify_separator: ',',
		drag_interval: true
	});

	$('#ionrange_3').ionRangeSlider({
		min: 0,
		type: 'double',
		max: 21800,
		postfix: ' sq feet',
		prettify: false,
		grid: true,
		prettify_separator: ',',
		grid_num: 10,
		step: 1000,
		drag_interval: true
	});

	$('#ionrange_4').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 1000,
		step: 50,
		grid_num: 10,
		grid: true,
		prettify_separator: ",",
		postfix: ' days',
		decorate_both: false,
		drag_interval: true
	});

	$('#ionrange_5').ionRangeSlider({
		min: 0,
		max: 11,
		step: 1,
		postfix: ' bedrooms',
		grid_margin: true,
	});

	$('.irs.js-irs-0.irs-with-grid .irs-grid-text').prepend('$');

});