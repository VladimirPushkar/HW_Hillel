let numArrays = +prompt('Enter the quantity of array you want', ''); 
let qArrays = [];
function numArrayFin() {
    for (let i = 0; i < numArrays; i++) {
        qArrays[i] = [];
        let minArray = +prompt('How many values in array you want?', ''); 
        let arr = [];
        for (let a = 0; a < minArray; a++) {
            let value = prompt('Enter values:');
            qArrays[i][a] = value;
        }
    }
    return console.log(qArrays);
};
numArrayFin();
