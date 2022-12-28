const form = document.getElementById('userform');
let username = document.getElementById('username');
let email = document.getElementById('email');
let contact = document.getElementById('contact');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpass');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'input-card error';
    const small = formControl.querySelector('.small-msg');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-card success';
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (username.value =="") {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }

    if (email.value =="") {
        showError(email, 'Email is required')
    } else {
        showSuccess(email)
    }

    if (contact.value =="") {
        showError(contact, 'Contact is required')
    } else {
        showSuccess(contact)
    }

    if (password.value =="") {
        showError(password, 'Password is required')
    } else {
        showSuccess(password)
    }
    if (cpassword.value =="") {
        showError(cpassword, 'Confirm password')
    } else {
        showSuccess(cpassword)
    }
})
   

