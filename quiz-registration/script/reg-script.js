

let emailInput = document.getElementById("email-input");
let nameInput = document.getElementById("full-name-input");
let passWord = document.getElementById("password-input");
let confirmPass = document.getElementById("conf-password-input");


let signUp = document.querySelector(".signup-button");


let emailError = document.querySelector(".email-error");
let nameError = document.querySelector(".name-error");
let passError = document.querySelector(".pass-error");
let passConfirmationError = document.querySelector(".pass-confirmation-error");


let mistake;

let emailRegex =  /^[a-zA-Z0-9._-]+@(hotmail|gmail|yahoo).com$/;
let passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function show(message){
    if(mistake === "emailInput"){
        emailError.innerText = message;
    }else if(mistake === "nameInput"){
        nameError.innerText = message;
    }else if(mistake === "passWord"){
        passError.innerText = message;
    }else if(mistake === "confirmPass"){
        passConfirmationError.innerText = message;
    }
}

function checkEmpty(){
  try{
      if(emailInput.value === "") {
           mistake = "emailInput";
       }else if(nameInput.value === ""){
            mistake = "nameInput";
       }else if(passWord.value === ""){
            mistake = "passWord";
       }else if(confirmPass.value === ""){
            mistake = "confirmPass";
       }

      throw "this fieled is required";
    } catch(error){
            show(error);
    }
}

emailInput.addEventListener("blur" , validation);
nameInput.addEventListener("blur" , validation);
passWord.addEventListener("blur" , validation);
confirmPass.addEventListener("blur" , validation);


function validation(){
    try{
        if(emailInput.value !=""){
            if(emailRegex.test(emailInput.value)){
                emailError.innerText = "";
            }else{
                throw "the email is in the wrong format";
            }

        }else if(passError.value !=""){
            if(passRegex.test(emailInput.value)){
                passError.innerText = "";
            }else{
                throw "the password is in the wrong format";
            }

         }
        else {
            checkEmpty();
        }
    }catch(error){
        show(error);
    }
}




let avatar = document.querySelectorAll(".avatar");

avatar.forEach(element => {
    element.addEventListener("click", () =>{
            localStorage.setItem("userAvatar", element.src);
    })
});


// signUp.addEventListener("click" , () =>{
//     localStorage.setItem("email", emailInput.value);
//     localStorage.setItem("password", passWord.value);
//     localStorage.setItem("name", nameInput.value);
// });
