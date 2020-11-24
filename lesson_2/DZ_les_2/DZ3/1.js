'use strict';
let num1, num2;

function Generate_random_num() {
    const rand_num = Math.random()
    const num = (rand_num < 0.5 ? 1 : -1) * (parseInt(rand_num * 100))
    return num
}

num1 = Generate_random_num()
num2 = Generate_random_num()

function compare_num(num1, num2) {
    if (num1 >= 0 && num2 >= 0)
        return `число1=${num2} число2=${num1} разница=${num2 - num1}`;
    else if (num1 < 0 && num2 < 0)
        return `число1=${num2} число2=${num1} произведение=${num2 * num1}`;

    else
        return `число1=${num2} число2=${num1} сумма= ${num2 + num1}`;


}

alert(compare_num(num1, num2))