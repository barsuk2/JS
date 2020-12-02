rub = prompt("Введите сумму к зачислению",'')

/**
 * Возвращает слово 'рубль' в родительском подеже
 * @param arg - сторока
 */
function depositing_many(arg) {
    let num_lenth = arg.length;
    let last_elem = arg[num_lenth - 1];
    if (num_lenth == 2 && arg[0] == "1") {
        alert(`Ваша сумма в ${arg} рублей успешно зачислена.`)
        return;
    }
    switch (last_elem) {
        case("1"):
            alert(`Ваша сумма в ${arg} рубль успешно зачислена.`)
            break
        case("2"):
        case("3"):
        case("4"):
            alert(`Ваша сумма в ${arg} рубля успешно зачислена.`)
            break
        case("5"):
        case("6"):
        case("7"):
        case("8"):
        case("9"):
        case("0"):
            alert(`Ваша сумма в ${arg} рублей успешно зачислена.`)
            break
        default:
            alert("введите число")
    }

}

depositing_many(rub)