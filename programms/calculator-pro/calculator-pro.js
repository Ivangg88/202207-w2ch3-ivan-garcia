//Calculadora pro

let numberList = [];
let numResults = [];
let numbersFormated = [];
let newOperation;
function askNumber(){
    let numberListProvisional = [];
    let num;
    do {

        num = prompt("Introduce a number or press cancel to end.");
        if(isNaN(num)){
        alert("Please introduce a number or cancel to end.");
        } else {
        numberListProvisional.push(parseFloat(num));
}

} while (num !== null && num !== "");
numberListProvisional.pop();
numberList = numberListProvisional;
return numberList;
}

function calculate(array){  // function to calculate teh results.
    if(array.length === 1){
        let sqrt = Math.sqrt(array[0]);
        numResults.push(sqrt);
        return numResults;
    } else {
        let sum = array[0];
            let rest = array[0];
            let mult = array[0];
            let div = array[0];
        for(let i = 1; i < array.length; i++){
        sum += parseFloat(array[i]);
        rest -= array[i];
        mult *= array[i];
        div /= array[i];
        }
        numResults.push(sum);
        numResults.push(rest);
        numResults.push(mult);
        numResults.push(div);
        return numResults;
    }
   
}

function showResults(numResults){   //Function to show the results.
    if(numResults.length === 1){
        console.log("The result of sqrt is: " +   numResults[0]); 
    }else {
    console.log("The result of sum is: " + numResults[0]);
    console.log("the result of rest is: " + numResults[1]);
    console.log("The result of multiplication is: " + numResults[2]);
    console.log("The result of division is: " + numResults[3]);
    }
}


function formatNumbers(array){ // function to format the numbers if aren´t a integer.
    let arrayFormated = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] - Math.floor(array[i]) === 0) {
            arrayFormated [i] = array [i];
             // variable temporal usada como buffer.
             } else {
            arrayFormated [i] = parseFloat(array[i]).toFixed(3);
             }
        }
        return arrayFormated;
}
function calculatorPro(){
    numberList = askNumber();
    numResults = calculate(numberList);
    numbersFormated = formatNumbers(numResults);
    showResults(numbersFormated);
}

function clearArray(array){
for(let i = array.length; i > 0; i--){
    array.pop();
}
}

function main(){
do {
    console.clear();
    clearArray(numberList);//Reinicializar los arrays para evitar problemas de guardado anterior.
    clearArray(numResults);
    calculatorPro();
    newOperation = prompt("New Operation? (y/n)");
} while (newOperation !== "n")
alert("Thanks for your time.");
}

main();