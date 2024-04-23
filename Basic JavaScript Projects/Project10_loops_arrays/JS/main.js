// LOOPS ASSIGNMENT
function Call_Loop() {// counts from 1 - 100
    let curr_Count = ""; // Holds long string of each number; from each iteration of while loop
    var num = 1; //starting value
    while (num < 101) {// stops at 100
        curr_Count += "<br>" + num;// appends new line space and adds (type coercion) integer "num" to a String type
        num++;// adds 1 to current number count
    }
    document.getElementById("Loop").innerHTML = curr_Count;//at end of loop, displays long string of each number separated by a new line break.
}

// LENGTH PROPERTY CHALLENGE
function strLength() {// returns the length of a given string (spaces included
    document.getElementById("lengthVal").innerHTML = // target element to display result
    document.getElementById("userInput").value.length; // returns a number that reps the length of the user's string input
}

// FOR LOOP ASSIGNMENT
function for_Loop() {//returns each string list on each line.
    let instrumentList = ["Piano", "Guitar", "Bass"];// list to iterate through
    var listAll = "";//var to append each str in a new line break 
    var count;// count; starts at very first str value of list
    for (count = 0; count < instrumentList.length; count++) {//initializes count to 0 to get first str val. for loop iterates as long as its less than 3 aka length of list.
        listAll += instrumentList[count] + "<br>";//appends str and new line break
    }
    document.getElementById("List_of_Instruments").innerHTML = listAll;//displays long list of strings to targeted element
}

// DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT
function array_Function() {//returns all values of the given array.
    var myColors = ["red", "blue", "green", "black"]
    document.getElementById("Array").innerHTML = myColors;
}

// CONST KEYWORD ASSIGNMENT
function constant_function() {// returns property values of this given object
    const profileInfo = {status:"active", idNum:"1092", age:"39"};
    profileInfo.name = "John Smith";
    profileInfo.age = "40";
    profileInfo.birthCountry = "USA";
    document.getElementById("Constant").innerHTML =
        "Name: " + profileInfo.name + "<br>" + "Age: " + profileInfo.age + "<br>"  +
        "Country of birth: " + profileInfo.birthCountry + "<br>" + "status: " + profileInfo.status +
        "<br>" + "id: " + profileInfo.idNum;
}

// LET KEYWORD ASSIGNMENT
function demoLet() {// returns values to each targeted element in var and let forms
    var greeting = "Hi, World!";
    document.getElementById("Var").innerHTML = greeting;
    {
        let greeting = "Hi, World! (LET)";
        document.getElementById("Let").innerHTML = greeting;
    }
}

// RETURN STATEMENT CHALLENGE

function demoReturn(fullName) {
    document.getElementById("greetingWithName").innerHTML = 
    greeting(document.getElementById("fullName").value);
    function greeting(fullName) {
        return "Hello, " + fullName + ", hope you are having a nice day!";
    }
}

// OBJECT ASSIGNMENT
function myProfileInfo() {// returns all profile data entered by a user
    let profile = {
        fullName: document.getElementById("yourName").value,
        age: document.getElementById("yourAge").value,
        birthCountry: document.getElementById("yourBirthCountry").value,
        status: "active",
        idNum: document.getElementById("idNum").value,
        description: function() {
            return  "Name: " + this.fullName + "<br>" + "Age: " + this.age + "<br>"  +
            "Country of birth: " + this.birthCountry + "<br>" + "status: " + this.status +
            "<br>" + "id: " + this.idNum;
        }
    };

    document.getElementById("myProfile").innerHTML = profile.description();// displays object method to targeted element
}

// BREAK AND CONTINUE CHALLENGE
function demoContinueBreak() {
    var phrase = [
        "black", "white", "black", "black",
        "white", "black", "black", "black", "black",
        "black", "black", "black", "black", "white",
        "white", "white", "white", "white", "white"
    ]

    var randomPhrase = "";
    var count;
    for (count = 0; count < phrase.length; count++) {
        if (phrase[count] == "white") {continue;}// skips white values
        randomPhrase += "<br>" + phrase[count];
    }
    document.getElementById("skipWhite").innerHTML = randomPhrase;

    var randomPhrase2 = "";
    for (count = 0; count < phrase.length; count++) {
        if (phrase[count] == "white") {break;}//stops at first white value
        randomPhrase2 += "<br>" + phrase[count];
    }
    document.getElementById("stopAtWhite").innerHTML = randomPhrase2;
}