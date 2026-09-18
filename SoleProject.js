const menus = document.querySelectorAll(".mega-menu");

menus.forEach(function(menu) {
    const content = menu.querySelector(".mega-menu-content");
    let timer;

    menu.addEventListener("mouseenter", function() {
        clearTimeout(timer);
        content.classList.add("active");
    });

    menu.addEventListener("mouseleave", function() {
        timer = setTimeout(function() {
            content.classList.remove("active");
        }, 500);
    });
});

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

const loginPopup = document.getElementById("loginPopup");
const signupPopup = document.getElementById("signupPopup");

const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

const openSignup = document.getElementById("openSignup");
const openLogin = document.getElementById("openLogin");

loginBtn.addEventListener("click", function(event) {
  event.preventDefault();
  signupPopup.style.display = "none";
  loginPopup.style.display = "flex";
});

signupBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  loginPopup.style.display = "none";
  signupPopup.style.display = "flex";
});

closeLogin.addEventListener("click", function() {
  loginPopup.style.display = "none";
});

closeSignup.addEventListener("click", function() {
  signupPopup.style.display = "none";
});

openSignup.addEventListener("click", function(event) {
  event.preventDefault();
  loginPopup.style.display = "none";
  signupPopup.style.display = "flex";
});

openLogin.addEventListener("click", function(event) {
  event.preventDefault();
  signupPopup.style.display = "none";
  loginPopup.style.display = "flex";
});