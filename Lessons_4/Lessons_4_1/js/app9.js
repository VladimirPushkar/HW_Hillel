let resNum;
let eDiv = 0;
let sDiv = 0;
let sNum = +prompt('Enter nuber', '');
for (let i = 1; i <= sNum; i++) {
    if (sNum % i === 0) {
        resNum = i;  
        if (resNum % 2 === 0) {
            eDiv++;
            sDiv += resNum;
        };
        if (resNum < sNum) {
            document.write(`${resNum}, `);
        };
        if (i === sNum) {
            document.write(`${resNum}.`)
        };
    };
};
alert(`Even Divisors ${eDiv}`);
alert(`Sum of even divisors ${sDiv}`);