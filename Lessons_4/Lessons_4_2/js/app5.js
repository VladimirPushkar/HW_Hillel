let sNum = +prompt('Enter number');
let dNum; 
let fNum = 0;
if (sNum) {
    if (sNum > 2 && sNum !== 6) {
        for (let i = 1; i > 0; i++) {
            dNum = 3 ** i;
            if (dNum > sNum) break;
            fNum++;
        };
        document.write((sNum % (3 ** fNum) == 0) ? `You get your number ${sNum} if you raise 3 to the ${fNum} power` : `You don\'t get your number ${sNum}`);
    } else {
        document.write(`You don\'t get your number ${sNum}`);
    };
};