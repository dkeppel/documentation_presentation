// TODO write an exported function that passes the tests in .spec.js
// TODO write jsdoc comments for the function

// ? follow this template for jsdoc comments
/**
 * what does the function do?
 * When the user inputs a name, it returns One for ${nameInput}, and one for me.
 * @param {paramType} nameInput - description
 * @returns {returnType} description
 */

export function twoFer(nameInput = "you") {
    return 'One for ${nameInput}, and one for me.';
}
console.log(twoFer("Sam"))