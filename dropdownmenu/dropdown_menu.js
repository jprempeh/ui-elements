var MENU = [
  {
    'title': 'Item 1',
    'submenu': null,
  },
  {
    'title': 'Item 2',
    'submenu': null,
  },
  {
    'title': 'Item 3',
    'submenu': [
      {
        'title': 'Sub 1',
        'submenu': null,
      },
      {
        'title': 'Sub 2',
        'submenu': null,
      },
      {
        'title': 'Sub 3',
        'submenu': [
          {
            'title': 'SubSub 1',
            'submenu': null,
          },
          {
            'title': 'SubSub 2',
            'submenu': null,
          },
          {
            'title': 'SubSub 3',
            'submenu': null,
          },
        ]
      }
    ]
  }
];


$(document).ready(function () {
	// cache jQuery selectors
	$menu = $('.menu');

	// make functions
	function createSubmenu(item, element) {
		console.log(item);
		console.log(element);
		// create a menu item to hold our menu
		var $menuItem = $('<div class="menu-item" />');
		var $menuName = $('<span class="menu-name">');
		$menuName.text(item.title).appendTo($menuItem);
		$menu.append($menuItem);
	}

	function createMenu(item) {
		console.log(item);
		// create a menu item to hold our menu
		var $menuItem = $('<div class="menu-item" />');
		var $menuName = $('<span class="menu-name">');
		$menuName.text(item.title).appendTo($menuItem);

		// if the menu has a submenu, add the event listener
		if (item.submenu) {
			console.log('has submenu')
			$menuItem.on('hover')
		}
		$menu.append($menuItem);

	}

	// loop over each menu item and make a cell
	$.each(MENU, function (index, element) {
		createMenu(element);
		// if the menu has a submenu, display it on hover
		if(element.submenu) {
			createSubmenu(element.submenu)
		}
	});
});