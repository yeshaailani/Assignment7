
function view(inventory) {
    'use strict';
    for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i][0] + ' ' +
                    inventory[i][1] + ' (' +
                    parseInt(inventory[i][2]) + ') ' +
                    '$' + parseFloat(inventory[i][3])
                    );
    }
}

function update(inventory) {
    'use strict';

    var sku = parseInt(prompt("Enter the SKU number: "));
    if (sku < 0 ||  Number.isNaN(sku)) {
        alert("Invalid SKU number!");
    } else {
        var quantity = parseInt(prompt("Enter new quantity: "));
        if (quantity<0 || Number.isNaN(quantity) )  {
            alert("Invalid quantity!");
            return
        } else {
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i][0] === sku) {
                    inventory[i][2] = quantity;
                    console.log("Product " + sku + " was updated with quantity " + quantity);
                }
            }
        }
    }
}

function main() {
    'use strict';

    var inventory, command;
    inventory = [
        [4824, 'Shirt ', 10, 15.99],
        [6343 , 'Jeans ', 22, 50.0],
        [9870, 'Socks', 23, 10.99],
        [8907, 'Shoes', 11, 70.00],
        [3456, 'Cardigan', 25, 125.99]
    ];

    window.console.log("Welcome to The Product Inventory Management System");
    window.console.log("");
    window.console.log("Enter Command show/update/exit:");

    while (true) {
        command = window.prompt("Enter command (show/update/exit):");
        if (command !== null) {
            if (command === "show") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === 'exit') {
                break;
            } else {
                window.alert("Invalid Command!");
            }
        } else {
            break;
        }
    }
    window.console.log("Terminated");
}

main();