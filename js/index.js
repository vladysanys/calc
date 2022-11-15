const input = document.querySelector('.input')
const znakC = document.querySelector('.c')
const nums = document.querySelectorAll('.nums')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const equals = document.querySelector('.equal')
const plusMinus = document.querySelector('.plus-minus')
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
    }
    nums.forEach(function(item,i) {
        if(nums[i].id === target.id) {
            input.value = input.value + target.outerText
        }
    })
    if(minus.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = ''
        sum = 'minus'
    } else if (plus.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = ''
        sum = 'plus'
    } else if (plusMinus.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        input.value = arr[num2] * -1
        sum = 'plusMinus'
    }
    if(equals.id === target.id) {
        num = Number(input.value)
        arr.push(num)
        if (sum === 'minus') {
            input.value = arr[num1] - arr[num2]
        } else if (sum === 'plus') {
            input.value = arr[num1] + arr[num2]
        }
    }
    console.log(sum)
    console.log(arr)
    console.log(arr.length - 1)
})