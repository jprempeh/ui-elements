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
	$menu = $('.main-navigation');

	// create a submenu function
	function createSubmenu(item) {
		// create a submenu
		var $subMenu = $('<ul />');
		// for each submenu item, make a menu button
		$.each(item, function(i, el){
			var $menuName = $('<li class="menu-item submenu-item"/>');
			// store the menu's title as a data attribute
			$menuName.data('name', el.title);
			var $menuLink = $('<a href="#" />');
			$menuLink.text(el.title).appendTo($menuName);
			if(el.submenu) {
				// if the item has a submenu, create its submenu and append it
				createSubmenu(el.submenu).addClass('subsub-menu').appendTo($menuName);
			}
			$menuName.appendTo($subMenu);
		});
		return $subMenu;
	}

	function createMenu(item) {
		// create a menu item to hold our menu
		var $menuItem = $('<li class="menu-item" />');
		var $menuLink = $('<a href="#" />');
		$menuItem.data('name', item.title);
		$menuLink.text(item.title).appendTo($menuItem);
		// if the submenu has a submenu, create and append the submenu
		if (item.submenu) {
			createSubmenu(item.submenu).appendTo($menuItem);
		}
		$menu.append($menuItem);
	}

	// loop over each menu item and make a cell
	$.each(MENU, function (index, element) {
		createMenu(element);
		// if the menu has a submenu, create it
		if(element.submenu) {
			createSubmenu(element.submenu)
		}
	});

	// event handler for clicking on a cell
	$('ul').on('click', 'li', function(e){
		e.preventDefault();
		e.stopPropagation();
		alert($(this).data('name'));
	});
});