"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division

// function add
function addition(num1, num2) {
  return num1 + num2;
}
//console.log(addition(2,3));

//function subtract
function subtraction(num1, num2) {
  return num1 - num2;
}
//console.log(subtraction(2, 2));

//function multiple
function multiplication(num1, num2) {
  return num1 * num2;
}
//console.log(multiplication(5, 2));

//function division
function division(num1, num2) {
  if(num1 === 0 || num2 === 0){
    return 'Cannot divide by zero'
  }else
    return num1 / num2;
}
//console.log(division(6, 2));


// Step 02: Create a Validation Function for Inputs
function validateInput(num1, num2) {
  if((typeof num1 === "number" && !isNaN(num1)) && (typeof num2 === "number" && !isNaN(num2))) {
    return null;
  }
  else{
    return "both inputs must be numbers";
  }
}
//console.log(validateInput("2",2));


// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1,num2,operation){
 let check = validateInput(num1,num2);
 if(check === null){

  switch(operation){
    case "add":
      return addition(num1,num2);
    case "subtract":
      return subtraction(num1,num2);
    case "multiply":
      return multiplication(num1,num2);
    case "divide":
      return division(num1,num2);
    default:
      return 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".' ;
  }
  }else{
  return "both inputs must be numbers";
 }

}

   console.log(calculator(10,5,"add"));
   console.log(calculator(10,"5","divide"));
   console.log(calculator(10,0,"divide"));
   console.log(calculator(10,5,"unknown"));

