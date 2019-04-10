const container = document.querySelector('.container')
const output = document.querySelector('.output')
const input = document.querySelector('.inpt')


let outputNum = 0
let inputNum = input.value

container.addEventListener('click', e => {
  if (e.target.classList.contains('increase')){
    outputNum += +input.value
  } else if (e.target.classList.contains('decrease')) {
    outputNum -= +input.value
  }
  if (outputNum < 0) {
    output.style.color = 'red'
  } else {
    output.style.color = 'black'
  }
  output.innerText = outputNum
})
