let resN = '';
let numStart;
for (let i = 1; i <= 10; i++) {
    numStart = i * 7;
    if (i < 10) {
        resN += `7 * ${i} = ${numStart}; <br>`;
    };
    if (i === 10) {
        resN += `7 * ${i} = ${numStart}.`;
    };
};
document.write(resN);