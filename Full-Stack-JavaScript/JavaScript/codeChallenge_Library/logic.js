/* Pseudo Code
1)Form input fields: author, title, numberOfPages,read and button "New Book" button
2) When Submit button is clicked capture form data by running function "addBookToLibrary()"
3) function "addBookToLibrary()" will create a Book Object by calling the "function bookData" constructor to store the user entered data into an Array "myLibrary".
4) function "addBookToLibrary()" will call function "bookInfo" to loop through the Array "myLibrary" and display on the webpage as a "book info Card".
5) Each book "book info Card" will have a button "Delete Book" which will delete the book from the Array "myLibrary", using the index number of the array. Then call up the function "bookInfo" to update the webpage. 
6) Each book "book info Card" will have a button "Read" which will update the relevant object "book.read=yes". Then call up the function "bookInfo" to update the webpage. 
*/


const myLibrary=[];

// author, title, number of pages, whether it’s been read and anything else you might want

function bookInfoDisplay(displayOut)
{
    // const bookInfoDiv=document.querySelector(".bookInfo");
    // const content=document.createElement("p");
    // content.classList.add("content");
    const bookInfoAuthor=document.querySelector(".bookInfoAuthor");
    bookInfoAuthor.textContent=displayOut;
}



function bookData(author, title, numberOfPages,read)
{
    this.author=author;
    this.title=title;
    this.numberOfPages=numberOfPages;
    this.read=read;
}

myLibrary.push(new bookData("Amal","The Great",4939,"No"));
myLibrary.push(new bookData("Wimal","Not So Great",23,"No"));
myLibrary.push(new bookData("Monica","Not tooo bad",223,"Yes"));

// bookInfoDisplay(book1['author']); 

function addBookToLibrary(bookData) {
    // myLibrary.push(bookData);
    
    for (let i=0;i<myLibrary.length;i++)
        {
            bookInfoDisplay(myLibrary[0]["author"]);
            // bookInfoDisplay(myLibrary[i]["title"]);
            console.log(myLibrary[i]);
            // console.log(myLibrary);
        }
  }

  addBookToLibrary();
