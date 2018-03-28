



function submitForm() {
  var entryLogin = document.getElementById("pword").value;
    if(entryLogin == 'baccano') {
      window.location = "./forum.html"
    } else {
  var pw = document.getElementById("incorrectPword")
  pw.style.color = "red";
    }
  }
