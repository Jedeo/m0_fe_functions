// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hello!");

}
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function getLocation(location){
  console.log(location);
}
getLocation("Colorado");
// 3: Write a function that has 3 parameters: a string and two numbers.
//The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job.
//The function should print out a sentence that includes the name of
//the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function jobListing(company, maxSalary, minSalary){

  var range = maxSalary - minSalary;
  console.log(`${company} pay range is ${range}.`);
}
jobListing("jedeo",1001000,10000);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(numRemingIteam, item ) {
  var inStock = [4, 3, 0, 1];
  for (var i = 0; i < inStock.length; i++) {
  if (numRemingIteam === inStock[i] && inStock[i] >= 4){
    console.log(`${item} is in stuock`);
  }else if (inStock[i]  === numRemingIteam && numRemingIteam <= 3) {
    console.log(`${item} is running low`);
  }else if (numRemingIteam === 0) {
    console.log(`${item} - out of stock`);
  }
}
}

  //console.log(`Your iteam is ${item} and there is ${numRemingIteam} in stock.`);

//  console
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
