const nOne = +prompt('Enter the first num');
const nTwo = +prompt('Enter the second num');
let divisorOne;
let divisorTwo;
let equalsOneTwo;
let equalsTwoOne;
if (isNaN(nOne) || isNaN(nTwo)) {
    alert('Try again!')
} else {
    equalsOneTwo = nOne % nTwo;
    equalsTwoOne = nTwo % nOne;
    divisorOne = nOne > nTwo;
    divisorTwo = nTwo > nOne;
    if (nOne === 0 || nTwo === 0) {
        if (divisorOne) {
            alert(`If you divide ${nOne} by ${nTwo} the result is be infinite\nYou can divide ${nTwo} by ${nOne}, but the result is be 0 `)
        } else if (divisorTwo) {
            alert(`If you divide ${nTwo} by ${nOne} the result is be infinite\nYou can divide ${nOne} by ${nTwo}, but the result is be 0 `)
        } else {
            alert('Well, how can I divide 0 by 0 for you?')
        }
    } else if (nOne === nTwo) {
        alert('The numbers was equal, the result is 1')
    } else {
        if (divisorOne && nOne % nTwo === 0) {
            alert(`${nTwo} is the divisor of a number ${nOne}\nthe remainder of the division is 0`)
        } else if (divisorTwo && nTwo % nOne === 0) {
            alert(`${nOne} is the divisor of a number ${nTwo}\nthe remainder of the division is 0`)
        } else if (divisorOne && nOne % nTwo !== 0) {
            alert(`You can divide ${nOne} by ${nTwo}, but you\'ll have the remainder of the division is ${equalsOneTwo}`)
        } else if (divisorTwo && nTwo % nOne !== 0) {
            alert(`You can divide ${nTwo} by ${nOne}, but you\'ll have the remainder of the division is ${equalsTwoOne}`)
        }
    }
};