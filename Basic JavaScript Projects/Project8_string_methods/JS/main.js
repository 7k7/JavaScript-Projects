// CONCAT() METHOD ASSIGNMENT
var greeting = 'Hello, ';//string to concatenate later in f()

function concatGreet() {//returns concatenated sting and displays to element specified
    document.getElementById('concatPhrase').innerHTML =
greeting.concat('World!');
}

// SLICE() METHOD ASSIGNMENT
function sliceStrDemo() {// returns each word individually, ea. on a new line from the given phrase
    var phrase = 'Lets slice this pizza!';//phrase to slice up with slice()

    document.getElementById('sliceStr').innerHTML =//displays this output to specified element
    phrase.slice(0,4) + "<br>" +//range should output/slice 'Lets'
    phrase.slice(5,10) + "<br>" +//range should output/slice 'slice'
    phrase.slice(11,15) + "<br>" +//range should output 'this'
    phrase.slice(16,phrase.length) + "<br>";//range should output 'pizza!'
}

// MORE METHODS CHALLENGE
// toUpperCase() demo
function convertUpperCase() { //returns paragraph text in all caps upon hover; demoing the .toUpperCase()
    document.getElementById('convertUpper').innerHTML = //target element to replace and display return result with
    document.getElementById('convertUpper').innerHTML.toUpperCase();//access the text to convert to all caps and outputs it
}

// search() demo
function strSearch() {//returns the position/index of the first occurence of a string within another string (phrase/word)
    document.getElementById('firstOccur').innerHTML =//target element to replace and display return result with
    document.getElementById('strToSearch').innerHTML.search('program');//access the text to convert to all caps and outputs it
}

// NUMBER METHODS ASSIGNMENT
function convertNumToStr() {//returns number as a string; demoing toString()
    var num = 10;//number var to apply toString()
    document.getElementById('numToStr').innerHTML =//elemnt to replace and display return
    num.toString();//display num var as a string
}

// TOPRECISION() METHOD ASSIGNMENT
var longNum = 10.23690538;//num to shorten

function preciseNum() {//returns a string of a number of a specified length; demoing toPrecision()
    document.getElementById('numNoDecimal').innerHTML =//elemnt to replace and display return
    longNum.toPrecision(2);
}

// NEW METHODS CHALLENGE
// toFixed() method demo
function fixNum() {// returns rounded number as a string
    document.getElementById('convNumToStrAndRound').innerHTML =
    longNum.toFixed() + "<br>" +//rounded to whole number since not specified the number of decimal to round to
    longNum.toFixed(2);//specifies to round number to two decimal places.
}

//valueOf() method demo
// it is tedious but useful when you don't want to alter the value of a string
// or convert the String object to a primitive version of a string
function strValue() {// returns primitive data type of the value of a string; essentially, the string itself
    document.getElementById('strValue').innerHTML =
    document.getElementById('userStrInput').value.valueOf();//gathers user input and applei valueOf() to display the value back
}