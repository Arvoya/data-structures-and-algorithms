function validateBrackets(str) {
     let roundBrackets = 0;
     let squareBrackets = 0;
     let curlyBrackets = 0;

     const array = str.split("");

     for (let i = 0; i < array.length; i++) {
          if (array[i] === "(") {
               roundBrackets++;
          } else if (array[i] === ")") {
               roundBrackets--;
          } else if (array[i] === "[") {
               squareBrackets++;
          } else if (array[i] === "]") {
               squareBrackets--;
          } else if (array[i] === "{") {
               curlyBrackets++;
          } else if (array[i] === "}") {
               curlyBrackets--;
          }

          // If any bracket count goes negative, it means they are not balanced
          if (roundBrackets < 0 || squareBrackets < 0 || curlyBrackets < 0) {
               return false;
          }
     }

     if (roundBrackets === 0 && squareBrackets === 0 && curlyBrackets === 0) {
          return true;
     }
     return false;
}

module.exports = { validateBrackets };
