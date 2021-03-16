class Book {
  constructor(isbn, title, pageCount, yearPublished, author, publisher, coverType){
    this.isbn = isbn;
    this.title = title;
    this.pageCount = pageCount;
    this.yearPublished = yearPublished;
    this.author = author;
    this.publisher = publisher;
    this.coverType = coverType;
  }

  read(){
    console.log("You're now reading " + this.title);
  }

  getPages(){
    console.log("This book has " + this.pageCount + " pages");
  }

  getYearPublished(){
    console.log("This book was published in " + this.yearPublished);
  }
}


class Genre extends Book {
  constructor(isbn, title, pageCount, yearPublished, author, publisher, coverType, genreName){
    super(isbn, title, pageCount, yearPublished, author, publisher, coverType);
    this.genreName = genreName;
  }

  setResponse(resp){
    this.response = resp;
  }

  getResponse(){
    console.log("When I read this book, I react with " + this.response);
  }

  getGenre(){
    console.log("This book is of genre " + this.genreName);
  }
}


class Author {
  constructor(name, gender, fromCountry, mainGenre, amountWritten){
    this.name = name;
    this.gender = gender;
    this.country = fromCountry;
    this.mainGenre = mainGenre;
    this.amountWritten = amountWritten;
  }

  write(){
    // Real code to accomplish the task that the method describes (i.e its name)
    this.amountWritten++;
    console.log(this.name, "is now writing his/her new book and will, when finished, have written", this.amountWritten, "books in total");
  }

  setMainGenre(newGenre){
    this.mainGenre = newGenre;
  }

  getMainGenre(){
    console.log(this.name + "'s new main genre is " + this.mainGenre);
  }

  setAmountWritten(newAmount){
    this.amountWritten = newAmount;
  }

  getAmountWritten(){
    console.log(this.name + " has written " + this.amountWritten + " books in total");
  }
}


class LibraryBranch {
  constructor(operatedBy, location, numBooks, numEmployees){
    this.operator = operatedBy;
    this.location = location;
    this.numBooks = numBooks;
    this.numEmployees = numEmployees;
  }

  lendOutBook(isbn){
    console.log("You are borrowing the book with ISBN-nr " + isbn);
  }

  receiveBook(isbn){
    console.log("You are returning the book with ISBN-nr " + isbn);
  }

  setNumBooks(newAmount){
    this.numBooks = newAmount;
  }

  getNumBooks(){
    console.log("The current amount of books in stock are " + this.numBooks);
  }

  setNumEmployees(newAmount){
    this.numEmployees = newAmount;
  }

  getNumEmployees(){
    console.log("The current amount of employees are " + this.numEmployees);
  }
}


class PublicationCompany {
  constructor(companyName){
    this.name = companyName;}
}