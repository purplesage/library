let library = [];
let theValues = document.getElementById('form').getElementsByTagName('input');
let bookTest = {title: "hello", author: "and", pages: "GOODBYE", read: 'already read'};
let bookSection = document.querySelector(".book-section");
let button = document.getElementById('submit1');
let AwsomeNewBook;
let newP;
let identifier = 0;

//* book constructor-----------------------------------

function book(title, author, pages, read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//*----------------------------------------------------

function display(){
    let bookSectionDivs = document.querySelector(".book-section").getElementsByTagName('div');  
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute("class", "book");
    bookSection.appendChild(bookDiv);
    identifier = bookSectionDivs.length;
    

    //* ID assigner------------------------------
                

    for (i = 0; i <= identifier - 1; i++){
        bookSectionDivs[i].removeAttribute('id');
        bookSectionDivs[i].setAttribute('id', `${i}`);
    }
      
    //! display and book remover (works, but lacks book remover, will add when i figure out how to save the books)
    //note: some other minor things need to be fixed as well. Will handle it with the rest of the pending stuff.

    bookDiv.addEventListener('click', () =>{
        
        if (identifier === 1){
            bookSection.removeChild(bookSectionDivs[0]);
        
        }else if(identifier > 1){
            bookSection.removeChild(bookSectionDivs[bookDiv.getAttribute('id')]);
        }

        identifier = bookSectionDivs.length;
        for (i = 0; i <= identifier - 1; i++){
            bookSectionDivs[i].removeAttribute('id');
            bookSectionDivs[i].setAttribute('id', `${i}`);
        }

    })

    //*------------------------------------------------------------

    //* P ELEMENT OF BOOK CREATION----------------------------------
    
    for (key of Object.keys(AwsomeNewBook)){
        newP = document.createElement('p');

        if (key == "title"){
            newP.textContent = `TITLE: ${AwsomeNewBook[key]}`;
            bookDiv.appendChild(newP);
        
        }else if (key == "author"){
            newP.textContent = `AUTHOR: ${AwsomeNewBook[key]}`;
            bookDiv.appendChild(newP);
        
        }else if (key == "pages"){
            newP.textContent = `PAGES:\n ${AwsomeNewBook[key]}`;
            bookDiv.appendChild(newP);
        
        }else if (key == "read"){

            if (AwsomeNewBook[key] == true){
                newP.textContent = "Already read";
                bookDiv.appendChild(newP);
            
            }else{

                newP.textContent = "Not read yet";
                bookDiv.appendChild(newP);

            }
        }
    }
    //*---------------------------------------------------------
}


//* book creation---------------------------------------------------

button.addEventListener('click', () => {

    AwsomeNewBook = new book(theValues[0].value, theValues[1].value, theValues[2].value, theValues[3].checked);
    library.push(AwsomeNewBook);
    display();
   

});

//*-------------------------------------------------------------------






