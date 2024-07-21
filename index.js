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

//If a number is autobiographical, then the number's digits describe itself.
//The first digit is the amount of times the digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the digit 2 appears, etc.
//This repeats for all digits of the number. The number 6210001000 is autobiographical, because it has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.
//Create a function that takes an integer n and returns whether or not n is an autobiographical number.
//Examples
//isAutobiographical(6210001000) ➞ true
//isAutobiographical(12345) ➞ false
//isAutobiographical(1210) ➞ true
// one 0, two 1's, one 2, zero 3's
//isAutobiographical(638) ➞ false
//isAutobiographical(0) ➞ false
// claims no zeroes, however zero is the first digit
//Notes
//Numbers with more than 10 digits should always return false (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
//n is always >= 0 and is always an integer.

//steps to be followed

//1.declare the function that takes the integer
//2.convert the integer into a string to access all the digits
//3.store the values of each digit that was converted into a string(variable)
//4.inside the function state the requirements of an autobiographical no.()
//5.initiallise an array to count the occurence of every digit (9)
//6.use a loop,(length of array)  -will compare  the string to the array created
//7. (boolean)-if it passes the test returns true ...if not it returns false
//8.call the function

function isAutobiographical(y) {
  //Defining the function which takes the integer 'y'
  if (y.toString().length > 10) return false;

  // it checks if the number of digits in 'y' is greater than 10 and if it is...it returns false because its not autobiographical
  const digits = new Array(10).fill(0);
  // we have created an array called 'digit' and initialized it with
  //'const digit'which is declaring the variable digit (hold the array we created)
  // and 'new Array(10)' which is creating an array with 10 elements
  //'fill' . The fill method is used to fill all the elements of the array with a specific value. Here, 0 is passed as the argument,
  // so all ten elements of the array will be filled with the number zero.
  console.log(digits);
  //while (y > 0) {
  //it works as long as no. is greater than 0
}
//}
