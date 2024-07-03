//Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:
//4: 2
//9: 3
//16: 4
//where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

function findSquareRoots(numbers) {
  //Its defining a new function called which is 'findsquareroots'.It takes the parameter,'number', which is to be an array of numbers

  const squareRoots = []; //it creates an empty array called 'squareroot' to store the squarerootof the numbers

  for (const number of numbers) {
    // for loop repeats until a specified condition evaluates to false in the number array
    //'const number' is avariable that represents the current element in the array during the repetition of the loop

    const root = Math.sqrt(number); //This line calculates the square root of the current number using the 'Math.sqrt 'function and stores the result in a variable called 'root'.
    squareRoots.push(root); // adds the calculated square root (root) to the squareRoots array.
    console.log(`${number}: ${root}`); //This line prints a message to the console that shows the original number and its square root in the format "number: root".
  }
  return squareRoots; //The loop ends here...it  returns the squareRoots array, which now contains the square roots of all the numbers that were in the numbers array.
}
findSquareRoots([4, 9, 16, 25, 36]); //It calls the function with an array [4, 9, 16, 25, 36], so the function will calculate the square roots of these numbers and print the results to the console.
