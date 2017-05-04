DataTableView.extendMenu(function(dataTableView, menu) {
    
    // Find the row/column menus.
    var col_menu = null;
    var row_menu = null;
    for (var i=0; i<menu.length && !(col_menu && row_menu); i++) {
        if (menu[i].id == 'core/edit-rows') {
            row_menu = menu[i].submenu;
        } else if (menu[i].id == 'core/edit-columns') {
            col_menu = menu[i].submenu;
        }
    }
    
    // Default to just the main menu.
    if (!col_menu) col_menu = menu;
    if (!row_menu) row_menu = menu;
    
    // Add any Menu items here.
    row_menu.push(
        {
        id: "gokb-add-row",
        "label": "Prepend Rows",
        "click": function() {
            GOKb.handlers.addRows();
        }
      }
    );

    menu.push({
      "id" : "gokb-trim",
      "label" : "Trim all data",
      "click" : function() {
        GOKb.handlers.trimData();
      }
    });
    
});
