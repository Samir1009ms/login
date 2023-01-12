const closeBtnup = document.querySelector(".qeydiyyatsiz-text")

closeBtnup.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/index.html", "_self");
    console.log("SS");
})

const formlogin = document.querySelector(".loginParol")
const form = document.querySelector(".registerform")
const sifr = /^[a-zA-Z0-9]{8,12}$/
formlogin.sifre.addEventListener("keyup", (event) => {
    if (sifr.test(event.target.value)) {
        event.target.setAttribute("style", "border:1px solid green")

    }
    else {
        event.target.setAttribute("style", "border:1px solid red")
        sifreerror.classList.remove("hidden")
    }
})
const registerform = document.querySelector(".registerform")
const sifreerror1 = document.querySelector(".sifreerror1")
const sifreerror2 = document.querySelector(".sifreerror2")

const paroll = document.querySelector(".paroll")
let password = document.getElementById("sifre")
let password2 = document.getElementById("sifre2")
const mail2 = document.querySelector(".mail2")
const mailerror = document.querySelector(".mailerror")

form.sifre.forEach(event => {
    event.addEventListener("keyup", (x) => {
        if (sifr.test(x.target.value) && password.value === password2.value) {
            x.target.setAttribute("style", "border:1px solid green")
            console.log("s1")
            yanlis.classList.add("hidden")
            password.setAttribute("style", "border:2px solid green")
            password2.setAttribute("style", "border:2px solid green")
        }
        else {
            x.target.setAttribute("style", "border:1px solid red")
            console.log("s2")
            yanlis.classList.remove("hidden")
            password.setAttribute("style", "border:2px solid red")
            password2.setAttribute("style", "border:2px solid red")
            sifreerror1.classList.add("hidden")
            sifreerror2.classList.add("hidden")
        }

    })
});
const yanlis = document.querySelector(".yanlis")
const aderror = document.querySelector(".aderror")
const add = document.querySelector(".ad")
const soyad2 = document.querySelector(".soyad2")
const soyaderror = document.querySelector(".soyaderror")
registerform.addEventListener("submit", e => {
    e.preventDefault()
    form.sifre.forEach((event) => {
        if (sifr.test(password.value) && sifr.test(password2.value)) {
            sifreerror1.classList.add("hidden")
            sifreerror2.classList.add("hidden")
            password.setAttribute("style", "border:2px solid green")
            password2.setAttribute("style", "border:2px solid green")


        } else {
            sifreerror1.classList.remove("hidden")
            sifreerror2.classList.remove("hidden")
            password.setAttribute("style", "border:2px solid red")
            password2.setAttribute("style", "border:2px solid red")
        }

    })
    if (text.test(registerform.email.value)) {
        console.log("ss")
        mail2.setAttribute("style", "border:1px solid green")
        mailerror.classList.add("hidden")


    } else {
        console.log("error")
        mailerror.classList.remove("hidden")
        mail2.setAttribute("style", "border:2px solid red")
    }
    if (sifr.test(registerform.ad.value)) {
        aderror.classList.add("hidden")
        add.setAttribute("style", "border:1px solid green")

    } else {
        aderror.classList.remove("hidden")
        add.setAttribute("style", "border:2px solid red")
    }
    if (sifr.test(registerform.soyad.value)) {
        soyaderror.classList.add("hidden")
        soyad2.setAttribute("style", "border:2px solid green")

    }
    else {
        soyaderror.classList.remove("hidden")
        soyad2.setAttribute("style", "border:2px solid red")
    }
})


const loginSign = document.querySelector(".loginSign")
const loginSignup = document.querySelector(".loginSignup")
const Sign = document.querySelector(".Sign")
const signUp = document.querySelector(".Signup")
const loginBtn = document.querySelector(".loginBtn")

loginSign.addEventListener("click", () => {

    loginSign.setAttribute("style", "background:white")
    loginSignup.setAttribute("style", "background:none")
    signUp.classList.add("hidden")
    Sign.classList.remove("hidden")
    loginBtn.classList.remove("height")
})
loginSignup.addEventListener("click", () => {
    loginSign.setAttribute("style", "background:none")
    loginSignup.setAttribute("style", "background:white")
    Sign.classList.add("hidden")
    signUp.classList.remove("hidden")
    loginBtn.classList.add("height")
})

const daxilOlBtn = document.querySelectorAll(".daxil-ol")
const emailerror = document.querySelector(".emailerror")
const mail = document.querySelector(".mail")
const sifreerror = document.querySelector(".sifreerror")
const parol = document.querySelector(".parol")
const text = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
formlogin.addEventListener("submit", e => {
    e.preventDefault()

    if (text.test(formlogin.email.value)) {
        console.log("ss")
        mail.setAttribute("style", "border:1px solid green")
        emailerror.classList.add("hidden")
    } else {
        console.log("error")
        mail.setAttribute("style", "border:2px solid red")
        emailerror.classList.remove("hidden")
    }
    if (sifr.test(formlogin.sifre.value)) {
        sifreerror.classList.add("hidden")
        parol.setAttribute("style", "border:2px solid green")
    }
    else {
        sifreerror.classList.remove("hidden")
        parol.setAttribute("style", "border:2px solid red")
    }
})