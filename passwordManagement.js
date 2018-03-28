



function submitForm() {
  var entryLogin = document.getElementById("pword").value;
    if(entryLogin == 'baccano') {
      window.location = "./forum.html"
    } else {
  document.getElementById("incorrectPword").style.color = "red";
    }
  }
