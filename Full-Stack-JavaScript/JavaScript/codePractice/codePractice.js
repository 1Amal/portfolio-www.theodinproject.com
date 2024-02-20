function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  // Don't do this!
  // Use Object.setPrototypeOf(Player.prototype, Person.prototype)
  Player.prototype = Person.prototype;
  
  function Enemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  // Not again!
  // Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
  Enemy.prototype = Person.prototype;
  
  Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new Player('carl', 'X');
  carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!


// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
//   };
  
//   function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }
  
//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
//   };
  
//   // Object.getPrototypeOf(Player.prototype) should
//   // return the value of "Person.prototype" instead
//   // of "Object.prototype"
//   Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
//   // Now make `Player` objects inherit from `Person`
//   Object.setPrototypeOf(Player.prototype, Person.prototype);
//   Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
  
//   player1.sayName(); // Hello, I'm steve!
//   player2.sayName(); // Hello, I'm also steve!
  
//   player1.getMarker(); // My marker is 'X'
//   player2.getMarker(); // My marker is 'O'



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
//   player1.sayName(); // logs 'steve'
//   player2.sayName(); // logs 'also steve'

// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true

// Player.prototype.sayHello = function() {
//     console.log("Hello, I'm a player!");
//  };
 
//  player1.sayHello(); // logs "Hello, I'm a player!"
//  player2.sayHello(); // logs "Hello, I'm a player!"


// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// Note: It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

// console.log(theHobbit.info());

// function Book(title, author,pages,read)

// {
// this.title=title,
// this.author=author,
// this.pages=pages,
// this.read=read;
// this.info=function(){
//     return (this.title+" by "+this.author+" "+this.pages+" Pages"+ " "+this.read);
// }
// }

// const Book1=new Book("Linux Cookbook","Schroder",654,"Not Yet read");

// console.log(Book1.info());



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }

// const myObject = {
//     property: 'Value!',
//     otherProperty: 77,
//     "obnoxious property": function hello() {
//       // do stuff!
//       alert("hello!");
//     },
//     anotherProp:function()
//     {
//         alert("This works")
//     }
//   };



// function sumOfTripledEvens(array) {
//     return array
//       .filter((num) => num % 2 === 0)
//       .map((num) => num * 3)
//       .reduce((acc, curr) => acc + curr);
//   }

// function myMap(array, callback) {
//     const myNewArray = [];
  
//     for (let i = 0; i < array.length; i++) {
//       const callbackResult = callback(array[i]);
//       myNewArray.push(callbackResult); 
//     }
  
//     return myNewArray;
//   }


//   const array2=['Hello','Good Morning', 'Australia']

//   function playWords()
//   {
//     for (let i=0; i<array2.length;i++)
//     {
//         console.log(array2[i]);
//         console.log(array2.length);
//     }
        
//   }


// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]); // This is when the callback function gets called, or executed
//     }
//   }
  
//   // You would call it like this:
//   const myArry = [2, 3, 4, 2,10];
//   myForEach(myArry, (item) => {
//     console.log(item + 2); 
//   })




// function funkyFunction(music, LikeMusic) {
//     if (LikeMusic) {
//       console.log('Play: ' +  music);
//     }
//   }

//   const funkyFunction=function(music,LikeMusic)
//   {
//     if (LikeMusic)
//         {
//             console.log('Play:'+music);
//         }
//   }

//   const funkyFunction=(music,LikeMusic)=>
//   {
//     if (LikeMusic)
//     {
//         console.log('Play:'+music);
//     }
//   }

// const playThe = funky => funky + " music";
