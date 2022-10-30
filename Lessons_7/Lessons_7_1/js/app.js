function nFun(num, degree) {
    if (degree > 1) {
        return num * nFun(num, degree - 1)
    }
    return num
};
console.log(nFun(1, 2));
console.log(nFun(2, 3));
console.log(nFun(3, 4));
console.log(nFun(4, 5));
console.log(nFun(5, 6));
console.log(nFun(6, 7));
console.log(nFun(7, 8));
