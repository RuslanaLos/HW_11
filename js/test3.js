const amountOfRows = prompt("Введіть кількість рядків у масиві даних:");
const amountOfColumns =  prompt("Введіть кількість стовпців у масиві даних:");

const arrByUser = fillArr(amountOfRows, amountOfColumns);
function fillArr(rows, cols) {
    let arr = [];
    for (let a = 0; a < rows; a++) {
        let innerArr = [];
        for (let b = 0; b < cols; b ++) {
            let value =  prompt(`Введіть значення для елементу [${a}][${b}]:`);
            innerArr.push(value);
        }
        arr.push(innerArr);
    }
    return arr;
}

console.log(arrByUser);