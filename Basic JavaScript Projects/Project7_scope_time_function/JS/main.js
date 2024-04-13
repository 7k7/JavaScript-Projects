// NESTED FUNCTIONS ASSIGNMENT
var possibleNums = 10;

function rangeNums() {// sole purpose to cause an var out of scope error
    var range = "1 - 10";
}

function randNum() {// returns a random # between 1 - 10 and rounded to nearest Integer
    var randomNumber = Math.floor((Math.random() * 10) + 1);// generates random #; stores it in this var

    function displayNum() {// displays vars including an intent to display an out of scope var on purpose
        document.write("How many possible numbers: " + possibleNums);
        document.write("<br>");// new line spacing
        document.write(randomNumber);// in scope var
        document.write("<br>");// new line spacing
        document.write(rang);//out of scope error
        document.write("<br>");// new line spacing
        console.log(rang);//use of console.log() to debug it from w/in browser console
        //expect console to output "rang not defined"
    }
    displayNum();
}

// METHOD ASSIGNMENT
function isBusniessOpen() {// returns a message whether or not a business is currently open
    if (new Date().getHours >= 9 && new Date().getHours <= 17) {// checks whether current hour is within 9AM - 5PM work hours based on your current hour time
        document.getElementById("isOpen").innerHTML =// displays message and replaces specified element
        "We are currently open!" + "<br>" + "Business hours: 9:00 - 17:00"
    }

    else {// executes if the conditional statement is false; returns message and replaces specified element
        document.getElementById('isOpen').innerHTML =
        "We are not open at this time. Please come back later!" + "<br>" + "Business hours: 9:00 - 17:00"
    }
}

// IF STATEMENT ASSIGNMENT
if (1 > 0) {// always true and returns a message and displays it
    document.write("<br>");//spacing
    document.write("1 is greater than 0.");
}

else {// just for show
    document.write("no, 1 is not greater than 0.")
}

// ELSE ASSIGNMENT
function verifyAge() {
    if (document.getElementById('ageInput').value == 'true') {
        document.getElementById('response').innerHTML = "You can vote!";
    }

    else {
        document.getElementById('response').innerHTML = "Can't vote yet";
    }
}

// ELSE IF ASSIGNMENT
function Time_function() {// returns message whether its morning, afternoon or evening time by checking your current hour
    var Time = new Date().getHours();//obtains your current hour
    var Reply;//placeholder for message depending on branch executed
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById('Time_of_day').innerHTML = Reply;//returns message and displays it in palce of element specified
}