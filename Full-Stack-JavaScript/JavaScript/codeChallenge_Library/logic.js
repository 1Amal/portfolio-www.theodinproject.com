/* Pseudo Code
1)Form input fields: author, title, numberOfPages,read and button "New Book" button
2) When "New Book" button is clicked form data will be captured using function "addBookToLibrary()"
3) function "addBookToLibrary()" will create a Book Object by calling the "function bookData" constructor to store the user entered data into an Array "myLibrary".
4) function "addBookToLibrary()" will call function "bookInfoDisplay" to loop through the Array "myLibrary" and display on the webpage as a "book info Card".
5) Each book "book info Card" will have a button "Delete Book" which will delete the book from the Array "myLibrary", using the index number of the array. Then call up the function "bookInfoDisplay" to update the webpage. 
6) Each book "book info Card" will have a button "Read" which will update the relevant object "book.read=yes". Then call up the function "bookInfoDisplay" to update the webpage. 
*/

/* Pending Tasks
1) For "addBookToLibrary" enable code to receive four variables that will be converted to a object using "bookData" object constructor: Completed
2) Add HTML input form with buttons
3) Enable "addBookToLibrary" to received four variables from the HTML code
4) Add a "Delete" button and "Read" button
5) Write code so "Delete" button deletes book from the array
6) Write code so "Read" button change the status i.e. if current read=yes then change to read=no, vice versa
*/


const myLibrary=[];

const LibraryStatusDiv=document.querySelector(".LibraryStatusDiv");
const submitButton=document.querySelector("#submitButton");
const bookInfoAuthor=document.querySelector(".bookInfoAuthor");
const bookInfoTitle=document.querySelector(".bookInfoTitle");
const bookInfoNumberOfPages=document.querySelector(".bookInfoNumberOfPages");
const bookInfoRead=document.querySelector(".bookInfoRead");

//Code for creating New Book Object
function bookData(author, title, numberOfPages,read)
{
this.author=author;
this.title=title;
this.numberOfPages=numberOfPages;
this.read=read;
}

//Code to add the new book details object into the myLibrary array
function addBookToLibrary() 
    {

    // console.log("Button clicked");

    var bookSubmitForm = new FormData(document.getElementById("bookSubmitForm"));
    var authorValue = bookSubmitForm.getAll("author");
    var titleValue=bookSubmitForm.getAll("title");
    var numberOfPagesValue=bookSubmitForm.getAll("numberOfPages");
    var readValue=bookSubmitForm.getAll("read");
    console.log(typeof(authorValue[0]));
    console.log(titleValue[0]);
    console.log(numberOfPagesValue[0]);
    console.log(readValue[0]);

    myLibrary.push(new bookData(authorValue[0],titleValue[0],numberOfPagesValue[0],readValue[0]));

        // bookInfoDisplay(myLibrary);
        // console.dir(myLibrary);
        bookInfoDisplay();
        
    }



function bookInfoDisplay()
    {

        if (myLibrary.length==0){
            console.log("Library is empty");
            LibraryStatusDiv.textContent="I am sorry, Library does not have any books, Use the form below to add some books ";

        }

        else{

                for (let i=0;i<myLibrary.length;i++)
                {

                    const newDiv=document.createElement('div');

                    newDiv.textContent="Author Name: " + myLibrary[i]["author"] + " | " +
                                        "Title Name: " + myLibrary[i]["title"] + " | "  +
                                        "Number of Pages: " + myLibrary[i]["numberOfPages"] + " | " +
                                        "Book Read: " + myLibrary[i]["read"];
                    
                    newDiv.classList.add("bookDetails");
                    LibraryStatusDiv.appendChild(newDiv);

                    console.log(myLibrary.length);

                }
            }

    }


//   addBookToLibrary("Amal K.","Greatest Hits Volume 1",543,"Yes");

//   addBookToLibrary("Amal K.","Greatest Hits Volume 2",143,"No");

//   addBookToLibrary("Amal K.","Greatest Hits Volume 3",342,"Yes");


bookInfoDisplay();




submitButton.addEventListener('click',function(){
    // event.preventDefault();
    addBookToLibrary();

});

