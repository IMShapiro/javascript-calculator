var currentNumber = document.querySelector("[current-num]");
var previousNumber = document.querySelector("[previous-num]");
var clearButton = document.querySelector("[clear]");
var deleteButton = document.querySelector("[del]");
var equalsButton = document.querySelector("[equal]");
var numberButton = document.querySelectorAll("[num]");
var operandButton = document.querySelectorAll("[operand]");
var op;

function Calculator(){
    this.clearAll = ()=>{
        currentNumber.textContent = "0";
        previousNumber.textContent = "";
    }
    this.deleteNum = ()=>{
        if(currentNumber.textContent != "0"){
            currentNumber.textContent = currentNumber.textContent.slice(0,-1);
        }
    }
    this.operate = ()=>{
        if(previousNumber.textContent){
            if(op == "+"){
                previousNumber.textContent = parseFloat(previousNumber.textContent) + parseFloat(currentNumber.textContent);
                currentNumber.textContent = "0"
            }
            else if(op == "-"){
                previousNumber.textContent = parseFloat(previousNumber.textContent) - parseFloat(currentNumber.textContent);
                currentNumber.textContent = "0"
            }
            else if(op == "x"){
                previousNumber.textContent = parseFloat(previousNumber.textContent) * parseFloat(currentNumber.textContent);
                currentNumber.textContent = "0"
            }
            else if(op == "/"){
                previousNumber.textContent = parseFloat(previousNumber.textContent) / parseFloat(currentNumber.textContent);
                currentNumber.textContent = "0"
            }
        }
        else{
            previousNumber.textContent = currentNumber.textContent;
            currentNumber.textContent = "0";
        }
    }
    this.equals = ()=>{
        if(previousNumber.textContent){
            if(op == "+"){
                currentNumber.textContent = parseFloat(previousNumber.textContent) + parseFloat(currentNumber.textContent);
                previousNumber.textContent = "";
            }
            if(op == "-"){
                currentNumber.textContent = parseFloat(previousNumber.textContent) - parseFloat(currentNumber.textContent);
                previousNumber.textContent = "";
            }
            if(op == "x"){
                currentNumber.textContent = parseFloat(previousNumber.textContent) * parseFloat(currentNumber.textContent);
                previousNumber.textContent = "";
            }
            if(op == "/"){
                if(parseFloat(currentNumber.textContent) == 0){
                    currentNumber.textContent = "Can't divide by 0"
                }else{
                    currentNumber.textContent = parseFloat(previousNumber.textContent) / parseFloat(currentNumber.textContent);
                    previousNumber.textContent = "";
                }
            }
        }
    }
}

const calc = new Calculator();
const {deleteNum,clearAll,operate,equals} = calc;

numberButton.forEach(function (button) {
    button.addEventListener("click", function () {
            if(currentNumber.textContent.length < 7){
                if(currentNumber.textContent.includes(".") && button.textContent == "."){
                currentNumber.textContent += ""
                }
                else if(currentNumber.textContent[0] == "0" && button.textContent == "."){
                    currentNumber.textContent = "0."
                }
                else if(currentNumber.textContent == "0"){
                    currentNumber.textContent = button.textContent
                }
                else{
                    currentNumber.textContent += button.textContent
                }
            }
            else{
                alert("Maximum number length of 7 has been reached!")
            }
        })
})

operandButton.forEach(function (button) {
    button.addEventListener("click",()=>{
        op = button.textContent
        operate()
    })
})

deleteButton.addEventListener("click",deleteNum);
clearButton.addEventListener("click",clearAll);
equalsButton.addEventListener("click",equals);