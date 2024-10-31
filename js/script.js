"use strict";
const avatar = document.getElementById("avatar");
const sectionLogin = document.getElementById("loginsection");
avatar.addEventListener("click", function () {
  sectionLogin.classList.toggle("active");
  sectionReg.classList.remove("activee");
  // const passwordLg = document.getElementById("loginpassword").value;
  // passwordLg.innerHTML = "";
});

const signup = document.getElementById("signup");
const sectionReg = document.getElementById("sectionReg");
signup.addEventListener("click", function () {
  sectionReg.classList.toggle("activee");
});
// Accept Cookies
const divCookies = document.getElementById("cookies");
const iconCk = document.getElementById("Ckicon");
divCookies.addEventListener("click", function () {
  iconCk.classList.add("fa-cookie-bite");
});
//form validation
const form = document.getElementById("form");
form.addEventListener("submit", function (prevent) {
  prevent.preventDefault();
  let errors = {};
  //username
  const usernameValue = document.getElementById("usernameField").value;
  const usrname = document.getElementById("usernameField");
  let regexUsername = /^[0-9A-Za-z]{6,16}$/;
  if (usernameValue.match(regexUsername)) {
    usrname.style.border = "2px solid green";
    document.getElementById("error-username").style.color = "green";

    errors.username = "Username Is valid";
  } else {
    usrname.style.border = "2px solid red";
    errors.username = "Username IsNT valid";
    document.getElementById("error-username").style.color = "red";
  }
  if (usernameValue === "") {
    errors.username = "შეავსოთ სახელის ველი!";
    document.getElementById("error-username").style.color = "red";
    usrname.style.color = "2px solid red";
  }

  //passwords
  const passwordValue = document.getElementById("passwordField").value;
  const passwordRepeatValue = document.getElementById("passwordField2").value;
  const passwordRepeat = document.getElementById("passwordField2");
  const password = document.getElementById("passwordField");

  let regexPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
  if (passwordValue.match(regexPassword)) {
    password.style.border = "2px solid green";
    errors.password = "Password IS Valid";
    document.getElementById("error-password").style.color = "green";
  } else {
    password.style.border = "2px solid red";
    errors.password = "Password ISNT Valid";
    document.getElementById("error-password").style.color = "red";
  }
  if (passwordValue === "") {
    document.getElementById("error-password").style.color = "red";

    password.style.border = "2px solid red";
    errors.password = "გთხოვთ შეავსოთ პაროლის ველი";
  }
  if (passwordRepeatValue !== passwordValue) {
    passwordRepeat.style.border = "2px solid red";
    document.getElementById("error-password2").style.color = "red";
    errors.password2 = "პაროლები არ ემთხვევა, გთხოვთ გადაამოწმოთ!";
  } else {
    passwordRepeat.style.border = "2px solid green";
    document.getElementById("error-password2").style.color = "green";
  }

  //cokies
  if (divCookies.click) {
    Cookies.set("User", usernameValue);
  } else {
    Cookies.remove("User");
  }
  const savedUsername = Cookies.get("User");
  if (savedUsername) {
    document.getElementById("loginname").value = savedUsername;
    divCookies.click = true;
  }
  if (divCookies.click) {
    Cookies.set("UserPassword", passwordValue);
  } else {
    Cookies.remove("UserPassword");
  }
  const savedPassword = Cookies.get("UserPassword");
  if (savedUsername) {
    document.getElementById("loginpassword").value = savedPassword;
    divCookies.click = true;
  }

  //radio
  let gender = false;

  this.querySelectorAll('[name ="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select your gender type";
  }
  //checkbox
  const checkbox = document.getElementById("chekcAggre").checked;
  if (!checkbox) {
    errors.aggre = "გთხოვთ დაეთანხმოთ !";
    document.getElementById("error-aggre").style.color = "red";
  }
  //
  this.querySelectorAll(".error").forEach(function (element) {
    element.textContent = "";
  });
  for (let key in errors) {
    const errorElement = document.getElementById("error-" + key);
    if (errorElement) {
      errorElement.textContent = errors[key];
    }
  }
  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});
// lock login
const passwordLg = document.getElementById("loginpassword");
const lock = document.getElementById("fa-lock");
lock.addEventListener("click", function () {
  if (passwordLg.type === "password") {
    passwordLg.setAttribute("type", "text");
    lock.classList.remove("fa-lock");
    lock.classList.add("fa-lock-open");
  } else {
    passwordLg.setAttribute("type", "password");
    lock.classList.add("fa-lock");
    lock.classList.remove("fa-lock-open");
  }
});
// eye Sign up
const passwordRe = document.getElementById("passwordField");
const eye = document.getElementById("eyeicon");
eye.addEventListener("click", function () {
  if (passwordRe.type === "password") {
    passwordRe.setAttribute("type", "text");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    passwordRe.setAttribute("type", "password");
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
  }
});
// email
const email = document.getElementById("emailField");

function mailFnc() {
  const error = document.getElementById("error-email");
  const emailValue = document.getElementById("emailField").value;
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexMail.test(emailValue)) {
    error.innerText = "Your Email is valid";
    error.style.color = "green";
    email.style.border = "2px solid green";
  } else {
    error.innerText = "Your Email isNT valid";
    error.style.color = "red";
    email.style.border = "2px  solid red";
  }
  //
  if (emailValue === "") {
    error.innerHTML = "";
    error.textContent = "გთხოვთ შეიყვანეთ თქვენი ემაილი";
    error.style.color = "black";
    email.style.border = "2px solid black";
  }
}
email.addEventListener("keyup", mailFnc);
