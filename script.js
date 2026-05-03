// auth guard helper
function requireLogin(){
  if(!localStorage.getItem("jp_user")){
    window.location.href="login.html";
  }
}
function logout(){
  localStorage.removeItem("jp_user");
  window.location.href="login.html";
}
function currentUser(){return localStorage.getItem("jp_user")||"User"}
