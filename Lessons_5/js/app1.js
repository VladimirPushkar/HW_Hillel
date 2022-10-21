const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let allPosNum = 0;
let qPosNum = 0;
let minNum = Infinity;
let minNumSeqNum = 0;
let maxNumSeqNum = 0;
let maxNum = -Infinity;
let qNegNum = 0;
let qOddPosNum = 0;
let qEvenPosNumb = 0;
let allEvenPosNumb = 0;
let allOddPosNumb = 0;
let fPosNum = 1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        allPosNum += numbers[i];
        qPosNum++;
    }
    if (numbers[i] < minNum) {
        minNum = numbers[i];
        minNumSeqNum = i;
    }
    if (numbers[i] > maxNum) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > maxNum) {
                maxNum = numbers[j];
                maxNumSeqNum = j;
            }
        }
    }
    if (numbers[i] < 0) { 
        qNegNum++;
    }
    if (numbers[i] > 0 && numbers[i] % 2 != 0) { 
        qOddPosNum++;
        allOddPosNumb += numbers[i];
    }
    if (numbers[i] > 0 && numbers[i] % 2 == 0) { 
        qEvenPosNumb++;
        allEvenPosNumb += numbers[i];
    }
    if (numbers[i] > 0) {
        fPosNum *= numbers[i];
    }
    if (maxNum > numbers[i]) {
        numbers[i] = 0;
    }
};

document.write(`
The summ of positive elements is ${allPosNum}, the quantity of positive elements is ${qPosNum}. <br>
The min element in numbers is ${minNum}, it's sequence number is ${minNumSeqNum}.<br>
The max element in numbers is ${maxNum}, it's sequence number is ${maxNumSeqNum}.<br>
The quantity of negative numbers is ${qNegNum}.<br>
The quantity of odd numbers more than 0 is ${qOddPosNum}.<br>
The quantity of even numbers more than 0 is ${qEvenPosNumb}.<br>
The summ of even numbers more than 0 is ${allEvenPosNumb}.<br>
The summ of odd numbers more than 0 is ${allOddPosNumb}.<br>
The multiple of numbers more than 0 is ${fPosNum}.<br>
Final result ${numbers}`);