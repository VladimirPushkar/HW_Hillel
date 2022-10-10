let number = +prompt('Enter the number');
let lNumber = number % 10; 
let sNumber = (number - lNumber) % 100 / 10;
let fNumber = (number - lNumber - (sNumber * 10)) / 100;
let fNum_sNum = fNumber === sNumber;
let sNum_tNum = sNumber === lNumber;
let fNum_tNum = fNumber === lNumber;
if (fNum_sNum && sNum_tNum && fNum_tNum) {
    alert('All the numbers are the same')
} else {
    alert('Numbers are not the same')
};
alert((fNum_sNum || sNum_tNum || fNum_tNum) ? 'We have the same numbers' : 'No matches');