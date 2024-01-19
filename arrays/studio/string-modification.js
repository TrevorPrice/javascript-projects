const input = require('readline-sync');
let str = "LaunchCode";
console.log(str);
console.log(str.length);

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
{
let newStr = str.slice(3);
let newStr2 = str.slice(0, 3);
console.log(newStr.concat(newStr2));


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string is ${str} and the modifified string is ${newStr.concat(newStr2)}.`);
}
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let strLetters = "";
strLetters = Number(input.question("Please enter the number of letters that will be relocated: "));
let newStr = str.slice(strLetters);
let newStr2 = str.slice(0, 3);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let strStart = '';
let strCalc = '';
let strEnd = '';
let strFinal = '';

if (strLetters > 9 || strLetters < 1) {
    console.log(`Incorrect. ${str} is 10 letters long. Defaulting to 3.`);
    strLetters = 3
    strStart = str.slice(0, strLetters);
    strCalc = strStart.length - str.length;
    strEnd = str.slice(strCalc);
    strFinal = strEnd.concat(strStart);
    console.log(`LaunchCode? Moar like ${strFinal} amirite? hehe.heh.`);
} else {
    strStart = str.slice(0, strLetters);
    strCalc = strStart.length - str.length;
    strEnd = str.slice(strCalc);
    strFinal = strEnd.concat(`LaunchCode? Moar like ${strFinal} amirite? hehe.heh.`);
};