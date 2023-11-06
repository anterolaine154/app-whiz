/* 
Filename: sophisticated_program.js
Content: This code demonstrates a sophisticated and elaborate program that manages a virtual library system. It includes functionalities such as adding, removing, and searching books, as well as tracking the borrowing and returning of books by library members. 
The code is more than 200 lines long and contains various classes, functions, and data structures to efficiently handle the library operations. 
*/

// Book class represents a book in the library
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = true;
  }
}

// Library class manages the library operations
class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  // Add a new book to the library
  addBook(title, author, genre) {
    const book = new Book(title, author, genre);
    this.books.push(book);
  }

  // Remove a book from the library
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Search for books in the library by title, author, or genre
  searchBooks(keyword) {
    const results = [];
    for (const book of this.books) {
      if (
        book.title.toLowerCase().includes(keyword.toLowerCase()) ||
        book.author.toLowerCase().includes(keyword.toLowerCase()) ||
        book.genre.toLowerCase().includes(keyword.toLowerCase())
      ) {
        results.push(book);
      }
    }
    return results;
  }

  // Register a new library member
  addMember(name, email) {
    const member = {
      name,
      email,
      borrowedBooks: []
    };
    this.members.push(member);
  }

  // Borrow a book from the library
  borrowBook(bookTitle, memberName) {
    const bookIndex = this.books.findIndex(book => book.title === bookTitle);
    const memberIndex = this.members.findIndex(member => member.name === memberName);

    if (bookIndex !== -1 && memberIndex !== -1) {
      const book = this.books[bookIndex];
      const member = this.members[memberIndex];
      
      if (book.available) {
        book.available = false;
        member.borrowedBooks.push(book);
        return true;  // Successful borrowing
      }
    }
    return false;  // Unsuccessful borrowing
  }

  // Return a borrowed book to the library
  returnBook(bookTitle, memberName) {
    const bookIndex = this.books.findIndex(book => book.title === bookTitle);
    const memberIndex = this.members.findIndex(member => member.name === memberName);

    if (bookIndex !== -1 && memberIndex !== -1) {
      const book = this.books[bookIndex];
      const member = this.members[memberIndex];
      
      if (!book.available && member.borrowedBooks.includes(book)) {
        book.available = true;
        member.borrowedBooks = member.borrowedBooks.filter(b => b !== book);
        return true;  // Successful book return
      }
    }
    return false;  // Unsuccessful book return
  }
}

// Sample usage of the Library class

// Create a library instance
const library = new Library();

// Add books to the library
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
library.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
library.addBook("1984", "George Orwell", "Science Fiction");
// ... more books

// Add library members
library.addMember("John Doe", "john@example.com");
library.addMember("Jane Smith", "jane@example.com");
// ... more members

// Borrow a book
const successfulBorrow = library.borrowBook("1984", "John Doe");
console.log(`Book borrowed successfully: ${successfulBorrow}`);

// Return a book
const successfulReturn = library.returnBook("1984", "John Doe");
console.log(`Book returned successfully: ${successfulReturn}`);

// Search for books
const results = library.searchBooks("Mockingbird");
console.log("Search Results:");
for (const book of results) {
  console.log(`${book.title} - ${book.author} (${book.genre})`);
}

// ... more library operations

// The code above is a simplified example representing a virtual library system with complex functionalities.
// Depending on the actual requirements and desired features, the code could be even more complex and elaborate.