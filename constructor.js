// const Person = (name, age) => {
//   this.name = name;
//   this.age = age;
// };

// the above code is not working because the this keyword can't be used inside arrow function ,
// so we have to use the class keyword or don't use arrow function
function Person(name, age) {
    this.name=name;
    this.age=age;
}

const person1 = new Person("Mithlesh Kumar", 19);
const person2 = new Person("Kavita Kumari", 18);
const person3 = new Person("Gitanjali Kumari", 16);
const person4 = new Person("Anjali Kumari", 12);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

class Faang {
  constructor(companyName, location) {
    this.name = companyName;
    this.location = location;
  }
}

const Faang1 = new Faang("Facebook", "US");
console.log(Faang1);
