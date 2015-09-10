$(document).ready(function() {

	// Price slider
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

	//Square feet slider
	$('#ionrange_2').ionRangeSlider({
		min: 0,
		max: 8000,
		to: 4000,
		type: 'double',
		step: 100,
		grid_num: 10,
		postfix: ' sq feet',
		prettify: false,
		grid: true,
		decorate_both: false,
		prettify_separator: ',',
		drag_interval: true,
		max_postfix: '+'
	});

	// Lot size slider
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
		drag_interval: true,
		max_postfix: '+'
	});

	// Days on market slider
	$('#ionrange_4').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 1000,
		to: 500,
		step: 50,
		grid_num: 10,
		grid: true,
		prettify_separator: ",",
		postfix: ' days',
		decorate_both: false,
		drag_interval: true,
		max_postfix: '+'
	});

	// Bedroom slider
	$('#ionrange_5').ionRangeSlider({
		min: 0,
		max: 11,
		to: 8,
		type: 'double',
		postfix: ' bedrooms',
		grid: true,
		drag_interval: true,
		decorate_both: false,
		grid_num: 11,
		max_postfix: '+'
	});

	// Bathroom slider
	$('#ionrange_6').ionRangeSlider({
		min: 0,
		max: 7,
		to: 3,
		type: 'double',
		postfix: ' bathrooms',
		grid: true,
		drag_interval: true,
		decorate_both: false,
		grid_num: 7,
		max_postfix: '+'
	});

	// Year built slider
	$('#ionrange_7').ionRangeSlider({
		min: 1800,
		max: 2015,
		type: 'double',
		grid: true,
		step: 5,
		drag_interval: true,
		decorate_both: false,
		grid_num: 10,
		prettify_enabled: false
	});

	// Add $ to the Price grid
	$('.irs.js-irs-0.irs-with-grid .irs-grid-text').prepend('$');

});