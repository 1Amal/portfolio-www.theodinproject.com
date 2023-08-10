/*Use this file to do any short JavaScript exercises and to experiment
with new concepts*/


const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  }
]

let getTheTitles=[];

for (let bookTitles in books)
{
  getTheTitles.push(books[bookTitles].title); 

}
console.log(getTheTitles);
return(getTheTitles);




//Completed Exercises
/*

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
//  return arr[n]
console.log(arr[n]);  
}

fib("8");

function fib(n) {
  if (n < 2){
    return n
  }
  return fib(n - 1) + fib (n - 2)
}

console.log(fib(8));

const fibonacci = function(sequenceNumber) {
  // let toNumber=Number(sequence);
  
  // Fn = Fn-1 + Fn-2 (applies to all other integers)
  
  // let sequenceNumber=input;
  let previousNum1;
  let previousNum2=1;
  let fibonacciNum;
  let fib;
  let sequenceArray=[];
  let whileCounter=sequenceNumber;

  while (whileCounter>0)
  {
  whileCounter=whileCounter -1; // Following code will run the counter
  // previousNum2=previousNum1+previousNum2;
  // fibonacciNum=(sequenceNumber-1)+(sequenceNumber-2);
  //0,1,1,2,3,5,8,13,21,34,55,89,144
  //
//Xn=[(1.618^n)-(1-1.618)^n]/sqrt(5) Golden rule to solve this
  // sequenceArray.push(fibonacciNum); // This code will add numbers to an array
  fib=(((1.618)^(sequenceNumber))-(1-1.618)^(sequenceNumber))/(Math.sqrt(5));

  };

  console.log(fib);
  console.log(sequenceNumber);
  console.log(Math.sqrt(5));

//Look into adding all the numbers to an array the addressing the array index by the formula
//Fn= (fn-1) + (fn-2)
//Then add those two numbers together and show the output

// sequenceArray.push(sequenceNumber);

}

fibonacci(4);



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

