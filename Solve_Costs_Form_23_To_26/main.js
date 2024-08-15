// ========================
// =          1           =
// ========================
 
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(100 * 1000); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10000); // 100000
console.log(10 * 1e4 ); // 100000           
console.log(1e2 * 1e3); // 100000
console.log(1e1 * 1e4); // 100000           
console.log(9e4 + 1e4); // 100000
console.log(1e6 / 10); // 100000
console.log(1e6 % 9e5); // 100000

 
// ========================
// =          2           =
// ========================
 
console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
 
// ========================
// =          3           =
// ========================

console.log(Number.MAX_SAFE_INTEGER / Math.trunc(Number.MAX_SAFE_INTEGER)); // 16
console.log(Number.MAX_SAFE_INTEGER)


// ========================
// =          4           =
// ========================
 
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number.parseFloat(parseFloat(myVar).toFixed(2))); // 100.57
 

// ========================
// =          5           =
// ========================
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// ========================
// =          6           =
// ========================
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt))
console.log(parseInt(flt)); // 10

// ========================
// =          7           =
// ========================

console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4