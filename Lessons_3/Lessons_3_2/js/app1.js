const nFirst = +prompt('Enter the first num');
const nSecond = +prompt('Enter the second num');
if (nFirst > nSecond) {
    alert(`${nFirst} more than ${nSecond}`)
} else if (nSecond > nFirst) {
    alert(`${nFirst} less than ${nSecond}`)
} else {
    alert(`${nFirst} is equal ${nSecond}`)
};