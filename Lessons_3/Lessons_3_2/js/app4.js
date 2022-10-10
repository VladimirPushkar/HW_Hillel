const number = +prompt('Enter the number');
const nEvenOdd = number % 10;
alert(nEvenOdd % 2 === 0 ? `${number} is even number, last number is ${nEvenOdd}` : `${number} is odd number, last number is ${nEvenOdd}`);