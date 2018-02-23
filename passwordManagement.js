



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
  document.write('<p style="color:black;">Please enter the correct password.</p>');
   
 }
    console.log(entryLogin);
  }
