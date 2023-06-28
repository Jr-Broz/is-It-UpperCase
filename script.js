function checkUpperCase() {

let alphabetUpper = /[A-Z]/;
let userInput = prompt("Write something to check if it's in Upper case");

if(userInput.charAt(0).match(alphabetUpper)){

  alert("It is in Upper case.");
}
  else{

    alert("It is not.");
  } 
}

checkUpperCase();

function checkLowerCase() {

  let alphabetLower = /[a-z]/;
  let userInput = prompt("write something to check if it's in lower case");

  if(userInput.charAt(0).match(alphabetLower)){
    
    alert("It is in lower case.");
  }
  else{

    alert("It's not");
  }
}

checkLowerCase();
