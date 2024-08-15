// =====================
        // 1
// =====================

/* 
     Trust_1.html     الحل في ملف 
*/

// =====================
        // 2
// =====================
 document.write("<h1>ELmrit</h1>")

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center"; 
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.fontWeight = "bold";

// =====================
        // 3
// =====================

console.log("%cElzero %cWeb %cShhool" ,
         "color: red; font-size: 40px" ,
          "color: green; font-size: 40px; font-weight:bold",
        "color: white; font-size: 40px; background-color: blue")

// ===================== 
        // 4
// =====================

console.group("group 1");
console.log("Massage One");
console.log("Massage two");
console.groupCollapsed("child droup");
console.log("Massage One");
console.log("Massage two");
console.groupCollapsed("grand child droup");
console.log("Massage One");
console.log("Massage two");
console.groupEnd();
console.groupEnd();
console.groupEnd();


console.group("group 2");
console.log("Massage One");
console.log("Massage two");



// =====================
        // 5
// =====================

 console.table(["mrit", "kmal", "mhmed", "jemel", "kaled"]);  // Table

// =====================
        // 6
// =====================

// =====  الظريقة  1  =====

window.clearInterval = function () {
  console.log("Iam In Console");  
  document.write("Iam In Page");
}

// =====  الظريقة  2  =====

window.clearTimeout = function () {
console.log("Iam In Console");
document.write("Iam In Page");
}