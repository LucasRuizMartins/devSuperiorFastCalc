import {sum, multiply} from './calculate.js'



//INPUT 1 
const inputNumberOne = document.forms.numbers.number1
  inputNumberOne.addEventListener('change', handleInputNumberOneChange);
  function handleInputNumberOneChange(event){  }

  //INPUT 2  
const inputNumberTwo = document.forms.numbers.number2
  inputNumberTwo.addEventListener('change', handleInputNumberTwoChange);
  function handleInputNumberTwoChange(event){  }

//OUTPUT RESULTADO
const resultNumber = document.querySelector('#result-box')

//BOTÃO SOMA 
const btnSum = document.getElementById('btn-plus') 
btnSum.addEventListener('click', handleBtnSumClick)
function handleBtnSumClick(event){
 resultNumber.innerHTML = sum(Number(inputNumberOne.value) ,
                              Number(inputNumberTwo.value) ,
                              Number( document.querySelector('#result-box').innerHTML))
}
//BOTÃO MULTIPLICAÇÃO
const btnMult = document.getElementById('btn-times') 
btnMult.addEventListener('click', handleBtnMultClick)
function handleBtnMultClick(event) {
  resultNumber.innerHTML = multiply( Number(inputNumberOne.value),
                                     Number(inputNumberTwo.value),
                                     Number( document.querySelector('#result-box').innerHTML))
}

//BOTÃO CLEAR 
const btnClear = document.getElementById('btn-clear') 
btnClear.addEventListener('click', handleBtnClearClick)
function handleBtnClearClick(event) {
  inputNumberOne.value = null 
  inputNumberTwo.value = null
  resultNumber.innerHTML = 0

  }




