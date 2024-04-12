var rightAnswer = 'You are right!';
var wrongAnswer = 'Sorry, try again.';

function rightAnswerFun() {
    document.getElementById("correct-answer").innerHTML = rightAnswer;
}

function wrongAnswerFun() {
    document.getElementById("wrong-answer").innerHTML = wrongAnswer;
}

// OPERATOR ASSIGNEMNT //

var fullName = 'Kevin'; //string variable of my first name to later concatenate with my last name
                        //this complies with requirement #1

function concaName() { //Complies with requirement #2 
    //Calls the span element in the linked HTML doc by id to replace with concatenated fulleName string
    document.getElementById("concatenatedStringDemo").innerHTML = fullName += ' Montano';
}
