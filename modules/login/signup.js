class User {
  constructor(fullname, username, email, password) {
    this.fullname = fullname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.taskList = [];
  }
}

// gettings users data if stored
let users = JSON.parse(localStorage.getItem("users"));

if (users == null) {
  users = [];
}

// show successful message and redirect
function signupSuccess(){
  // showing message and loader
  error.style.display = "block";
  error.style.color = "green";
  error.innerHTML = "Registration Successfull.";
  loader.style.display = "block";

  let url = location.href;
  url = url.slice(0,url.lastIndexOf('/'));
  url = url + "/login.html";
  setTimeout(()=>{
    location.href = url;
  },1500);
}

// creating user in users array and storing in localStorage
function signup(fullname, username, email, password) {
  let user = new User(fullname, username, email, password);
  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
}

// signup
signupBtn.onclick = function () {
  if(fullname.value.length==0 || username.value.length==0 || email.value.length==0 || password.value.length==0 || confirmPassword.value.length==0)
    return;
  for (let i = 0; i < users.length; i++) {
    // checking username already exists
    if (users[i].username == username.value || users[i].email == email.value) {
      error.style.display = "block";
      error.innerHTML = "Username or email already exists.";
      return;
    }
  } 
  console.log(password.value,confirmPassword.value);
  // if password not matched then
  if (password.value !== confirmPassword.value) {
    error.style.display = "block";
    error.innerHTML = "Passwords not same !!!";
    return;
  }

  error.style.display = "none";
  // if not found then add user
  signup(fullname.value, username.value, email.value, password.value);
  signupSuccess();
};
