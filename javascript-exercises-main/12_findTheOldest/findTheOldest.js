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
   
    let birthYears=[];
    let ages=[];
        
    for (let key in people){
    
          if (people[key].yearOfDeath===undefined)
            {
              const d = new Date();
              let year = d.getFullYear();
              let currentlyLiving=year-people[key].yearOfBirth;
              people[key].age=currentlyLiving;
        
            }
        
          else{
            people[key].age=((people[key].yearOfDeath)-(people[key].yearOfBirth));
  
    
          }
        
    }
    // console.log(people);
    return people;
  
      };


// Do not edit below this line
module.exports = findTheOldest;
