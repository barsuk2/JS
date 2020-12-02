'use strict'

function Product_es5(name, price) {
    this.name = name;
    this.price = price;

}

Product_es5.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75
}

const prod1 = new Product_es5("samsung s100", 12000)
const prod2 = new Product_es5("samsung s200", 25000)

// console.log(prod1)
// prod1.make25PercentDiscount()
// console.log(prod1)
// console.log(prod2)
// prod2.make25PercentDiscount()
// console.log(prod2)
// prod2.make25PercentDiscount()
// console.log(prod2)

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    make25PercentDiscount_es6() {
        this.price = this.price * 0.75

    }

}

const prod3 = new Product_es6("samsung s200", 25000);
console.log(prod3)
prod3.make25PercentDiscount_es6()
console.log(prod3)
const prod4 = new Product_es6("samsung s200", 25000)


