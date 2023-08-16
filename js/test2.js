const x = parseFloat(prompt("Введіть перше число:"));
const znak = prompt("Введіть знак операції:");
const y = parseFloat(prompt("Введіть друге число:"));

const result = doMath(x, znak, y);
function doMath(x, znak, y) {
    switch (znak) {
        case ("+"):
            return x + y;
        case ("-"):
            return x - y;
        case ("*"):
            return x * y;
        case ("/"):
            if (y !== 0) {
                return x / y;
            } else {
                return "На нуль ділити не можна."
            }
        case ("%"):
            if (y !== 0) {
                return x % y;
            } else {
                return "На нуль ділити не можна."
            }
        case ("^"):
            return x ** y;
            /*или
            return Math.pow(x, y);*/
        default:
            return "Ви ввели невірний знак.";
    }
}

console.log(result);