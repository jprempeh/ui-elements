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
	function createSubmenu(item) {
		// create a menu item to hold our menu
		var $subMenu = $('<ul />');
		$.each(item, function(i, el){
			console.log('item')
		var $menuName = $('<li />');
		$menuName.text(el.title).appendTo($subMenu);
			if(el.submenu) {
				console.log('has sub sub menu')
				console.log('',el.submenu)
				createSubmenu(el.submenu).appendTo($subMenu);
			}
		});
		return $subMenu;
	}

	function createMenu(item) {
		// create a menu item to hold our menu
		var $menuItem = $('<li class="menu-item" />');
		$menuItem.text(item.title);

		// if the menu has a submenu, add the event listener
		if (item.submenu) {
			createSubmenu(item.submenu).appendTo($menuItem);
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