let numResult;
let numCalc;
const num1 = prompt("Insert the first number");

if (Number.isNaN(num1)) {
  alert("Error it´s not a number");
  console.log("Must be a number /n End of programm");
} else {
  const num2 = prompt("Insert the second number");
  if (Number.isNaN(num2)) {
    const sqrtResult = Math.sqrt(num1);
    console.log(`Square root: ${sqrtResult}`);
  } else {
    numCalc = ["Sum: ", "Rest: ", "Multiplication: ", "Division: "];
    numResult = [
      parseFloat(num1) + parseFloat(num2),
      num1 - num2,
      num1 * num2,
      num1 / num2,
    ];
  }
  console.log("Results:");

  for (let i = 0; i < numResult.length; i++) {
    if (numResult[i] - Math.floor(numResult[i]) === 0) {
      console.log(numCalc[i] + numResult[i]);
    } else {
      console.log(numCalc[i] + parseFloat(numResult[i]).toFixed(3));
    }
  }
}
