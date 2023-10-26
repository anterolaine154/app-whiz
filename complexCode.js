/*
Filename: complexCode.js
Language: JavaScript

This code demonstrates a complex system for managing a library with books and users. It includes functionality for adding and removing books, borrowing and returning books, and managing user information.

*/

// Book class representing a book in the library
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isAvailable = true;
  }
}

// User class representing a library user
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book);
      console.log(`${this.name} borrowed ${book.title}`);
    } else {
      console.log(`Sorry, ${book.title} is not available`);
    }
  }

  returnBook(book) {
    if (!book.isAvailable && this.borrowedBooks.includes(book)) {
      book.isAvailable = true;
      this.borrowedBooks = this.borrowedBooks.filter((b) => b !== book);
      console.log(`${this.name} returned ${book.title}`);
    } else {
      console.log(`You haven't borrowed ${book.title}`);
    }
  }
}

// Library class managing the books and users
class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book.title} added to the library`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`${book.title} removed from the library`);
    } else {
      console.log(`Book not found in the library`);
    }
  }

  addUser(user) {
    this.users.push(user);
    console.log(`User ${user.name} added to the library`);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User ${user.name} removed from the library`);
    } else {
      console.log(`User not found in the library`);
    }
  }
}

// Create a new library
const myLibrary = new Library();

// Create books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic Fiction");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Classic Fiction");
const book3 = new Book("1984", "George Orwell", "Dystopian Fiction");
const book4 = new Book("Pride and Prejudice", "Jane Austen", "Classic Fiction");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

// Create users
const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");

// Add users to the library
myLibrary.addUser(user1);
myLibrary.addUser(user2);

// User borrows books
user1.borrowBook(book3);
user2.borrowBook(book1);
user2.borrowBook(book4);

// User tries to borrow an already borrowed book
user1.borrowBook(book4);

// User returns books
user2.returnBook(book1);
user1.returnBook(book3);

// Remove books from the library
myLibrary.removeBook(book2);

// Remove users from the library
myLibrary.removeUser(user1);
myLibrary.removeUser(user2);
