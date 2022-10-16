let fNum = '';
let sNum;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        sNum = j * i;
        if ( j < 10 ) {
            fNum += `${i} * ${j} = ${sNum}; ||| `;
        };
        if (j === 10) {
            fNum += `${i} * ${j} = ${sNum}.`;
        };
    };
    fNum += '<br>';
};
document.write(fNum);