//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
// let practice = function(myArg) {
//     if (typeof myArg === "number") {
//         return myArg * 3;
//     }
// }
// console.log(practice(300));

let practice = function(myArg) {
    if (typeof myArg === "number") {
       return myArg * 3;
    } else if (typeof myArg === "string") {
       return "ARRR!";
    } else {
       return myArg;
    }
 
 }
 console.log(practice(5));
/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

// let tripleArr = arr.map(function (n) {
//     if (arr.includes(Number) || arr.includes(String)) {
//         return n*3, arr.splice();
//     } else if (arr.indexOf(String)) {
//         return arr.splice(arr.indexOf(String), 1, 'ARRR!');
//     } else {
//         return arr;
//     }
// });
// console.log(tripleArr);

arr = arr.map((elem) => {
    return practice(elem)
});
console.log(practice(arr));