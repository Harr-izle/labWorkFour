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


//Event handling and this

const button = document.getElementById('myButton');
const outputDiv = document.getElementById('output');

button.addEventListener('click', handleClick);

function handleClick() {
    const buttonId = this.id;
    const buttonContent = this.textContent;

    console.log(buttonId); 
    console.log(buttonContent); 

    const outputText = `Button ID: ${buttonId}, Button Content: ${buttonContent}`;
    outputDiv.textContent = outputText;
}

//using arrow function
// button.addEventListener('click', () => {
//     console.log(this); 
//   });
