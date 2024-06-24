export function validateBrackets(str) {
     const roundBrackets = "open";
     const squareBrackets = "open";
     const curlyBrackets = "open";

     const array = str.split("");

     for (let i = 0; i < array.length; i++) {
          if (array[i] === "(") {
               roundBrackets = "open";
          } else if (array[i] === ")") {
               roundBrackets = "close";
          } else if (array[i] === "[") {
               squareBrackets = "open";
          } else if (array[i] === "]") {
               squareBrackets = "close";
          } else if (array[i] === "{") {
               curlyBrackets = "open";
          } else if (array[i] === "}") {
               curlyBrackets = "close";
          }
     }

     if (
          roundBrackets === "open" ||
          squareBrackets === "open" ||
          curlyBrackets === "open"
     ) {
          return false;
     }
     return true;
}
