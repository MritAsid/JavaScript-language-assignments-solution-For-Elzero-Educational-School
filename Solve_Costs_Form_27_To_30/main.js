// ==============1================

let userName = "Elzero";
console.log(userName.toLocaleLowerCase().split("", 1)); // e
console.log(userName.substr(0,1).toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase().repeat(3)); // eee




// ==============2================


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True