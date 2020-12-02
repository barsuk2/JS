'use strict'
const num = parseInt(Math.random() * 1000);
console.log(num);

function trasform_Num_in_Obj(arg) {
    let obj = {
        units: "",
        tens: "",
        hundereds: ""
    }
    if (parseInt(+arg / 1000) >= 1 || +arg < 0 || isNaN(+arg))
        console.log("Введите число в диапазоне [0,999]")
    else {
        obj.hundereds = parseInt(+arg / 100)
        obj.tens =parseInt ((arg - obj.hundereds*100)/10);
        obj.units = arg-(obj.hundereds*100+obj.tens*10);
    }
    return obj
}


let my_obj = trasform_Num_in_Obj(num)
console.log(my_obj)
