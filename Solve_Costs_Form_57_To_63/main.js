// Elzero js JS  Form_57_to_63

// ===========================
            // 1
// ===========================

  function sayHello(theName, theGender) {
    // Your Code Here
   return console.log(`Hello ${theGender === "Male" ? "Mr" :
                             theGender === "Female" ? "Miss" : ""} ${theName}`)
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"


  

// ===========================
            // 2
// ===========================

    function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if ( secondNum === undefined ) {
    console.log("Second Number Not Found")
  }else if (operation === "subtract") {
    console.log(firstNum - secondNum)
  }else if (operation === "multiply") {
    console.log(firstNum * secondNum)
  }else {
    console.log(firstNum + secondNum)
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
  

// ===========================
            // 3
// ===========================

  
function ageInTime(theAge) {
    let help = 0;
    // Your Code Here
    if(theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range")
    }else {
        help = theAge * 12
        console.log(help ,"Months")
        console.log(`Months  => ${help} Months`)

        help *= 4 
        console.log(help, "Weeks")
        console.log(`Weeks  => ${help} Weeks`)

        help *= 7 
        console.log(help, "Days")
        console.log(`Days  => ${help} Days`)

        help *= 24
        console.log(help, "Hours")
        console.log(`Hours  => ${help} Hours`)

        help *= 60
        console.log(help, "Minutes")
        console.log(`Minutes  => ${help} Minutes`)

        help *= 60
        console.log(help, "Seconds")
        console.log(`Seconds  => ${help} Seconds`)
    }
  }
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
    

// ===========================
            // 4
// ===========================


  function checkStatus(a, b, c) {
    // Your Code Here
    let  Name, age, stus, eror;

    typeof a === "string" ? Name = a: typeof a === "number" ?
    age = a : typeof a === "boolean" ? stus = a : eror = a;

    typeof b === "string" ? Name = b : typeof b === "number" ?
    age = b : typeof b === "boolean" ? stus = b : eror = b;

    typeof c === "string" ? Name = c: typeof c === "number" ?
    age = c : typeof c === "boolean" ? stus = c : eror = c;

    return console.log(`Hello ${Name}, Yor Age Is ${age} ${stus === true ? "Yor Are Availabe For Hire" : "Yor Are Not Availabe For Hire"}`)
   
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire" 
 

// ===========================
            // 5
// ===========================

function createSelectBox(startYear, endYear) {
    // Your Code Here
    // document.write("<select>")
    for (let i = startYear; i < endYear; i++) {
        document.write(`<option value=${i}> ${i} </option>`)
        
    }
    // document.write("</select>")

  }
  createSelectBox(2000, 2021);


// ===========================
            // 6
// ===========================
function multiply(...Numbers) {
  let help = 1;
for(let i = 0; i < Numbers.length; i++) {

if(typeof Numbers[i] === "string") continue;

help *= Math.trunc(Numbers[i])
}

console.log(help)
}
  multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
