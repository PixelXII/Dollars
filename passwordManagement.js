function reDirect() {
 window.location.assign("./forum.html");  
}
function submitForm() {
   var entryLogin = document.getElementById("pword").value;
    if(entryLogin == 'baccano') {
      reDirect();
    }
    else {
     alert("\"" + entryLogin + "\" is not the password.");
     return false;
    }
    console.log(entryLogin);
  }
