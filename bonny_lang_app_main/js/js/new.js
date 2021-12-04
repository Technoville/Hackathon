// Getting some elements from the DOM

const emailInput = document.querySelector('#email_input')
const passwordInput = document.querySelector('#password_input')
const emailOutline = document.querySelector('#input__email')
const passwordOutline = document.querySelector('#input__password')
const showIcon = document.querySelector('#show__icon')
const loginBtn = document.querySelector('#login__btn')

// Functions to validate user's email and password

const checkEmail = (email) => {
	if(email.validationMessage == '' && email.value.includes('.')){
		emailOutline.style.borderColor = '#4A44FF'
		return true
	}

	else if(email.value == ''){
		emailOutline.style.borderColor = ''
	}

	else{
		emailOutline.style.borderColor = 'red'
		return false
	}
}

const checkPassword = (password) => {
	if(password.value && password.value.length >= 8){
		passwordOutline.style.borderColor = '#4A44FF'
		return true
	}

	else if(password.value == ''){
		passwordOutline.style.borderColor = ''
	}

	else{
		passwordOutline.style.borderColor = 'red'
		return false
	}
}

//Function to enable user see password

const showPassword = () => {
	showIcon.classList.toggle('fa-eye-slash')
	!showIcon.classList.contains('fa-eye-slash') ? passwordInput.type = 'text' : passwordInput.type = 'password'
}

// Function to enable user to login

const checkValidation = () => {
	if(checkEmail(emailInput) && checkPassword(passwordInput)) {
		loginBtn.disabled = false
		loginBtn.style.backgroundColor = '#4A44FF' 
	}
	else{
		loginBtn.disabled = true
		loginBtn.style.backgroundColor = ''
	}
}

setInterval(() => checkValidation(), 500)

//Event listeners to execute functions

emailInput.addEventListener('input', () => checkEmail(emailInput))
passwordInput.addEventListener('input', () => checkPassword(passwordInput))
showIcon.addEventListener('click', () => showPassword())


//Animation section

const carouselComponent = document.querySelector('.carousel__component')
const carouselImage = document.querySelector('#carousel__image')
const pointers = document.querySelectorAll('.pointers')
let index = 0

// To show active pointer

setInterval(() => {
	if(index !== 3){
		pointers[index].classList.replace('active', 'disabled')
		index++

		if(index !== 3){
			pointers[index].classList.replace('disabled', 'active')
		}else{
			index = 0
			pointers[index].classList.replace('disabled', 'active')
		}
	}
}, 3000)

const imageArr = ['cat.svg', 'emoji.svg', 'bird.png']

const prevImage = () => {
	carouselImage.classList.toggle('prev__image')
}
setInterval(prevImage, 3000)

const nextImage = () => {
	carouselComponent.innerHTML = `<img id="carousel__image" class="" src="images/cat.svg" alt="">`
	carouselImage.classList.toggle('next__image')
	carouselImage.src = `images/${imageArr[index]}`
}
setInterval(nextImage, 3000)