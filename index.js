// If-Else Statement
let age = 25;

if (age > 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}


// Nested If Statement
let temperature = 20;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature < 0) {
  console.log("It's freezing outside.");
} else {
  console.log("It's comfortable outside.");
}

// Switch Case Statement
let month = 12;

switch (month) {
  case 1:
    console.log("It's January.");
    break;
  case 2:
    console.log("It's February.");
    break;
  case 3:
    console.log("It's March.");
    break;
  case 4:
    console.log("It's April.");
    break;
  case 5:
    console.log("It's May.");
    break;
  case 6:
    console.log("It's June.");
    break;
  case 7:
    console.log("It's July.");
    break;
  case 8:
    console.log("It's August.");
    break;
  case 9:
    console.log("It's September.");
    break;
  case 10:
    console.log("It's October.");
    break;
  case 11:
    console.log("It's November.");
    break;
  case 12:
    console.log("It's December.");
    break;
  default:
    console.log("Invalid month.");
}


// For Statement
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// While Loop
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

// Do While
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Rizki");