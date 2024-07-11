//Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:
//4: 2
//9: 3
//16: 4
//where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

// function findSquareRoots(numbers) {
//   //Its defining a new function called which is 'findsquareroots'.It takes the parameter,'number', which is to be an array of numbers

//   const squareRoots = []; //it creates an empty array called 'squareroot' to store the squarerootof the numbers

//   for (const number of numbers) {
//     // for loop repeats until a specified condition evaluates to false in the number array
//     //'const number' is a variable that represents the current element in the array during the repetition of the loop

//     const root = Math.sqrt(number); //This line calculates the square root of the current number using the 'Math.sqrt 'function and stores the result in a variable called 'root'.
//     squareRoots.push(root); // adds the calculated square root (root) to the squareRoots array.
//     console.log(`${number}: ${root}`); //This line prints a message to the console that shows the original number and its square root in the format "number: root".
//   }
//   return squareRoots; //The loop ends here...it  returns the squareRoots array, which now contains the square roots of all the numbers that were in the numbers array.
// }
// findSquareRoots([4, 9, 16, 25, 36]); //It calls the function with an array [4, 9, 16, 25, 36], so the function will calculate the square roots of these numbers and print the results to the console.

//for each

// function findSquareRootsForEach(numbers) {
//   const squareRoots = [];
//   numbers.forEach((number) => {
//     const root = Math.sqrt(number);
//     squareRoots.push(root);
//   });
//   return squareRoots;
// }

// const numbers = [4, 9, 16, 25];
// let squareroot = findSquareRootsForEach(numbers);
// console.log(squareroot);

//Even

// function getEvenSquareRoots(numbers) {
//   // Its defining the function 'getEvenSquareRoots' that takes the argument'numbers'which is an array (4, 9, 16, 25)
//   const evenSquareRoots = []; //initializing ....an empty array is created to store the sqrt of the even numbers

//   for (let i = 0; i < numbers.length; i++) {
//     // for loop goes through each number in the numbers array, one by one.as long as 'i' is less than the 'numbers.length' the loop continues
//     if (numbers[i] % 2 === 0) {
//       //check if number is even
//       const squareRoot = Math.sqrt(numbers[i]); //calc sqrt

//       evenSquareRoots.push(squareRoot); //Add the Square Root to the Array:
//       console.log(`${numbers[i]}: ${squareRoot}`);
//     }
//   }

//   return evenSquareRoots;
// }

// getEvenSquareRoots([4, 9, 16, 25]);

// function squareRootsAboveX(nums, x) {
//Nums contains an array of no. [4,9,16,25]  x ...its a no.[10]
//initializing an empty array to store the square roots of the numbers that are greater than 'x'...then loops thru the numbersand checks if the numbers are greater than 'x' then calculates the square root

//   let result = [];

//   for (let num of nums) {
//     if (num > x) {
//       result.push(Math.sqrt(num));
//     }
//   }
//   return result;
// }

// console.log(squareRootsAboveX([4, 9, 16, 25], 10));

//Continue and for... if
// function LeapYears() {
//   // Loop through each year from 1900 to 1999
//   for (let year = 1901; year <= 1999; year++) {
//     // Check if the current year is not divisible by 4
//     if (year % 4 !== 0) {
//       // If not divisible by 4, skip to the next iteration
//       continue; // Skip this iteration if year is not divisible by 4
//     }

//     console.log(year);
//   }
// }
// // Calling the function to print leap years in the 20th century
// LeapYears();

//while

//Given the age of a person who was born on February 29th,
// write a function that returns how many times the person has celebrated their birthday on the date that they were born.

function leapYearBirthday(age) {
  //Defining the function which has a parameter called age
  let years = 0; // declaring a variable 'year' and initialize to 0
  while (age > 0) {
    // The loop will continue to iterate as long as the value of age is greater than 0.
    if (age % 4 === 0) {
      //The condition inside the if statement checks if the current value of age divided by 4 has a remainder of 0
      years++; //it excutes if the condition on the if statement is met...then it increments the value by 1
    }
    age = age - 1; // age--
  }

  return years; // defines the return statement of the function.
}
console.log(leapYearBirthday(10));
console.log(leapYearBirthday(20));
console.log(leapYearBirthday(30));
console.log(leapYearBirthday(40));
console.log(leapYearBirthday(50));
console.log(leapYearBirthday(60));
console.log(leapYearBirthday(70));
console.log(leapYearBirthday(80));
console.log(leapYearBirthday(90));
console.log(leapYearBirthday(100));
