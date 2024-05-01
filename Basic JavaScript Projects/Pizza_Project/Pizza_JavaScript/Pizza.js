function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + "= $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // PIZZA MENU VEGETABLE ASSIGNMENT
    // runningTotal and text1 will get passed along to getVeggies() first before getTopping()
    getVeggies(runningTotal, text1);
};

function getVeggies(runningTotal, text1) {
    var veggieTotal = 0;
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName('vegetables');
    for (i = 0; i < veggiesArray.length; i++) { // Iterates through every veggie element to check if its 'checked'
        if (veggiesArray[i].checked) { // if checked, add its value to output text, push to selected array, and output its value to console
            text1 = text1 + veggiesArray[i].value + "<br>";
            selectedVeggies.push(veggiesArray[i].value);
            console.log("Selected vegetable: (" + veggiesArray[i].value + ")");
        }
    }
    var veggiesSelectedCount = selectedVeggies.length;// the length of this array is the amount of selected veggies
    if (veggiesSelectedCount >= 3 ) {// first 2 toppings are free; must select atleast three for this generous discount :)
        veggieTotal = (veggiesSelectedCount - 2);
    } else { // if less than 3 selected
        veggieTotal = veggiesSelectedCount;
    }
    runningTotal = veggieTotal + runningTotal; // keeps current running total
    console.log("Total amount of selected vegetables: " + veggiesSelectedCount);
    if (veggiesSelectedCount >= 3) {
        console.log("First 2 toppings are free (must select atleast 3) " +
        veggiesSelectedCount + " topping(s) - 2 = $" + veggieTotal + ".00");
    } else {
        console.log(veggiesSelectedCount + " topping(s) = $" + veggieTotal + ".00");
    }
    console.log("veggies text1: " + text1);
    console.log("Current running total: $" + runningTotal + ".00");
    // Now, the following run total and output text will be passed onto final f() getTopping()
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); /* 1 FREE TOPPING!*/
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = "<h3> Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
};
