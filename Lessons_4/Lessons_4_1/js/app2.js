let numFinish;
for (let numStart = 10; numStart <= 20; numStart++) {
    numFinish = numStart * numStart;
    if (numFinish < 400) {
        document.write(`${numFinish}, `)
    }
    if (numFinish === 400) {
        document.write(`${numFinish}.`)
    }
};