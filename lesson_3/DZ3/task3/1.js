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
// document.write("adsasd")

for (let i of products){
    document.write(i.id + ' '+ i.price+'\n')
}