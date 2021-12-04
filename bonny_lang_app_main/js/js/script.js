const inputField = document.querySelectorAll('.input__field')
const inputEmail = document.querySelector('#input__email')
const inputPassword = document.querySelector('#input__password')
const showIcon = document.querySelector('#show__icon')

const loginBtn = document.querySelector('#login__btn')

let emailData
let passwordData

inputField[0].value = ''
inputField[1].value = ''

inputField[0].addEventListener('input', () => {
	const emailInput = inputField[0];
	emailData = inputField[0].value;
	if(emailInput.validationMessage !== ''){
		inputEmail.style.borderColor = 'red'
	}else if(!emailData){
		inputEmail.style.borderColor = ''
	}else{
		inputEmail.style.borderColor = '#4A44FF'
	}



})

inputField.forEach((input, index, arr) => {
	input.addEventListener('focus', () => {
		input.placeholder == 'Email' || input.placeholder == 'Password' ? input.placeholder = '' : undefined
	})

	input.addEventListener('blur', () => {
		arr[0].placeholder = 'Email';
		arr[1].placeholder = 'Password';
	})
})

showIcon.addEventListener('click', () => {
	showIcon.classList.toggle('fa-eye-slash')
	!showIcon.classList.contains('fa-eye-slash') ? inputField[1].type = 'text' : inputField[1].type = 'password'
})	

const passwordValidation = () => {
	const password = inputField[1]
	password.addEventListener('input', () => {
		passwordData = inputField[1].value
		password.value.length < 8 ? inputPassword.style.borderColor = 'red' : inputPassword.style.borderColor = '#4A44FF'
	})
}

passwordValidation()


function checkValidation(email) {
  return function(password = ''){
    return email && password.length >= 8 ? loginBtn.style.backgroundColor = '#4A44FF' : loginBtn.style.backgroundColor = ''
  }
}

setInterval(() => checkValidation(emailData)(passwordData), 500)




//Animations

const pointers = document.querySelectorAll('.pointers')
const carouselComponent = document.querySelectorAll('carousel__component')
// const carouselImages = document.querySelector('#carousel__image')

let index = 0
const imageArr = ['cat.svg', 'emoji.svg', 'bird.png']

setInterval(() => {
	carouselComponent.innerHTML = `<img class="prev__image" src="images/${imageArr[index]}" alt="">`
	// carouselImages.src = 'images/emoji.svg'
	// carouselImages.classList.replace('prev__image', 'next__image')
	// carouselImages.classList.add('next__image')
}, 5000)
