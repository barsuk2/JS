'use strict'
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


let sale = 15;

products.forEach(function (arg) {
    arg.price = arg.price * (100 - sale) / 100
})

console.table(products)