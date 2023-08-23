// TODO write an exported function thats passes the tests in .spec.js
// TODO write jsdoc comments for the function

// ? follow this template for jsdoc comments
/**
 * what does the function do?
 *Splits users input string into an array of strings (ie. hello = h, e, l, l, o), 
 * @param {paramType} paramName - description
 * @returns {returnType} description
 */

export const reverseString = (str) => {
    var splitString = str.split("");
    var reverseArray = splitString.reverse("");
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverseString("export never works"))