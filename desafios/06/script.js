const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    
    const fields = [...document.querySelectorAll(".input-block input")];

    fields.forEach(field => {
        if (field.value === "" ) form.classList.add("validate-error") 
        console.log("aqui esta")        
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", (event) => {
            if (event.animationName === "nono") {
                formError.classList.remove("validate-error")
                console.log("tada")
            }    
        });    
    }else {
        
        form.classList.add("form-hide")
    }   
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