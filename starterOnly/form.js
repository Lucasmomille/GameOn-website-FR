const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const birhday = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const email = document.getElementById('email');
const checkboxes = Array.from(document.querySelectorAll(".checkbox-input"));
const form = document.getElementById('form');
const submitted = document.getElementById('submitted');

const isChecked = checkboxes.reduce((acc, curr) => acc || curr.checked, false);

const errorFirstname = document.getElementById('errorFirst');
const errorLastname = document.getElementById('errorLast');
const errorQuantity = document.getElementById('errorQuantity');
const errorEmail = document.getElementById('errorEmail');
const errorBirthday = document.getElementById('errorBirthday');

//Regex for form's validation
const minTwoCharacter = /^.{2,}$/;
const validEmailAdress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const onlyNumber = /^[0-9]*$/;
/* 
//Error messages
let errorMessages = {
    minCharacters: "Minimum deux caractères",
    email: "L'adresse mail doit être valide",
    number: "Seulement des chiffres"
} */

//handle error



const minTwoChars = (elt, errorMessage) => {
    elt.addEventListener("input", function() {
        if (elt.value.length > 1){
            errorMessage.classList.add("none");
            elt.classList.remove("border-error");
        } else {
            console.log("error1", errorLastname)
            errorMessage.classList.remove("none");
            elt.classList.add("border-error");
        }
    })
}

const validateEmail = () => {
    if (validEmailAdress.test(email.value.toLowerCase())) {
        errorEmail.classList.add("none")
        validEmailAdress.classList.remove("border-error")
    } else {
        errorEmail.classList.remove("none")
        validEmailAdress.classList.remove("border-error")
    }
}


form.addEventListener('submit', function(e){
        e.preventDefault();
        
        minTwoChars(firstname, errorFirstname);
        minTwoChars(lastname, errorLastname);
        validateEmail();
    
        if (birhday.value.length > 0){
            errorBirthday.classList.add("none")
        } else {
            errorBirthday.classList.remove("none")
        }
        console.log("check", isChecked)
    }
)
