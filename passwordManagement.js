var pword = document.getElementById('pword')
var pwn = 'YmFjY2Fubw=='
pword.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    submit()
  }
});

function submit() {
  if(btoa(pword.value) === pwn) {
    pword.value = ""
    location = './forum.html'
  } else {
    document.getElementById('error').innerText = 'incorrect password'
  }
}
