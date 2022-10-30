let lines;
let sym;
const sDel = [];

function linesFromUser() {
    lines = prompt('Number of lines?');
};

function gSym() {
    sym = prompt('Symbol to delete');
    return sym;
};

function symToArray() {
    do {  
        gSym();
        if (sym !== '') {
            sDel.push(sym);
        }
    } while (sym);
    return sDel;
};

function dStr(str, arr) {
    const newArr = [];
    str = str.split(''); 
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === -1) {
            newArr.push(str[i]);
        }
    }
    let finalStr = newArr.join('');
    console.log(finalStr);
};

linesFromUser();
symToArray();

sDel.pop();
dStr(lines, sDel);