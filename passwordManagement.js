



function submitForm() {
  var entryLogin = document.getElementById("pword").value;
    if(entryLogin == 'baccano') {
      window.location("./forum.html");
    }
 var spam = entryLogin.length - 8;
 if(spam > 8) {
  alert("The password is " + spam + " characters too long.");
 }
 else {
  document.getElementById("incorrectPword").style.color = "red";
   
 }
    console.log(entryLogin);
  }
