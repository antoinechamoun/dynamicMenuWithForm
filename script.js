const firstBtn = document.querySelector('.first')
const secondBtn = document.querySelector('.second')
const thirdBtn = document.querySelector('.third')
const shownImg = document.querySelector('.show')
const prevImg = document.querySelector('.previous')
const nextImg = document.querySelector('.next')
const dropMenu = document.querySelector('.menu')
const menuItems = document.querySelector('.menu-items')
const signInBtn = document.querySelector('.signin')
const form = document.querySelector('.form-container')
const closeForm = document.querySelector('.closeBtn')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
// const emailError = document.getElementById('emailError')
// const passwordError = document.getElementById('passwordError')
// const confirmError = document.getElementById('confirmError')

closeForm.addEventListener('click', ()=> {
    form.classList.remove('show-form')
})

signInBtn.addEventListener('click', ()=>{
    form.classList.add('show-form')
})

dropMenu.addEventListener('click', ()=>{
    menuItems.classList.toggle('showMenu')
})

firstBtn.addEventListener('click', () => {
    firstBtn.style.backgroundColor = 'black'
    secondBtn.style.backgroundColor = 'white'
    thirdBtn.style.backgroundColor = 'white'
    shownImg.classList='img next'
    prevImg.classList='img show'
    nextImg.classList='img next'
})

secondBtn.addEventListener('click', () => {
    secondBtn.style.backgroundColor = 'black'
    firstBtn.style.backgroundColor = 'white'
    thirdBtn.style.backgroundColor = 'white'
    shownImg.classList='img show'
    prevImg.classList='img previous'
    nextImg.classList='img next'
})

thirdBtn.addEventListener('click', () => {
    thirdBtn.style.backgroundColor = 'black'
    secondBtn.style.backgroundColor = 'white'
    firstBtn.style.backgroundColor = 'white'
    shownImg.classList='img previous'
    prevImg.classList='img previous'
    nextImg.classList='img show'
})

email.addEventListener('input', (e) => {
    e.preventDefault()
    checkValidity(email, emailError, 'This should be an email')
})

password.addEventListener('input', (e) => {
    e.preventDefault()
    checkValidity(password, passwordError, 'This should be at least 6 characters')
})

confirmPassword.addEventListener('input', (e) => {
    e.preventDefault()
    if(password.value === confirmPassword.value){
        confirmError.textContent=''
        confirmPassword.style.border='solid 1px green'
    }else{
        confirmError.textContent='Do not match with your password'
        confirmPassword.style.border='solid 1px red'
    }
})

function checkValidity(element, errorSpan, errorMsg){
    if(element.validity.valid){
        errorSpan.textContent=''
        element.style.border='solid 1px green'
    } else{
        errorSpan.textContent=errorMsg
        element.style.border='solid 1px red'
    }
}
