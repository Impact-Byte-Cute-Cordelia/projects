// penamaan class menggunakan titlecase
// class person dengan function getName
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(`Hello my name is ${this.name}`);
  }

  getAge() {
    console.log(`my age is ${this.age}`);
  }
}

const Thoriq = new Person("Thoriq", 20);

console.log(Thoriq);

Thoriq.getName();

// Thoriq.getFullName()

// mengextends class person ke employee

class Employee extends Person {
  constructor(name, age, fullName) {
    super();
    this.name = name;
    this.age = age;

    this.fullName = fullName;
  }

  getFullName() {
    console.log(`Hello my full name is ${this.fullName}`);
  }
}

const Auzan = new Employee("Auzan", 21, "Auzan Assidqi");

// console.log(Auzan);

Auzan.getName();
Auzan.getAge();
Auzan.getFullName();

// parent bisa menurunkan ke child, tetapi child tidak bisa memberi ke 〽

class EmployeeDatabase extends Employee {
  constructor(name) {
    super();

    this.name = name;
  }
}

const whoEver = new EmployeeDatabase("whoEver");

whoEver.getName();
