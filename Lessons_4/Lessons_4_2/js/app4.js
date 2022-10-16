let sNum = +prompt('Enter number');
let fNum = 0;
for (let i = 1; i <= sNum; i++) {
    if (sNum % i == 0) {
        fNum++;
    };
};
document.write((fNum > 2 && sNum !== 2) ? 'It\'s not the simple number' : 'It\'s the simple number');