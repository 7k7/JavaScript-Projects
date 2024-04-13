// DICTIONARY ASSIGNMENT
var alphaDict = { //my dictionary holds all the alphabet(value) identified(key) by their place in the it.
    1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g',
    8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n',
    15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u',
    22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z',
};

function randLetter() {//f() returns a random letter by the use of a random number between 1 - 26 range
    var randNum = Math.floor(Math.random() * 26) + 1;//random range 1 - 26
    document.getElementById('Dictionary').innerHTML
    = alphaDict[randNum];//statement that replace the id element with result (letter)
}

// DELETE ASSIGNMENT
function delete1() {//f() should return undefined upon deleting key: 1
    delete alphaDict[1];
    document.getElementById('deleteNum1').innerHTML = alphaDict[1];
}