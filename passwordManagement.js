function reDirect() {
 window.location("forum.html");
}

function submitForm() {
   var entryLogin = document.getElementById("pword").value;
    if(entryLogin == 'baccano') {
      reDirect();
    }
 var spam = entryLogin.length - 8;
 if(entryLogin.length > 8) {
  alert("The password is" + spam + "too long.");
 }
    else {
     alert("\"" + entryLogin + "\" is not the password.");
     return false;
    }
 
    console.log(entryLogin);
  }
