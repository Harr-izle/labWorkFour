//object method and this

const person = {
    name : 'Harriet Buadee',
    age: 25,

    greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
person.greet();

//using bind
(person.greet.bind(person))()