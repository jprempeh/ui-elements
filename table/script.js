var data = [
	addStudentData("Isaac Netwon", "isanew1", "secret", "1", "en"),
	addStudentData("Thales", "thales1", "secret", "1", "en"),
	addStudentData("Pythagoras", "pythag1", "secret", "1", "es"),
	addStudentData("Albert Einstein", "albein1", "secret", "1", "es"),
	addStudentData("Euclid", "euclid1", "secret", "1", "es"),
	addStudentData("Blaise Pascal", "blapas1", "secret", "1", "es"),
	addStudentData("Alan Turing", "alatur1", "secret", "1", "es"),
	addStudentData("Ada Lovelace", "adalov1", "secret", "1", "en"),
	addStudentData("Blaise Pascal", "blapas1", "secret", "1", "es"),
	addStudentData("Benjamin Banneker", "benban1", "secret", "1", "en"),
	addStudentData("John von Neumann", "johneu1", "secret", "1", "es")
];
// create app variable
var app;

// add student data function
function addStudentData(name, user, pass, gen, lan)
{
	return {"name":name, "username":user, "password":pass, "gender":gen, "language":lan};
}

$(document).ready(function(){
	app = {
		// create app
		init: function() {
			// for each data entry, add a table row
			data.forEach(app.addRow);
			// add edit functionality to username, pw, name rows
			$('.editable').makeEditable();
			// add switch functionality to language and gender
			$('.switchable').makeSwitchable();

		},
		addStudentData: function() {
				return {"name":name, "username":user, "password":pass, "gender":gen, "language":lan};
		},
		addRow: function (element, i, arr) {
			// create a new row
			var $newRow = $('<tr class="table-data">');
			// add new row after the last row
			$('table tr:last').after($newRow);
			// create table data cells
			var $name = $('<td class="editable name" />').text(data[i].name);
			var $username = $('<td class="editable username" />').text(data[i].username);
			var $password = $('<td class="editable password" />').text(data[i].password);
			var $gender = $('<td class="switchable gender" />').html(function() {
				return '<span class="hidden">' + data[i].gender + '</span>';
			});
			var $language = $('<td class="switchable language" />').html(function() {
				return '<span class="hidden">' + data[i].language + '</span>';
			});

			// create gender switch and add to gender cell
			var $genderSwitch = $([
				"<div class='onoffswitch'>",
				"<input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox'>",
				"<label class='onoffswitch-label'>",
				"<span class='onoffswitch-inner'></span>",
				"<span class='onoffswitch-switch'></span>",
				"</label>",
				"</div>"
			].join("\n")).appendTo($gender);
			// create language switch and add to language cell
			var $languageSwitch = $([
				"<div class='onoffswitch'>",
				"<input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox'>",
				"<label class='onoffswitch-label'>",
				"<span class='language-inner'></span>",
				"<span class='onoffswitch-switch'></span>",
				"</label>",
				"</div>"
			].join("\n")).appendTo($language);

			// add unique gender switch id
			$gender.find('input').attr('id', data[i].username + i);
			$gender.find('label').attr('for', data[i].username + i);
			// add unique language switch id
			$language.find('input').attr('id', data[i].username + i +'-language');
			$language.find('label').attr('for', data[i].username + i +'-language');
			// if gender is boy, input should be checked
			if (data[i].gender === '1') {
				$gender.find('input').attr('checked', "true");
			}
			// if language is en, input should be checked
			if (data[i].language === 'en') {
				$language.find('input').attr('checked', "true");
			}
			// append table data cells to the table row
			$newRow
				.append($name)
				.append($username)
				.append($password)
				.append($gender)
				.append($language);
		}

	};

	// edit table function
	$.fn.makeEditable = function() {
		// click table cell functionality
		$(this).on('click',function(){
			if($(this).find('input').is(':focus')) return this;
			var cell = $(this);
			var content = $(this).html();
			$(this).html('<input type="text" style="width: 90px" value="' + $(this).html() + '" />')
				.find('input')
				.trigger('focus')
				.on({
					'blur': function(){
						$(this).trigger('saveEditable');
					},
					'keyup':function(e){
						if(e.which == '13'){ // enter
							$(this).trigger('saveEditable');
						} else if(e.which == '27'){ // escape
							$(this).trigger('closeEditable');
						}
					},
					'closeEditable':function(){
						cell.html(content);
					},
					'saveEditable':function(){
						content = $(this).val();
						$(this).trigger('closeEditable');
					}
				});
		});
		return this;
	};
	// make table switchable
	$.fn.makeSwitchable = function() {

		$('td.switchable.gender input')
			.on({
				'change': function() {
					if (this.checked) {
						$(this).closest('td').children('.hidden').text('boy');
					} else {
						$(this).closest('td').children('.hidden').text('girl');
					}
				}
			})
			.closest('td').children('.hidden')
			.text('boy');

		$('td.switchable.language input')
			.on({
				'change': function() {
					if (this.checked) {
						$(this).closest('td').children('.hidden').text('english');
					} else {
						$(this).closest('td').children('.hidden').text('spanish');
					}
				}
			});

			$('td.switchable.language input:checked').closest('td').children('.hidden').text('english')
			$('td.switchable.language input:not(:checked)').closest('td').children('.hidden').text('spanish')

	};

	// log the table to the console
	$('#button').on('click', function (e) {
		e.preventDefault();
		// make an array
		var results = [];
		// read table headers and make an object
		var $tr = $('table tr');
		var make = $.makeArray($tr);
		var resultss = [];
		$('table tr:not(#headings)').each(function () {
			var obj = {};
			obj.name = $(this).find('td.editable.name').text();
			obj.username = $(this).find('td.editable.username').text();
			obj.password = $(this).find('td.editable.password').text();
			obj.gender = $(this).find('td.switchable.gender span.hidden').text();
			obj.language = $(this).find('td.switchable.language span.hidden').text();
			resultss.push(obj);
		});

		console.table(resultss);

		function addStudentData(name, user, pass, gen, lan)
		{
			return {"name":name, "username":user, "password":pass, "gender":gen, "language":lan};
		}

		// for each row, map the table data to the table
		var tableData = $('td');
	});

	$(app.init.bind(app));
});

//-- Example Test
var Calculator = function() {};
Calculator.prototype = {
	constructor: Calculator,
	add: function(a, b) {
		return a + b;
	}
};
// f**k sokikom :)
