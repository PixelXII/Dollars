function submitForm() {
   var entryLogin = document.getElementById("pword").value;
    if(entryLogin == 'baccano') {
      alert("Entering...");
      window.location("https://pixelxii.github.io/Dollars/forum.html");
    }
    else {
     alert("\"" + entryLogin + "\" is not the password.");
     return false;
    }
    console.log(entryLogin);
  }
