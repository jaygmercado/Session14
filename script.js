// Single Line Comment

/**
 * Multiple
 * lines
 * comment
 */

// Statements

// Conditional Statements

const firstName = 'Alex';
// If / If-else / else
if (firstName === 'Benedict') {
  console.log('Hello');
} else if (firstName === 'Alex') {
  console.log('hi');
} else {
  console.log("What's up?");
}

// switch
switch (firstName) {
  case 'Benedict':
    console.log('Hello');
    break;
  case 'Alex':
    console.log('Hi');
    break;
  case 'Gelo':
    console.log('Absent');
    break;
  default:
    console.log("What's up?");
}

// Loops

// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 4);

// DRY principle
/**
 * Don't
 * Repeat
 * Yourself
 */

// Abstraction

// Functions
// DECLARING A FUNCTION

// Function Declaration are hoisted
const phrase0 = sayHello('Gelo');
console.log(phrase0);

// Function Expression
function sayHello(name) {
  return 'Hello, ' + name;
}

// Function Declaration
const sayHi = function (name) {
  return 'Hi, ' + name;
};

// Parameter
// Arrow function
let saySomethingNice = (name) => {
  return "You're great, " + name;
};

// Argument
// INVOKING / CALLING FUNCTION
const phrase1 = sayHello('Benedict');
const phrase2 = sayHi('Alex');
const phrase3 = saySomethingNice('Tope');

console.log(phrase1);
console.log(phrase2);
console.log(phrase3);

// Acti