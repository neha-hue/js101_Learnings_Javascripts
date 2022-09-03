//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username="nehaas345@gmail.com"
let password="neha567";
let enter_username="nehaas345@gmail.com";
let entered_password="neha567";
if(enter_username==username){
  if(entered_password==password){
    console.log("login successful")
  }
  else{
    console.log("wrong password")
  }
}
else{
  console.log("wrong credentials")
}