// ===========================
            // 1
// ===========================

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Solution
while (index < friends.length) {
  if (
    typeof friends[index] !== typeof index &&
    friends[index].startsWith("A") === false ) {
         console.log(`${++counter} => ${friends[index]}`);
    }
  index++;
}


// Required Output
/*
"1 => Sayed"
"2 => Mahmoud"
*/