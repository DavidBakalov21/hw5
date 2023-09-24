var count=0;
      var NewBookText=document.getElementById("NewBookText");
      var PageAmount=document.getElementById('amount');
      class Book{
    constructor(title, authors, numberOfPages,isRead, isFavorite){
        this.title=title;
        this.authors=authors;


        this.numberOfPages=numberOfPages;
        this.isRead=isRead;
        this.isFavorite=isFavorite;
    }
    markAsRead(){
      this.isRead=!this.isRead;  
      alert(this.isRead)
    }
    
    toggleFavorite(){
        this.isFavorite=!this.isFavorite
        alert(this.isFavorite)
    }
}
 class Bookshelf{
    constructor(books){
        this.books=books;


       
    }
    addBook(book){
        count++;
      this.books.push(book)
    }
    
    removeBook(name, BookInId){
        count--;
        BookInId.parentNode.removeChild(BookInId);
        
        PageAmount.textContent="Total amount of books "+count;
        this.books = this.books.filter(book=> book!= name);  

    }

    getUnreadBooks() {
return this.books.filter(book=>book.isRead==false)
    }

    getFavBooks(){

        return this.books.filter(book=>book.isFavorite==true)
    }


}
let shelf = new Bookshelf([]);
function AlertUnRead(){
    var unread=shelf.getUnreadBooks();
for (let index = 0; index < unread.length; index++) {
    alert(unread[index].title);
    
}
}

function AlertFav(){
    var fav=shelf.getFavBooks();
for (let index = 0; index < fav.length; index++) {
    alert(fav[index].title);
    
}
}

function Add(){
    var TitleInp=document.getElementById("titleInp").value;
      var AuthorsInp=document.getElementById("authorsInp").value;
      var PageNumInp=document.getElementById("PageNumInp").value;
      var nBook=new Book(TitleInp, AuthorsInp,PageNumInp, false,  false)
    shelf.addBook(nBook);
    NewBookText.textContent= "New book "+TitleInp;
    PageAmount.textContent="Total amount of books "+count;
    var container = document.getElementById("bookInfoCont"); 
    var newBookInfo = document.getElementById('bookInfo').cloneNode(true);
    newBookInfo.id = 'bookInfo_' + TitleInp;
    newBookInfo.style.display='flex'
    var buttons = newBookInfo.querySelectorAll('button');
    buttons[0].addEventListener('click', () => nBook.toggleFavorite());
    buttons[1].addEventListener('click', () => nBook.markAsRead());
    buttons[2].addEventListener('click', () => shelf.removeBook(nBook, newBookInfo));
    newBookInfo.querySelector('p').textContent = 'Book is '+TitleInp + ' author is: ' + AuthorsInp + ' pages:' + PageNumInp;
    container.appendChild(newBookInfo);
}