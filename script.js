const add = (a,b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => b === 0? 'lol' : a/b

const operate = (op, a, b='0') => {
    a = Number(a)
    b = Number(b)
    if (op.operation == ''){
        return a
    }
    let result
    if (op.operation == 'add'){
        result = add(a, b)
    }
    else if (op.operation == 'sub'){
        result = subtract(a, b)
    }
    else if (op.operation == 'mult'){
        result = multiply(a, b)
    }
    else if(op.operation == 'div'){
        result = divide(a, b)
    }
    
    return Math.round(result * 1000)/1000
}



//VARIABLES

let valueA = ''
let operator = {
    text : "",
    operation : ""
}
let valueB = ''
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
    console.log(typeof valueA)
    console.log(e.target.id)
    if (operator.operation == "") {
        if (display.innerHTML.length == 0 && e.target.id == 'point'){
            valueA = '0'
        }
        if(!(e.target.id == 'point' && !(valueA.indexOf('.')==-1))){
            console.log(valueA.indexOf('.'))
            valueA += e.target.innerText
            display.innerHTML = valueA
        }
    }
    if (operator.operation != "") {
        console.log(e.target.innerHTML)
        if(display.innerHTML.charAt(display.innerHTML.length - 1) == ('+' || '-' || '*' || '/') && (e.target.id == 'point')){
            console.log('holis')
            return
        }
        if(!(e.target.id == 'point' && !(valueB.indexOf('.')==-1))){
            console.log(valueB.indexOf('.'))
            valueB += e.target.innerText
            display.innerHTML += e.target.innerText
        }
    }
}

function opDisplay(e){
     if(display.innerHTML.charAt(display.innerHTML.length - 1) == ('+' || '-' || '*' || '/') && e.target.innerText == ('+' || '-' || '*' || '/')){
        return
    }
    if (valueB == "" && e.target.id != 'equal'){
        operator.text = e.target.innerHTML
        operator.operation = e.target.id
        display.innerHTML += e.target.innerText
        return
    }
    if (e.target.id == 'equal'){
        operateValues()
        operator.operation = ""
        return
    }
    if (!(valueB == "") && e.target.id != 'equal'){
        operateValues()
        operator.text = e.target.innerHTML
        operator.operation = e.target.id
        display.innerHTML += e.target.innerText
        console.log(valueA)
    }
}

function operateValues(){
    result = operate(operator, valueA, valueB).toString()
    display.innerText = result
    valueA = result
    valueB = ""
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

//*Dark Mode

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