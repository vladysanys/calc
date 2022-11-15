const input = document.querySelector('.input')
const buttonItem = document.querySelectorAll('.orange')
const buttonText = document.querySelectorAll('.orange-text')
const znakC = document.querySelector('.c')
const nums = document.querySelectorAll('.nums')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const equals = document.querySelector('.equal')
const plusMinus = document.querySelector('.plus-minus')
const procent = document.querySelector('.procent')
const active = document.querySelector('.active')
const delenie = document.querySelector('.delenie')
const umnoj = document.querySelector('.increase')
const drob = document.querySelector('.drob')
let arr = []
let sum = ''
document.addEventListener('click', (event) => {
    const {target} = event
    let num = 0
    let num1 = arr.length - 1
    let num2 = arr.length
    if(znakC.id === target.id) {
        input.value = ''
        sum = 'c'
        arr = []
        znakC.textContent = 'C'
    }
    nums.forEach(function(item,i) {
        if(nums[i].id === target.id) {
            input.value = input.value + target.outerText
            znakC.textContent = 'AC'
        }
    })
    if(minus.id === target.id && input.selectionEnd > '0') {
        num = Number(input.value)
        arr.push(num)
        input.value = ''
        sum = 'minus'
        buttonItem[2].classList.toggle('active')
        buttonText[2].classList.toggle('active-text')
        znakC.textContent = 'AC'
    } else if (plus.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = ''
        sum = 'plus'
        buttonItem[3].classList.toggle('active')
        buttonText[3].classList.toggle('active-text')
        znakC.textContent = 'AC'
    } else if (plusMinus.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = arr[num2] * -1
        sum = 'plusMinus'
        znakC.textContent = 'AC'
    } else if (procent.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = arr[num2] / 100
        sum = 'procent'
        znakC.textContent = 'AC'
    } else if (delenie.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = ''
        sum = 'delenie' 
        buttonItem[0].classList.toggle('active')
        buttonText[0].classList.toggle('active-text')
        znakC.textContent = 'AC'
    } else if (umnoj.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = ''
        sum = 'increase'
        buttonItem[1].classList.toggle('active')
        buttonText[1].classList.toggle('active-text')
        znakC.textContent = 'AC'
    } else if (drob.id === target.id && input.selectionEnd > '0') {
        input.value = input.value + '.'
        znakC.textContent = 'AC'
    } else if (minus.id === target.id || input.selectionEnd === '0') {
        input.value = input.value + '-'
        znakC.textContent = 'AC'
    }
    if(equals.id === target.id) {
        znakC.textContent = 'AC'
        num = Number(input.value)
        arr.push(num)
        buttonItem[3].classList.remove('active')
        buttonText[3].classList.remove('active-text')
        buttonItem[2].classList.remove('active')
        buttonText[2].classList.remove('active-text')
        buttonItem[0].classList.remove('active')
        buttonText[0].classList.remove('active-text')
        buttonItem[1].classList.remove('active')
        buttonText[1].classList.remove('active-text')
        if (sum === 'minus') {
            input.value = arr[num1] - arr[num2]
        } else if (sum === 'plus') {
            input.value = arr[num1] + arr[num2]
        } else if (sum === 'delenie') {
            input.value = arr[num1] / arr[num2]
        } else if (sum === 'increase') {
            input.value = arr[num1] * arr[num2]
        }
    }
    
})