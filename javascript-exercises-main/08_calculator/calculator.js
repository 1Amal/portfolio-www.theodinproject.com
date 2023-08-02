const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arra) {

let result = arra.reduce((sum, current) => sum + current, 0);

return result;
};

const multiply = function(array) {

var total=1;

for (var i=0;i<array.length;++i){

    total*=array[i];
}

return(total)};

// Power of the number
/* 
4^3
total=4*4;
total=total*4
*/
const power = function(baseNum,power2) {
  let fixedBase=baseNum;
  let finalAns=1;
for (var j=0; j<power2;j++)
{
finalAns=finalAns*fixedBase
}
return finalAns;

};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
