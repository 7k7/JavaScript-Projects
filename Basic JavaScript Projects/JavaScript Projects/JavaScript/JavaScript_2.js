// CONTACT FORM CHALLENGE
function validateForm() {
    let fName = document.forms["profileForm"]["firstName"].value;
    let lName = document.forms["profileForm"]["lastName"].value;
    let state = document.forms["profileForm"]["state"].value;

    var response = "";

    if (fName == "" || lName == "" || state == "") {
        response += "Please include your:\n" ;
        if (fName == "") {
            response += "first name\n";
        }
        if (lName == "") {
            response += "last name\n";
        }
        if (state == "") {
            response += "The state you are in";
        }
        alert(response);
        return false;
    }
}