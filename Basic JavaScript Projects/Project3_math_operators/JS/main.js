// Math operators assignment
function addTwo() { //Function that returns the result of 1*1 and replaces HTML element with it
    document.getElementById("Math").innerHTML = 1*1; //result returned replaces math id element
}
// Subtraction assignment
function subtractTwo() { //Function that returns the result of 10-5 and replaces HTML element with it
    document.getElementById("subtract").innerHTML = 10 - 5; //result returned replaces subtract id element
}

// MULTIPLICATION AND DIVISION ASSIGNMENT
function multiplyTwo() { //Function that returns the result of multiplying 10 * 10 and replaces the specified HTML element with it
    var product = 10 * 10; //Variable that holds the result and to reference later
    document.getElementById("multiplyExpression").innerHTML = '10 x 10 = ' + product; //result returned replaces multiplyExpression id element
}

function divideTwo() { //Function that returns the result of dividing 10 by 5 and replaces the specified HTML element with it
    var quotient = 10 / 5; //Variable that holds the result and to reference later
    document.getElementById("divisionExpression").innerHTML = '10 divided by 5 = ' + quotient; //result returned replaces divisionExpression id element
}

// MULTIPLE OPERATORS ASSIGNMENT
function multipleOps() { //Function name to invoke in HTML 
    var multiOpsResult = ((1 + 11) / 2 - 3) * 4;//var stores mutliple math operations result
    //This next statement replaces html element by id with the a string and the above variable
    document.getElementById('multipleMathOps').innerHTML = '1 plus 11, divided by 2, subtract 3 then multiple by 4 = ' + multiOpsResult;
}

// MODULUS OPERATOR ASSIGNMENT
function modTwo() {//f() returns the remainder of two numbers here
    var modResult = 5 % 2;//var stores remainder of expression
    document.getElementById('modOp').innerHTML = '5 divided by 2 is 2 with a remainder of ' //displays result by replaces specified id element
    + modResult; 
}

// NEGATION OPERATOR ASSIGNMENT
function negTwo() {//f() returns the negative operation of two numbers here
    var negResult = 5;//var stores a number
    document.getElementById('negOp').innerHTML = 'The negative of 5 is = ' //displays result by replaces specified id element
    + -negResult; 
}

// INCREMENT AND DECREMENT ASSIGNMENT
function incrementNum() {
    var increaseByOne = 99;//var stores a number as increment operator only works with vars; learned the hard way :)
    increaseByOne++;//increment operator increases value of this var by 1
    document.getElementById('incrNum').innerHTML = increaseByOne;//displays result by replaces specified id element
}
// DECREMENT ASSIGNMENT part
function decNum() {
    var decreaseByOne = 1;//var stores a number as decrement operator only works with vars; learned the hard way :)
    decreaseByOne--;//decrement operator decreases value of this var by 1
    document.getElementById('decNum').innerHTML = decreaseByOne;//displays result by replaces specified id element
}

// MATH.RANDOM ASSIGNMENT
function randNum() {//f() returns random # between 1- - 100.
    document.getElementById('randNum').innerHTML = (Math.random() * 100) + 1;//statement returns result and replaces the specified id element with it
}

// MATH OBJECT CHALLENGE
function roundNear() {//f() returns rounded number to the nearest integer
    document.getElementById('roundNear').innerHTML = Math.round(4.6124);//statement returns result and replaces the specified id element with it
}