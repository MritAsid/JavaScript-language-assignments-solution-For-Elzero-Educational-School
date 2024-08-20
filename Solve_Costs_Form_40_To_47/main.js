// ===========================
            // 1
// ===========================

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"]; 


// ===========================
            // 2
// ===========================

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
// console.log(friends.length)
// console.log(friends[++length], friends[++length]); // ["Eman", "Osama"]
friends.pop()
friends.shift()
console.log(friends)

// ===========================
            // 3
// ===========================

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Cod
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ===========================
            // 4
// ===========================

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length]
    .slice(website.length - website.length,++website.length - website.length)
    .join().slice(website.length).toLocaleUpperCase()); // ZERO


// ===========================
            // 5
// ===========================

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.indexOf(needle) ? console.log(" Found") : "";
haystack.lastIndexOf(needle) ? console.log(" Found") : "";
haystack.includes(needle)? console.log(" Found") : "";

// ===========================
            // 5
// ===========================

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2[arr1.length - true].toLocaleLowerCase() 
        + arr1[arr1.length - 1].toLocaleLowerCase() 
        + arr2[arr1.length].toLocaleLowerCase();

console.log(allArrs); // fxy