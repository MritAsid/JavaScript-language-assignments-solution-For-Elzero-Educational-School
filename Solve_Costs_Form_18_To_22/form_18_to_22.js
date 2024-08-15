//      ==========================
    //  =          1             =
//      ==========================

  
console.log((10 * 20 * 15 / 3 + 190 + 10) % 400); // 0

   



//      ==========================
    //  =          2             =
//      ==========================

  

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num ** num / num - num); // 6

// Soultion Four
console.log(num + num * true); // 6

// Solution Five
console.log( num - num * true * false + num); // 6

// Solution Six
console.log(num + num * num / num); // 6
   

//      ==========================
    //  =          3             =
//      ==========================

  
let num3 = "10";

// Solution One
console.log(+num3 + +num3); // 20

// Solution Two
console.log(+num3 * num3 / +num3 + +num3); // 20

// Solution Three
console.log(num3 - num3 * true * false + +num3); // 20

// Solution Four
console.log((+num3 + +num3 ) * num3 / num3  ) // 20
   


//      ==========================
    //  =          4             =
//      ==========================

  
let points = 10;

// Write Your Code Here
points++;
points += true;
points++;
console.log(points); // 13

// Write Your Code Here
--points; 
points -= true + true;
points--;
--points; 
console.log(points); // 8;

   
