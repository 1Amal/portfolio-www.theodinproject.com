/*Use this file to do any short JavaScript exercises and to experiment
with new concepts*/




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

