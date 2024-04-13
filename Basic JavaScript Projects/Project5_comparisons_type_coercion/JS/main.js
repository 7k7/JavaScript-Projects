// TYPE OF OPERATOR ASSIGNMENT
document.write(typeof 'John Smith'); // Should display data type as String

// TYPE COERCION ASSIGNMENT
document.write("<br>");//for spacing

document.write(100 + "100");

// NAN CHALLENGE
document.write("<br>");//for spacing

document.write(0/0);//Shoudld output NaN

document.write(isNaN('hello!'));//Expected to be true since its not a number

document.write(isNaN(50));//Expect 'false' since 50 is a #

// INFINITY ASSIGNMENT
document.write("<br>");//for spacing

function infNum() { //returns “Infinity” and “-Infinity” b/c both float type #'s are too large
    document.getElementById('infNum').innerHTML 
= document.write(2E308, -2E308); 
}

// BOOLEAN ASSIGNMENT
document.write("<br>");//for spacing

document.write(1>0);// expect to return true

document.write(100<10);// expect to return false

// CONSOLE.LOG ASSIGNMENT
document.write("<br>");//for spacing

console.log(5+95);// expect to return 100 in the browser's console

// BOOLEAN CHALLENGE
document.write("<br>");//for spacing

console.log(1<0);// expect to return false in the browser's console

// DOUBLE EQUAL SIGNS ASSIGNMENT
document.write("<br>");//for spacing

document.write(1 == 1);//expect to return true

document.write(1 == 0);//expect to return false

// TRIPLE EQUAL SIGNS ASSIGNMENT
document.write("<br>");//for spacing

document.write('hello' === 'hello');// expect true

document.write(1 === 'hello');// expect false; different data type and different value.

document.write(1 === '1');// expect false; different data type but the same value for both.

document.write(1 === 5);// expect false; same data type but a different value for both.

// AND OPERATOR ASSIGNMENT
document.write("<br>");//for spacing

document.write(20>10 && 200<500);// expect true

document.write(10>1 && 5<2);// expect false

document.write(10>1 || 5<2);// expect true

document.write(10<1 || 5<2);// expect false

// NOT OPERATOR ASSIGNMENT
document.write("<br>");//for spacing

document.write(10 != '10');// expect false b/c of type coercion

document.write(10 != 5);// expect true