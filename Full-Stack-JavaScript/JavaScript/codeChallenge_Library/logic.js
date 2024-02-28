/* Pseudo Code
1)Form input fields: author, title, numberOfPages,read and button "New Book" button
2) When "New Book" button is clicked form data will be captured using function "addBookToLibrary()"
3) function "addBookToLibrary()" will create a Book Object by calling the "function bookData" constructor to store the user entered data into an Array "myLibrary".
4) function "addBookToLibrary()" will call function "bookInfoDisplay" to loop through the Array "myLibrary" and display on the webpage as a "book info Card".
5) Each book "book info Card" will have a button "Delete Book" which will delete the book from the Array "myLibrary", using the index number of the array. Then call up the function "bookInfoDisplay" to update the webpage. 
6) Each book "book info Card" will have a button "Read" which will update the relevant object "book.read=yes". Then call up the function "bookInfoDisplay" to update the webpage. 
*/


const myLibrary=[];


function addBookToLibrary(newBook) 
    {
        myLibrary.push(new bookData("Amal","The Great",4939,"No"));
        myLibrary.push(new bookData("Wimal","Not So Great",423,"No"));
        myLibrary.push(new bookData("Monica","Not tooo bad",223,"Yes"));
        bookInfoDisplay(myLibrary);
        console.log(myLibrary);
        
    }


  function bookData(author, title, numberOfPages,read)
    {
    this.author=author;
    this.title=title;
    this.numberOfPages=numberOfPages;
    this.read=read;
    }


function bookInfoDisplay(displayOut)
    {
    // const bookInfoDiv=document.querySelector(".bookInfo");
    // const content=document.createElement("p");
    // content.classList.add("content");

    for (let i=0;i<myLibrary.length;i++)
    {
        // bookInfoDisplay(myLibrary[0]["author"]);

        const bookInfoAuthor=document.querySelector(".bookInfoAuthor");
        bookInfoAuthor.textContent="Author Name: " + myLibrary[i]["author"];

        const bookInfoTitle=document.querySelector(".bookInfoTitle");
        bookInfoTitle.textContent="Title Name: " + myLibrary[i]["title"];
    
        const bookInfoNumberOfPages=document.querySelector(".bookInfoNumberOfPages");
        bookInfoNumberOfPages.textContent="Number of Pages: " + myLibrary[i]["numberOfPages"];
    
        const bookInfoRead=document.querySelector(".bookInfoRead");
        bookInfoRead.textContent="Book Read: " + myLibrary[i]["read"];

        console.log(myLibrary[i]);

    }





    }

// bookInfoDisplay(book1['author']); 

  addBookToLibrary();
