// SWITCH STATEMENT ASSIGNMENT
function sizeChoice(size) {//returns reponse according to user's input
    var response = "";
    var userInput = document.getElementById("sizeChoice").value;// gathers user input
    var responsePhrase = "You have chosen: ";
    switch(userInput.toLowerCase()) {//the out depends on users' input. lower case method used to make this swtich case INsensitive
        case "small":
            response = responsePhrase + "small";
        break;
        case "large":
            response = responsePhrase + "large";
        break;
        default: // If input is not one of the available choices
            response = "Please choose either small or large."
    }
    document.getElementById("userChoice").innerHTML = response;// output to targeted element
}

// DOCUMENT.GETELEMENTSBYCLASSNAME() METHOD ASSIGNMENT
function demoDocClass() {// returns a specific string to the specified element
    var arrayElements = document.getElementsByClassName("greeting");// gathers all elements of the same class
    arrayElements[0].innerHTML = "Hello"; 
    arrayElements[1].innerHTML = "World!";
}

// CANVAS CHALLENGE
function demoJsDraw() {// returns a drawing to the specified canvas element
    var c = document.getElementById("myFirstCanvas");
    var ctx = c.getContext("2d");// creates 2d context object to access the next drawing methods

    ctx.font = "20px Verdana";
    ctx.strokeText("My first canvas drawing!", 20, 50);
}

//  GRADIENT COLOR CHALLENGE
var canvas = document.getElementById("gradCanva");
var ctx = canvas.getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 200, 0);// creates gradient style for canvas
gradient.addColorStop(0, "#000");// method dictates where color begins from 0-1
gradient.addColorStop(0.3, "red");
gradient.addColorStop(0.5, "blue");
gradient.addColorStop(1, "white");

ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 300, 280);