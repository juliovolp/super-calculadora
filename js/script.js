function start() {
  var buttonCalculate = document.querySelector('#button-calculate');

  buttonCalculate.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
  var inputA = document.querySelector('#number-a');
  var inputB = document.querySelector('#number-b');
  var numberA = Number(inputA.value);
  var numberB = Number(inputB.value);

  var resultAddition = addition(numberA, numberB);
  var Additon = document.querySelector('#result-addition');
  Additon.textContent = resultAddition;

  var resultSubtracionab = subtraction(numberA, numberB);
  var Subtractionab = document.querySelector('#result-subtracionab');
  Subtractionab.textContent = resultSubtracionab;

  var resultSubtracionba = subtraction(numberB, numberA);
  var Subtractionba = document.querySelector('#result-subtracionba');
  Subtractionba.textContent = resultSubtracionba;

  var resultMultiplication = multiplication(numberA, numberB);
  var Multiplication = document.querySelector('#result-multiplication');
  Multiplication.textContent = resultMultiplication;

  var resultDivisionab = division(numberA, numberB);
  var Divisionab = document.querySelector('#result-divisionab');
  Divisionab.textContent = resultDivisionab;

  var resultDivisionba = division(numberB, numberA);
  var Divisionba = document.querySelector('#result-divisionba');
  Divisionba.textContent = resultDivisionba;

  var resultPowerab = power(numberA, numberB);
  var Powerab = document.querySelector('#result-powerab');
  Powerab.textContent = resultPowerab;

  var resultPowerba = power(numberB, numberA);
  var Powerba = document.querySelector('#result-powerba');
  Powerba.textContent = resultPowerba;

  var resultSquareRoota = squareRoot(numberA);
  var Roota = document.querySelector('#result-square-roota');
  Roota.textContent = resultSquareRoota;

  var resultSquareRootb = squareRoot(numberB);
  var Rootb = document.querySelector('#result-square-rootb');
  Rootb.textContent = resultSquareRootb;

  var resultFactorialA = factorial(numberA);
  var FactorialA = document.querySelector('#result-factoriala');
  FactorialA.textContent = resultFactorialA;

  var resultFactorialB = factorial(numberB);
  var FactorialB = document.querySelector('#result-factorialb');
  FactorialB.textContent = resultFactorialB;

  var resultPercentageAb = percentage(numberA, numberB);
  var PercentageAb = document.querySelector('#result-percentageAb');
  PercentageAb.textContent = resultPercentageAb;

  var resultPercentageBa = percentage(numberB, numberA);
  var PercentageBa = document.querySelector('#result-percentageBa');
  PercentageBa.textContent = resultPercentageBa;

  var resultAvarege = avarege(numberA, numberB);
  var varAvarage = document.querySelector('#result-avarage');
  varAvarage.textContent = resultAvarege;
}

function addition(numberA, numberB) {
  return numberA + numberB;
}

function subtraction(numberA, numberB) {
  return numberA - numberB;
}
function multiplication(numberA, numberB) {
  return numberA * numberB;
}
function division(numberA, numberB) {
  return (numberA / numberB).toFixed(2);
}
function power(numberA, numberB) {
  return Math.pow(numberA, numberB).toFixed(2);
}

function squareRoot(numberA) {
  return Math.sqrt(numberA).toFixed(2);
}

function factorial(numberA) {
  var factorialNumber = 1;
  for (var i = 1; i <= numberA; i++) {
    factorialNumber = factorialNumber * i;
  }
  return factorialNumber;
}

function percentage(numberA, numberB) {
  return Math.round((numberB / numberA) * 100) + '%';
}

function avarege(numberA, numberB) {
  return ((numberA + numberB) / 2).toFixed(2);
}

start();
