// ----------------------
// Part 1: Variables and Conditionals
// ----------------------
let userName = "Alex";
let userAge = 20;

// Conditional: check age
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ----------------------
// Part 2: Custom Functions
// ----------------------

// Function to greet the user
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Function to generate an array of numbers from 1 to n
function generateNumbers(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}

// ----------------------
// Part 3: Loop Examples
// ----------------------

// For loop: print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`For loop count: ${i}`);
}

// While loop: print numbers 5 to 1
let count = 5;
while (count > 0) {
  console.log(`While loop count: ${count}`);
  count--;
}

// ----------------------
// Part 4: DOM Interactions
// ----------------------

// 1. Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = greetUser(userName);
});

// 2. Generate and display number list on button click
document.getElementById("generateNumbersBtn").addEventListener("click", function() {
  let numbers = generateNumbers(10); // Generates 1–10
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear list before adding

  // 3. DOM interaction: Add list items dynamically
  numbers.forEach(function(num) {
    let li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });
});
