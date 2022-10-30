function gSum() {
    let number = 0;
    return function(num) {
        number += num;
        return console.log(number);
    }
};
const nSum = gSum();
nSum(3);
nSum(9);
nSum(18);
nSum(34);
nSum(51);
