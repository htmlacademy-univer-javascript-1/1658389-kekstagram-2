


/*Функция, возвращающая случайное целое число из переданного диапазона включительно*/

function getRandom(firstNum, lastNum){
    let answer;
    let warning = '';

    if (firstNum < 0) {
        warning += 'Интервал включает отрицательные числа';
        console.log(warning);
        throw warning;
    };
    if (lastNum < firstNum) {
        warning += 'Неверный ввод интервала';
        console.log(warning);
        throw warning;
    };

    answer = (Math.random() * (lastNum - firstNum + 1)) + firstNum;
    return answer;
}

/*Функция для проверки максимальной длины строки*/

function checkLength (string, max){
    let length = string.length
    if (length > max) {
        return false;
    }
    return true;
}