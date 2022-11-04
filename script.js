const add = (a,b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => b === 0? 0 : a/b

const operate = (op, a, b) => {
    a = Number(a)
    b = Number(b)
    if (op.operation == 'add'){
        return add(a, b)
    }
    else if (op.operation == 'sub'){
        return subtract(a, b)
    }
    else if (op.operation == 'mult'){
        return multiply(a, b)
    }
    else if(op.operation == 'div'){
        return divide(a, b)
    }
}



//VARIABLES

let valueA = ""
let operator = {
    text : "",
    operation : ""
}
let valueB = ""
let result = ""

//SELECTORS

const numbers = document.querySelectorAll('[type="number"]')
console.log(numbers)
const operators = document.querySelectorAll('[type="operator"]')
console.log(operators)
const display = document.querySelector('.display')
const equal = document.querySelector('#equal')
const clearBtn = document.getElementById('clearBtn')
const percentBtn = document.getElementById('perBtn')
const deleteBtn = document.getElementById('delBtn')
const checkBox = document.getElementById('checkbox')

//EVENT LISTENERS

numbers.forEach(button=> button.addEventListener('click', numDisplay))
operators.forEach(button=> button.addEventListener('click', opDisplay))
deleteBtn.addEventListener('click', deleteLast)
clearBtn.addEventListener('click', clearAll)
checkBox.addEventListener('change', changeMode)


//FUNCTIONS
function numDisplay(e){
    if (operator.operation == "") {
        valueA += e.target.innerText
        display.innerHTML = valueA
    }
    else {
        valueB += e.target.innerText
        display.innerHTML += e.target.innerText
        console.log(valueA, valueB, operator)
    }
}

function opDisplay(e){
    if (valueB == "" && e.target.id != 'equal'){
        operator.text = e.target.innerHTML
        operator.operation = e.target.id
        display.innerHTML += e.target.innerText
        return
    }
    if (e.target.id == 'equal'){
        result = operate(operator, valueA, valueB)
        display.innerText = result.toString()
        valueA = result
        valueB = ""
        operator.operation = ""
        return
    }
    if (!(valueB == "") && e.target.id != 'equal'){
        console.log('hola')
        valueA = operate(operator, valueA, valueB)
        valueB = ""
        operator.text = e.target.innerHTML
        operator.operation = e.target.id
        display.innerHTML += e.target.innerText
        console.log(valueA)
    }
    console.log(valueA, valueB, e.target.innerText)
}

function deleteLast(){
    if (display.innerHTML.charAt(display.innerHTML.length - 1) === operator.text) {
        operator.operation = ""
        valueB = ""
    }
    display.innerHTML = display.innerHTML.slice(0, -1)
    if (operator.operation === ""){
        valueA = display.innerHTML
    }
    if (!(operator.operation === "")){
        valueB = display.innerHTML.slice(display.innerHTML.indexOf(operator.text) + 1, display.innerHTML.length)
    }
}


function clearAll(){
    display.innerHTML = ""
    valueA = ""
    operator = {
        text : "",
        operation : ""
    }
    valueB = ""
    result = ""
    
}

const buttons = document.querySelectorAll('button')
const files = document.querySelectorAll('.file')


function changeMode(){
    console.log('Hola mundo')
    document.body.classList.toggle('lightMode')
    display.classList.toggle('lightMode')
    buttons.forEach(button => button.classList.toggle('lightMode')) 
    files.forEach(file => file.classList.toggle('lightMode')) 

}


//TODO -> Delete third valueB / modo nocturno