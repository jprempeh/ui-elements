$(document).ready(function() {

	$("#ionrange_1").ionRangeSlider({
		min: 0,
		max: 6000000,
		step: 10000,
		type: 'double',
		prefix: "$",
		maxPostfix: "+",
		prettify: false,
		prettifyEnabled: true,
		hasGrid: true,
		gridNum: 10
	});

	$("#ionrange_2").ionRangeSlider({
		min: 0,
		max: 10,
		type: 'single',
		step: 0.1,
		postfix: " carats",
		prettify: false,
		hasGrid: true
	});

	$("#ionrange_3").ionRangeSlider({
		min: -50,
		max: 50,
		from: 0,
		postfix: "°",
		prettify: false,
		hasGrid: true
	});

	$("#ionrange_4").ionRangeSlider({
		values: [
			"January", "February", "March",
			"April", "May", "June",
			"July", "August", "September",
			"October", "November", "December"
		],
		type: 'single',
		hasGrid: true
	});

	$("#ionrange_5").ionRangeSlider({
		min: 10000,
		max: 100000,
		step: 100,
		postfix: " km",
		from: 55000,
		hideMinMax: true,
		hideFromTo: false
	});

});