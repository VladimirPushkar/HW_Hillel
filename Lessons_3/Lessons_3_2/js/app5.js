let number = +prompt('Enter the number');
let lNumber = number % 10;
let fNumber = (number - lNumber) / 10;
if (fNumber > lNumber) {
    alert(`The first number ${fNumber} more than the second number ${lNumber}`)
} else if (fNumber < lNumber) {
    alert(`The first number ${fNumber} less than the second number ${lNumber}`)
} else {
    alert(`The first number ${fNumber} is equal the second number ${lNumber}`)
};