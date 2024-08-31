// ===========================
            // 1
// ===========================

/* let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i < end; i += start ) {
    if (i === exclude) {
        continue
    }
    console.log(i);
} */


// ===========================
            // 2
// ===========================

/* let start = 10;
let end = 0;
let stop = 3;



for (let i = start; i > end; i--) {
    if (i === stop) {
        break
    }
    if (i < start) {
        console.log(Number(`0${i}`))   
    }
    else{
    console.log(i)
    }
} */

// ===========================
            // 3
// ===========================

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start; i < end + start; i++) {
//     console.log(i)
//     for (j = breaker; j < end; j += breaker) {
//         console.log("-- " + j)

//     }
// }

// ===========================
            // 4
// ===========================

/* let index = 10;
let jump = 2;

i = index;

for (;;) {
  // Write Your Code Here
  console.log(i)
  i -= jump;
  if (i === jump) break;
} */


// ===========================
            // 5
// ===========================
/* let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let i = friends.length - friends.length;
for (; i < friends.length; i++) {
    if (friends[i][friends.length - friends.length].toLocaleLowerCase() === letter){
        friends.shift(i)
    }
    console.log(`${i + 1} => ${friends[i]}`)
}
 */
// console.log(friends.length - friends.length)
// ===========================
            // 6
// ===========================
/* let start = 0;
let swappedName = "elZerO";
let swappedName2 = "";
for (let i = start ; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLocaleLowerCase()) {
        swappedName2 += swappedName[i].toLocaleUpperCase()
    }
   else { 
        swappedName2 += swappedName[i].toLocaleLowerCase()
    }
}
console.log(swappedName2)
 */
// ===========================
            // 7
// ===========================

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (i = start; i < mix.length; i++) {
    if ( typeof mix[i] !==  "number" || mix[i] === mix[start]){
         continue
    }
    console.log(mix[i])
}
