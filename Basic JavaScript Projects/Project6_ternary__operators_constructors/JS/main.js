// PROJECT6_TERNARY__OPERATORS_CONSTRUCTORS ASSIGNMENT
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// TERNARY OPERATORS CHALLENGE
function checkAgeToVote() { //returns one of two string messages based on whether the passed in argument is greater than or equal to 18
    var isEligible = (document.getElementById("age").value >= 18) //isEligible is set whether input is >=18
    ? "You can vote!" : "You are not old enough to vote yet.";

    document.getElementById("ageCheckResult").innerHTML = isEligible;//returns string and replaces the element id'd
}

// CODING ASSIGNMENT PG 133
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make +
    " manufactured in " + Erik.Vehicle_Year;
}

// NEW KEYWORD ASSIGNMENT
function Student(fullName, ageStudent, gradeLevel) {// object constructor to instantiate a Student
    this.Student_fullName = fullName;
    this.Student_age = ageStudent;
    this.Student_gradeLevel = gradeLevel;
    this.isActive = true;//Always true when new Student instance is created
}

function createStudent() {//returns data of each property of the instantiated Student object
    var newStudent = new Student(//instantiates a Student object by taking in input from input fields in HTML doc
        document.getElementById("fullName").value,
        document.getElementById("ageStudent").value,
        document.getElementById("gradeLevel").value);

    document.getElementById("New_and_This").innerHTML =//Displays saved Student info by replacing specified element
    "Full name: " + newStudent.Student_fullName + "<br>" +
    "Age: " + newStudent.Student_age + "<br>" +
    "Grade level: " + newStudent.Student_gradeLevel + "<br>" +
    "Active status: " + newStudent.isActive;
}

// NESTED FUNCTIONS ASSIGNMENT
function firstName() {// returns full name to later display it
    var firstName = "John";
    function addLastName() {// returns concatenated first and last name and displays it in specified element
        var full_Name = firstName + " Smith";
        document.getElementById("Nested_Function").innerHTML =
        "Full name: " + full_Name;
    }
    addLastName();
}