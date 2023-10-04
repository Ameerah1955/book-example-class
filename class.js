// OOP - object oriented programming - common pattern in programming

// example: create 21 student object

// how to write a class: blueprint to create object
class Student {
  //constructor: function/method, receive arg to create object property

  constructor(name) {
    //set property
    // this => student 1
    this.studentName = name;
  }
}
// create an object
const student1 = new Student("andrea");
// student1 = {studentName:"andrea"}

class School {
  // exercise - constructor
  constructor(name, numberOfStudents) {
    this.name = name;
    this.numberOfStudents = numberOfStudents;
  }
  // method: actions,logic,behavior
  getNumberOfStudents() {
    return this.numberOfStudents;
  }
}
//create instant of a class
const yuSchool = new School("yu", 200);

// inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walking");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // super: both name and walk()
    super(name);
    this.breed = breed;
  }
}

// parent - children
const dog1 = new Dog("Neo", "husky");
// dog1.name;

// example - student
class Cat extends Animal {
  constructor(name, color) {
    // super: both name and walk()
    super(name);
    this.color = color;
  }
}

const cat1 = new Cat("Lyly", "white");
// cat1.color

// encapsulation
class BankAccount {
  #accountNumber;
  #balance;

  constructor(accountNumber, balance) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }
  // method
  getBalance() {
    return this.#balance;
  }
}

const bankAccount1 = new BankAccount(1, 2);

console.log(bankAccount1.balance, "balance 1");
console.log(bankAccount1.getBalance(), "balance");
