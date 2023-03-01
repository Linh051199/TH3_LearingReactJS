let expressElem = document.querySelector('.js-text-expression')
let resultElem = document.querySelector('.js-text-result')
let btnActionElems = document.querySelectorAll('.js-btn-action')
let btnOperatorElems = document.querySelectorAll('.js-btn-result')

let express = ''
let result = ''

function renderExpression() {
    expressElem.innerHTML = express;
}

function renderResult() {
    resultElem.innerHTML = result;
}

btnActionElems.forEach(btnActionElem => {
    btnActionElem.addEventListener('click', (event) => {
        express += event.target.innerHTML;
        renderExpression()
    })
})
btnOperatorElems.forEach(btnOperatorElem => {
    btnOperatorElem.addEventListener('click', (event) => {
        result += event.target.innerHTML;
        result = eval(express)
        renderResult()
    })
})

document.onkeydown = (event) => {
    express += event.key;
    renderExpression()

}