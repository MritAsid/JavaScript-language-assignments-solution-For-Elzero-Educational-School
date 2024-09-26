// ===========================
            // 1
// ===========================

function getDetails(zName, zAge, zCountry) {
  
    function namePattern(zName) {
    return  `Hello ${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;
  }
  
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  
  function countryTwoLetters(zCountry) {
     helpCon = zCountry[0] + zCountry[1]
    return `You Live In ${helpCon.toUpperCase()}`;
  }

  function fullDetails() {
    // Write Your Code Here
return `${namePattern(zName)} , ${ageWithMessage(zAge)} , ${countryTwoLetters(zCountry)}`;

  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



// ===========================
            // 2
// ===========================

// =======1========
let itsMe = _ => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

// =======2========  
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// ===========================
            // 3
// ===========================


let checkerArrow = (zName) => (status) => (salary) => status === "Available"
    ? `${zName}, My Salary Is ${salary}`: `Iam Not Avaialble`;

    console.log(checkerArrow("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerArrow("Ahmed")("Not Available")()); // Iam Not Avaialble


// ===========================
            // 4
// ===========================


function specialMix(...data) {
   let hlpe = 0;
  let ruzalt = 0;
  
  for(let i = 0; i < data.length; i++){

      if (isNaN(parseInt(data[i]))) hlpe++;
      else ruzalt += parseInt(data[i]); 
  }
  return hlpe === data.length ? "All Is String" : ruzalt;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


