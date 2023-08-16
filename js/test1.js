const resultOfFunction = sum();
function sum() {
    let total = 0;
    let isFirstTime = true;

    return function (num) {
        if (isFirstTime) {
            total = num;
            isFirstTime = false;
        }   else {
            total += num;
        }
        return total;
    }
}

console.log(resultOfFunction(3));
console.log(resultOfFunction(5));
console.log(resultOfFunction(20));



