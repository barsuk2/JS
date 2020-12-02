'use strict';

const multiplication_func = function (arg1, arg2) {
    return arg1 * arg2;
}

const summation_func = function (arg1, arg2) {
    return arg1 + arg2;
}

const subtraction_func = function (arg1, arg2) {
    return arg1 - arg2;
}

const division_func = function (arg1, arg2) {
    return arg1 / arg2;
}


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            alert(summation_func(arg1, arg2));
            break
        case "-":
            alert(subtraction_func(arg1, arg2));
            break
        case "*":
            alert(multiplication_func(arg1, arg2));
            break
        case "/":
            alert(division_func(arg1, arg2));
            break

    }

}
mathOperation(20,30,'/');