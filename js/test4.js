const insertedText  = prompt("Введіть строку:");
const insertedSymbols = prompt("Введіть символи, які необхідно видалити:");

removeElementsAndShow(insertedText, insertedSymbols);
function removeElementsAndShow(text, elements) {
    let symbols = text.split("");
    let symbolsToRemove = elements.split("");

    let result  = [];

    for (let a = 0; a < symbols.length; a++){
        let symbolToAdd = true;
        for (let b  = 0; b < symbolsToRemove.length; b++){
            if (symbols[a] === symbolsToRemove[b]) {
                symbolToAdd = false;
                break;
            }
        }
        if (symbolToAdd) {
            result.push(symbols[a]);
        }
    }

    console.log(result.join(""));
}



