export class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.customers = [];
  }

  getBooks() {
    console.log(this.books);
  }

  addBook(book) {
    const isExisted = this.books.some((item) => item.id === book.id);
    if (!isExisted) {
      this.books.push(book);
      return true;
    } else return false;
  }

  //   removeBook(book) {
  //     const foundIndex = this.books.findIndex((item) => item.id === book.id);
  //     if (foundIndex > -1) {
  //       this.books.splice(foundIndex, 1);
  //       return true;
  //     }
  //     return false;
  //   }

  //   returnBook(bookId, customerId) {
  //     // check customer has books
  //     foundCustomer = this.customers.some(
  //       (customer) => customer.id === customerId
  //     );
  //     if (foundCustomer) {
  //       return foundCustomer.removeBook(bookId);
  //     }
  //     return false;
  //   }

  //   addCustomer(customer) {
  //     const isIncluded = this.customers.some((item) => item.id === customer.id);
  //     if (!isIncluded) {
  //       this.customers.push(customer);
  //       return true;
  //     }
  //     return false;
  //   }
}
