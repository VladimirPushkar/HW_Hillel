let eDollar = 27;
let dFinish = '';
for (let i = 10; i <= 100; i += 10) {
    dFinish += (i) + ' USD = ' + eDollar * i + ' UAH,<br> ';
};
document.write(dFinish);


