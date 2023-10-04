// export class Customer {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.borrowedBooks = [];
//   }

//   getName() {
//     console.log(this.name);
//   }

//   getBorrowedBooks() {
//     console.log(this.borrowedBooks);
//   }

//   borrowBook(id) {
//     const foundBook = this.borrowedBooks.find((book) => book.id === id);
//     if (!foundBook) {
//       this.borrowedBooks.push(foundBook);
//       return true;
//     }
//     return false;
//   }

//   returnBook(id) {
//     const foundIndex = this.borrowedBooks.findIndex((book) => book.id === id);
//     if (foundIndex > -1) {
//       this.borrowedBooks.splice(foundIndex, 1);
//       return true;
//     }
//     return false;
//   }
// }

class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.transaction = [];
  }
}
