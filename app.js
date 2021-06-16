const submit = document.querySelector(".btn");

submit.addEventListener("click", () => {
    const error = document.querySelector(".error");
    const errorText = document.querySelector(".error-text");
    const input = document.querySelector(".input").value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!regex.test(input)) {
        if(errorText.classList.contains("display") && (error.classList.contains("display"))) {
            errorText.classList.remove("display");
            error.classList.remove("display");
        }
    }else if(input!== "") {
        errorText.classList.add("display");
        error.classList.add("display");
    }
});













// btn.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let str = input.value;
//     if(!regex.test(str)) {
//         if(error.classList.contains("display")) {
//             error.classList.remove("display");
//         }
//     }else {
//         if(str !== "") {
//             error.classList.add("display");
//         }
//     }
// });
