// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");// added simi colon
}
console.log(nameQuestion()); // added simi colon


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third; // added simi colon
  console.log(sum);
} //realigned the closing bracket
console.log(addThreeNums(1, 2, 3)); //add log so it showes in terminal
console.log(addThreeNums(4, 2, 7));//add log so it showes in terminal

// EX 3:
function makeFreshPesto(){ //wrote out function
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
} //bracket (cummited out bracket)
console.log(makeFreshPesto());


//  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`); // moved the "." inside the ``
}
console.log(average(5,10)); // called and log the method
