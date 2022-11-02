const add = (a,b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => b === 0? 0 : a/b

const operation = (op, a, b) => op(a, b)

console.log(operation(add, '8', '3'))

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

//EVENT LISTENERS

numbers.forEach(button=> button.addEventListener('click', numDisplay))
operators.forEach(button=> button.addEventListener('click', opDisplay))
deleteBtn.addEventListener('click', deleteLast)


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
    }
    if (e.target.id == 'equal'){
        valueA = Number(valueA)
        valueB = Number(valueB)
        console.log(valueA, valueB)
        if (operator.operation == 'add'){
            result = add(valueA, valueB)
        }
        else if (operator.operation == 'sub'){
            result = subtract(valueA, valueB)
        }
        else if (operator.operation == 'mult'){
            result = multiply(valueA, valueB)
        }
        else if(operator.operation == 'div'){
            result = divide(valueA, valueB)
        }
        display.innerText = result.toString()
        valueA = result
        valueB = ""
        operator.operation = ""
    }
}

function deleteLast(){
    console.log(display.innerHTML.charAt(display.innerHTML.length - 1))
    if (display.innerHTML.charAt(display.innerHTML.length - 1) === operator.text) {
        operator.operation = ""
        valueB = ""
    }
    /*
    if (!operator.operation === ""){
        valueB = display.innerHTML.slice(indexOf(operator.text), display.innerHTML.length - 1)
    }*/
    display.innerHTML = display.innerHTML.slice(0, -1)
    if (operator.operation === ""){
        valueA = display.innerHTML
    }
    console.log(display.innerHTML.charAt(display.innerHTML.length - 1), operator.text)
    //valueA = valueA.slice(0, -1)
    console.log(valueA, valueB)
    console.log(operator)
}


function clearAll(){
    
}


//TODO -> IMPLEMENTAR SEGUNDA OPERACIÓN / CAMBIAR VALOR DE VALUEB CUANDO SE BORRA