const calculate = document.querySelector("#calculate");
const result = document.querySelector(".result");
let firstNumber = '';
let selectedOperator = '';
let afterNumber = '';
let = IswaitingANewValue = false;

runEventListeners();

function runEventListeners(){
    calculate.addEventListener("click",write)

}

function write(e){
    const element = e.target;

    if(element.classList.contains("number")){
        if(IswaitingANewValue){
            afterNumber += element.value
        }
        else{
            firstNumber += element.value
        }
        updateResult(element.value)
    }
    else if(element.classList.contains("operator")){
        if(!Calculator.isHaveOperator(result.innerHTML)){
            selectedOperator = element.value;
            IswaitingANewValue = true;
            updateResult(element.value)
        }
    }
    else if(element.classList.contains("equals")){
       let result =  calculater(firstNumber,selectedOperator,afterNumber).toString();
       firstNumber = result;
       clearResult();
       updateResult(result);
    }
}
function updateResult(value){
    result.innerHTML += value
}

function clearResult(){
    result.innerHTML= "";
}

function calculater(firstNumber , operator , secondNumber){
    let result;
    let dotResult = Calculator.isDotHave(firstNumber) || Calculator.isDotHave(secondNumber);
    switch(operator){
        case "+":
            result = dotResult ? parseFloat(firstNumber) + parseFloat(secondNumber) : parseInt(firstNumber) + parseInt(secondNumber);
        break;
        case "-":
            dotResult ? parseFloat(firstNumber) - parseFloat(secondNumber) : parseInt(firstNumber) - parseInt(secondNumber);
        break;
        case "*":
            dotResult ? parseFloat(firstNumber) * parseFloat(secondNumber) : parseInt(firstNumber) * parseInt(secondNumber);
        break;
        case "/":
            dotResult ? parseFloat(firstNumber) / parseFloat(secondNumber) : parseInt(firstNumber) / parseInt(secondNumber);
        break;
    }
    return result;
}
