function getMaxValueFromNumber(num) {
  if (num < 10) {
    throw new Error("The number must have at least 2 digits.");
  }

  // Convert the number to a string, split into digits, sort in descending order, and join back
  let maxNumber = parseInt(num.toString().split('').sort((a, b) => b - a).join(''));

  return maxNumber;
}

// Example inputs
let input1 = 215;
let input2 = 1093;

// Get the results
let result1 = getMaxValueFromNumber(input1);
let result2 = getMaxValueFromNumber(input2);

// Output the results
console.log(result1); // 521
console.log(result2); // 9310
