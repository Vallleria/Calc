// let numbers = document.querySelectorAll('.number');
// let operations = document.querySelectorAll('.operation');
// let dot = document.querySelector('.dot');
// let equal = document.querySelector('.equal');

/*
состояния (режим)
1. ввод цифр в выражении - digits
2. нашли сумму - eval
3. сделали сброс - reset
*/

let calc = document.querySelector('.calc')
let input = document.querySelector('.input')
let state = 'clear';


function onButton(event){
    let btn = event.target;

    if (state == 'clear') {
        if (btn.classList.contains('zero-number')) {
            input.value = input.value + btn.innerText
            state = 'zero'
        }
    }

    if (state == 'clear' || state == 'operation' || state == 'number') {
        if (btn.classList.contains('number') || btn.classList.contains('zero-number')) {
            if (state == 'equal') {// значем, что было вычислено выражение
                input.value = ''
            }
            console.log(btn.innerText)// innerText - содержимое элемента 
            // взять текущее значение и объеденить с новым значением
            input.value = input.value + btn.innerText
            // TODO: ограничить кол-во символов
            state = 'number'
        }
    }
    if (state == 'number' || state == 'equal' || state == 'zero') {
        if (btn.classList.contains('operation')){
            input.value = input.value + btn.innerText
            state = 'operation'
        }
        if (btn.classList.contains('equal')){
            input.value = eval(input.value)
            state = 'equal'
        }
    }
    if (btn.classList.contains('clear')){
        input.value = ''
        state = 'clear'
    }
    if (state == 'equal' && (btn.classList.contains('number') ||  btn.classList.contains('zero-number'))) {
        input.value = btn.innerText
    }
}



calc.addEventListener('click', onButton)