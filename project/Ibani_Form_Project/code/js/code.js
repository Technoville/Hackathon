
//   VALIDATION FOR THE FORM

let alert_text = document.querySelector('#side-buttons p')
let submitBtn = document.querySelector('#l-box');
let emailBox = document.querySelector('#r-boxes')
let passwrdBox = document.querySelector('.pass-box')


alert_text.style.textAlign = "center"
//          VALIDATING THE SIGN UP BTN and CONTENTS..

let fnInput = document.querySelector('#first-box');
let sndInput = document.querySelector('.second-box');

let firstInputs =  document.querySelector('#side-buttons');
let log_in = document.querySelector('.log-in');
let sign_up = document.querySelector('.sign-btn');

sign_up.addEventListener('click', signIn);

function signIn(){
    
    fnInput.style.marginBottom = '1.8rem';
    firstInputs.style.width = "100%";
    fnInput.style.width = '92%';
    sndInput.style.width = '92%';
    firstInputs.style.display = "flex";
    firstInputs.style.display = "inline-block";
    log_in.style.background = "#5a5656";
    sign_up.style.background = "#1e94ba";
    
    let h_text = document.querySelector('#h-text h1');
    h_text.style.textAlign = "center";
    h_text.textContent = "CREATE A NEW ACCOUNT"
}


submitBtn.addEventListener('click', validate_input);

    //      VALIDATING FOR BLANK FIELDS

function validate_input(){
    if(fnInput.value == ""){
        alert_text.style.display = "block";
    }
    if(sndInput.value == ""){
        alert_text.style.display = "block";
    }
    if (emailBox.value == ""){
        alert_text.style.display = "block";
    }
    if (passwrdBox.value == ""){
        alert_text.style.display = "block";
    }
}
 
//      log in validation
log_in.addEventListener('click', revert)
function revert(){
    firstInputs.style.transition = "all 0.9s ease";
    firstInputs.style.display = "none";
}