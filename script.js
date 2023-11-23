function Author(name, birthYear, nationality) {
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
}
function Book(title, author, genre, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
  this.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(` Birth year:${this.author.birthYear}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
  };
}
const author1 = new Author("Jhon doe", 1890, "American");
const author2 = new Author("Kamla Das", 1971, "Indian");

const book1 = new Book("mystery of life", author1, "Thrill", 180);
const book2 = new Book("My mother house", author2, "Mystrious", 200);
//display book details
book1.getBookInfo();
book2.getBookInfo();
