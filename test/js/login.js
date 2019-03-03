function loggedin() {
  var btn = document.getElementById("button");
    btn.style.display = "none";
  document.getElementById('login').style = "display: none;"
  document.getElementById('afterlogin').style = "display: block;"
  document.getElementById('ttl').style = "display: block;"
}
function logout() {
  var x = document.getElementById("button");
    x.style.display = "block";
  document.getElementById('login').style = "display: block;"
  document.getElementById('afterlogin').style = "display: none;"
}
function wrong() {
  alert("Incorrect Username Or Password");
}
console.log("'login.js' Has Loaded And Works");
function r() {
  var user = document.getElementById('user').value.trim();
  var pass = document.getElementById('pass').value.trim();
  var users = [
    "test", //user1
    "test1", //user2
    "test2",//user 3
    "test3"
  ];
  var pas = [
    "test", //pass1
    "test1", //pass2
    "test2",//pass3
    "test3"//pass4
  ];
    if (user == users[0] && pass == pas[0]) loggedin();
    if (user == users[1] && pass == pas[1]) loggedin();
    if (user == users[2] && pass == pas[2]) loggedin();
    if (user == users[3] && pass == pas[3]) loggedin();
}
