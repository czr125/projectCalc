function factorialize(firstNum) {
  if (firstNum < 0) 
        return -1;
  else if (firstNum == 0) 
      return 1;
  else {
      return (firstNum * factorialize(firstNum - 1));
  }
}

function logaritmize(firstNum, secondNum) {
  return Math.log(firstNum) / Math.log(secondNum);
}

const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1).toFixed(3)
  const secondNum = parseFloat(n2).toFixed(3)
  if (operator === 'add') return (firstNum + secondNum).toFixed(3)
  if (operator === 'subtract') return (firstNum - secondNum).toFixed(3)
  if (operator === 'multiply') return (firstNum * secondNum).toFixed(3)
  if (operator === 'divide') return (firstNum / secondNum).toFixed(3)
  if (operator === 'sqrt') return (Math.sqrt(firstNum)).toFixed(3)
  if (operator === 'exponencialByTwo') return (firstNum ** 2).toFixed(3)
  if (operator === 'exponencial') return (firstNum ** secondNum).toFixed(3)
  if (operator === 'factorial') return (factorialize(firstNum)).toFixed(3)
  if (operator === 'logaritmalTwo') return (Math.log2(firstNum)).toFixed(3)
  if (operator === 'logaritmalTen') return (Math.log10(firstNum)).toFixed(3)
  if (operator === 'logartimaln') return (logaritmize(firstNum, secondNum)).toFixed(3)
}

const getKeyType = key => {
  const { action } = key.dataset
  if (!action) return 'number'
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide' ||
    action === 'sqrt' ||
    action === 'exponencialByTwo' ||
    action === 'exponencial' ||
    action === 'factorial' ||
    action === 'logaritmalTwo' ||
    action === 'logaritmalTen' ||
    action === 'logaritmaln'  
  ) return 'operator'
  // For everything else, return the action
  return action
}

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = state

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
    return displayedNum
  }

  if (keyType === 'operator') {
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum
  }

  if (keyType === 'clear') return 0

  if (keyType === 'calculate') {
    return firstValue
      ? previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum
  }
}

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = calculator.dataset

  calculator.dataset.previousKeyType = keyType

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action
    calculator.dataset.firstValue = firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculatedValue
      : displayedNum
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
      ? modValue
      : displayedNum
  }

  if (keyType === 'clear' && key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  }
}

const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

  if (keyType === 'operator') key.classList.add('is-depressed')
  if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC'
  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  const resultString = createResultString(key, displayedNum, calculator.dataset)

  display.textContent = resultString
  updateCalculatorState(key, calculator, resultString, displayedNum)
  updateVisualState(key, calculator)
})
