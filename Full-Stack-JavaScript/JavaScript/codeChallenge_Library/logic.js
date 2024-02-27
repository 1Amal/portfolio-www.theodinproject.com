const myLibrary=[];

// author, title, number of pages, whether it’s been read and anything else you might want

function bookInfoDisplay(displayOut)
{
    const bookInfoDiv=document.querySelector(".bookInfo");
    // const content=document.createElement("p");
    // content.classList.add("content");
    bookInfoDiv.textContent=displayOut;
}



function bookData(author, title, numberOfPages,read)
{
    this.author=author;
    this.title=title;
    this.numberOfPages=numberOfPages;
    this.read=read;
}

const book1=new bookData("Amal","The Great",4939,"No");

// bookInfoDisplay(book1['author']); 

function addBookToLibrary() {
    myLibrary.push(book1.title);
    bookInfoDisplay(myLibrary[0]);
  }

  addBookToLibrary();
