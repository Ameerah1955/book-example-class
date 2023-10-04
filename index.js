import { Book } from "./book.js";
import { Customer } from "./customer.js";
import { Library } from "./library.js";

const book1 = new Book("The Great Tale", "Alice Smith", 1);
book1.getTitle();

const library1 = new Library("YU");
library1.addBook(book1);
console.log(library1.books);

const customer1 = new Customer(1, "Andrea");
console.log(customer1.borrowBook(1));

customer1.getBorrowedBooks();
