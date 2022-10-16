let sNum = +prompt('Enter number');
let fNum = '';
let aNum = '';
for (let i = 1; i <= 100; i++) {
    aNum = i * i;
    if (aNum > sNum) break;
    fNum += i + ' ';
};
document.write(fNum);