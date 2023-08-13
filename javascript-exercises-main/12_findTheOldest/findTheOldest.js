const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    // let birthYears=[];
    let ages=[];
    
    
    for (let key in people){
      console.log(key);
    
    //   birthYears.push('test1','test2');
      ages.push((people[key].yearOfDeath)-(people[key].yearOfBirth));
      
    
    }
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
