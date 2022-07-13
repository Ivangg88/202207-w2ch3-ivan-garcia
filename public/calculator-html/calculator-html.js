const numberButton = document.getElementsByName('data-number');
const opartionButton = document.getElementsByName('data-opera');
const resultButton = document.getElementsByName('data-igual')[0];
const deleteButton = document.getElementsByName('data-delete')[0];
const changeStyleButton = document.getElementsByClassName('change-style')[0];
const decimalButton = document.getElementsByName('decimal')[0];
const cssSheet = document.getElementById("css");
let change = true;
let result = document.getElementById('result')
let currentOp = '';
let previousOp = '';
let operator = undefined;
let calculated = false;
let firstNumber = true;

numberButton.forEach((button) =>{
    button.addEventListener('click', ()=>{
        addNumber(button.innerText);   
    })
});

opartionButton.forEach((button) =>{
    button.addEventListener('click', ()=>{
        selectOperator(button.innerText);   
    })
});

resultButton.addEventListener('click', ()=>{
    calculate();
    displayUpdate();
});

deleteButton.addEventListener('click', ()=>{ 
    clear();
    displayUpdate();
});

const addDecimal = () =>{
    let decimalPoint = ".";

    if(currentOp ===""){
        currentOp = 0;
    }

    if(currentOp - Math.floor(currentOp) === 0){
        currentOp = currentOp.toString() + decimalPoint;
        parseFloat(currentOp);
        displayUpdate();
    }

}

decimalButton.addEventListener(`click`, addDecimal);

const changeStyleSheet = () =>{

    if(change){
    
        cssSheet.setAttribute('href','styles2.css');
        change = false
    }else if(!change){
        cssSheet.setAttribute('href','styles.css');
        change = true
    }

}

changeStyleButton.addEventListener('click', changeStyleSheet);

const selectOperator = (op) =>{
    if(currentOp === '') return;
    if(previousOp !== ''){
        calculate();
    }
    operator = op.toString();
    previousOp = currentOp;
    currentOp = '';
}

 const calculate = ()=>{
    let calc;
    const previous = previousOp;
    const current = currentOp;
    if(isNaN(previous) || isNaN(current)) return;
    switch(operator){
        case '+':
            calc = parseFloat(previous) + parseFloat(current);
            break;
        case '-':
            calc = previous - current;
            break;
        case 'x':
            calc = previous * current;
            break;
        case '/':
            calc = previous / current;
            break;
        default:
            return;
    }

    currentOp = calc;
    operator = undefined;
    previousOp = '';
}

const addNumber =(num) =>{
    currentOp = currentOp.toString() + num.toString();
    displayUpdate();
}

const clear = ()=> {
    currentOp = '';
    previousOp = '';
    operator = undefined;
}

const displayUpdate = () =>{
    if(currentOp - Math.floor(currentOp) === 0){
        result.value = currentOp;
    }else{
        result.value = parseFloat(currentOp).toFixed(3);
    }
}

clear();


