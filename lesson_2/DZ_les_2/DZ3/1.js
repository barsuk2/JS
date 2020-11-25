'use strict';

function Generate_random_num() {
    const rand_num = Math.random()
    return (rand_num < 0.5 ? 1 : -1) * (parseInt(rand_num * 100))
}


function compare_num(num1, num2) {
    if (num1 >= 0 && num2 >= 0)
        return `число1=${num2} число2=${num1} разница=${num2 - num1}`;
    else if (num1 < 0 && num2 < 0)
        return `число1=${num2} число2=${num1} произведение=${num2 * num1}`;

    else
        return `число1=${num2} число2=${num1} сумма= ${num2 + num1}`;
}

let  num1 = Generate_random_num();
let num2 = Generate_random_num();

alert(compare_num(num1, num2));