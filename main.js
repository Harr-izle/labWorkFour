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


//create timer function
function createTimer(duration, elementId) {
  const timerElement = document.getElementById(elementId);
  let remainingTime = duration;

  const timer = setInterval(() => {
    if (remainingTime === 0) {
      clearInterval(timer);
      timerElement.textContent = 'Time\'s up!';
      console.log('Timer finished!');
      this.durationInput.value = '';
    } else {
      timerElement.textContent = `${remainingTime} seconds remaining`;
      remainingTime--;
    }
  }, 1000);

  this.durationInput = document.querySelector('#timer input[type="number"]');
}

const startButton = document.getElementById('start');
const countDownElement = document.getElementById('countDown');

startButton.addEventListener('click', () => {
  const duration = document.querySelector('#timer input[type="number"]').value;

  if (duration === '') {
    alert('Please enter a duration.');
    return;
  }

  createTimer.call(this, duration, 'countDown');
  countDownElement.textContent = `${duration} seconds remaining`;
});