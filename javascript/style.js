const loginBtn = document.querySelector(".loginSign")
const registerBtn = document.querySelector(".loginSignup")
const closeBtn = document.querySelector(".end")
const sign = document.querySelector(".Sign")
const signUp = document.querySelector(".Signup")

loginBtn.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/account.html","_self");
    // window.location = "http://127.0.0.1:5500/account.html";
    console.log("s");
})

const btn =document.querySelector(".fa-circle-user")
const btnlist=document.querySelector(".btn")

btn.addEventListener("click",()=>{
console.log("ss")
btnlist.classList.toggle("hidden")

})

const hesabm =document.querySelector(".hesabm")
hesabm.addEventListener("click",()=>{
window.open("http://127.0.0.1:5500/hesabmelumat.html","_self")
})








