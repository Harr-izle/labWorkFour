// object method and this

const person = {
    name : 'Harriet Buadee',
    age: 25,

    greet: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
person.greet();

// using bind
(person.greet.bind(person))()




//Private Data with Closure and this 

function createCounter() {
    let count = 0; // Private variable
  
    return {
      increment: function() {
        count++;
        console.log(`Count: ${count}`);
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); 