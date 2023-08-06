/*Use this file to do any short JavaScript exercises and to experiment
with new concepts*/

let sequenceNumber=4;
let previousNum1=0;
let previousNum2=1;
let sequenceArray=[];

while (sequenceNumber>0)
{
sequenceNumber=sequenceNumber-1; // Following code will run the counter

sequenceArray.push(previousNum1+previousNum2); // This code will add numbers to an array

//Look into adding all the numbers to an array the addressing the array index by the formula
//Fn= (fn-1) + (fn-2)
//Then add those two numbers together and show the output

// sequenceArray.push(sequenceNumber);

}
console.log(sequenceArray);




//Completed Exercises
/*
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));


function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  factorialize(5);



function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  alert(factorialize(5));


function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  console.log(factorialize(5));

// Create an empty object user.
let user={};
// Add the property name with the value John.
user.name="John";
// Add the property surname with the value Smith.
user.surname="Smith";
// Change the value of the name to Pete.
user.name="Pete";
// Remove the property name from the object.
delete user.name;

 console.log(user.name);
*/

