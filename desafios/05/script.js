const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();
    form.classList.add("form-hide")
   
});

form.addEventListener("animationstart", event => {
    if (event.animationName === "Down") {
        document.querySelector("body").style.overflow = "hidden";
       // console.log("esta ok")
    }
    
});

form.addEventListener("animationend", event => {
    if (event.animationName === "Donw") {
     form.style.display = 'none';
     document.querySelector("body").style.overflow = "none";
    // console.log("esta ok")
    }

});