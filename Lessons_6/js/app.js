const products = [
    {
        name: 'AKM',
        price: 700,
    },
    {
        name: 'AR-15',
        price: 1500,
    },
    {
        name: 'Savage 110',
        price: 500,
    },
    {
        name: 'Mossberg 500',
        price: 1000
    },
    {
        name: 'Glock 17',
        price: 600,
    },
];

products.push({ name: 'iPhone', price: 1000 });

const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;
let productNumber;
let amount;
let finalPrice = 0;
let discountFinalPrice;
let question;

// Show products
function showProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${(i+1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
    }
};
// Get product number
function getProductNumber() {
    productNumber = prompt('Enter the product you wanna buy:');
    productNumber--;
};
// Get amount of products to be bought
function getQuantityOfProductsPurchased() {
    amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
};
// Calculate the initial price
function showInitialPrice() {
    const selectedProduct = products[productNumber];
    finalPrice += selectedProduct.price * amount;
    sayFinalPrice();
};
// Check if discount needed
function checkDiscountNeeded() {
    if (finalPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
        discountFinalPrice = finalPrice - finalPrice * DISCOUNT;
        sayCongrats();
        sayPay();
    }
};

function sayFinalPrice() {
    console.log('The price is $' + finalPrice);
};

function sayCongrats() {
    console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
};

function sayPay() {
    console.log('Please pay $' + discountFinalPrice);
};

function showRequestToTheUser() {
    showProducts();
    do {
        getProductNumber()
    } while(productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));
    do {
        getQuantityOfProductsPurchased()
    } while(amount <= 0 || isNaN(amount));
    showInitialPrice();
    checkDiscountNeeded();
    qMoreTime();
};

function qMoreTime() {
    question = confirm('Would you like to bye something else?', '');
    return question;
};

do {
    showRequestToTheUser();
} while (question);