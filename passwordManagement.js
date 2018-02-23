
var entryLogin = document.getElementById("pword").value;
var spam = entryLogin.length - 8;
function submitForm() {
  
    if(entryLogin == 'baccano') {
      window.location("./forum.html");
    }
 
 if(entryLogin.length > 8) {
  alert("The password is " + spam + " characters too long.");
 }
    else {
     alert("\"" + entryLogin + "\" is not the password.");
     return false;
    }
 
    console.log(entryLogin);
  }
