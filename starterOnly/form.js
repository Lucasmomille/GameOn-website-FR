const firstname = document.getElementById('first')
const lastname = document.getElementById('last')
const birthday = document.getElementById('birthdate')
const quantity = document.getElementById('quantity')
const email = document.getElementById('email')
const checkboxes = Array.from(document.querySelectorAll('.checkbox-input'))
const condition = document.getElementById('checkbox1')
const form = document.getElementById('form')
const submitted = document.getElementById('submitted')

const minTwoChars = (elt) => {
  const onlyLetters = /^[a-zA-Z]+$/
  if (elt.value.length > 1 && onlyLetters.test(elt.value)) {
    elt.parentNode.dataset.errorVisible = false
    return true
  } else {
    elt.parentNode.dataset.errorVisible = true
  }
}
const onlyNumber = (elt) => {
  const onlyNumbers = /^[0-9]*$/
  if (elt.value.length > 0 && onlyNumbers.test(elt.value)) {
    elt.parentNode.dataset.errorVisible = false
    return true
  } else {
    elt.parentNode.dataset.errorVisible = true
  }
}
const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const validEmailAdress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (validEmailAdress.test(email.value.toLowerCase())) {
    email.parentNode.dataset.errorVisible = false
    return true
  } else {
    email.parentNode.dataset.errorVisible = true
  }
}

const validateBirthday = (birthday) => {
  const isDate = (date) => {
    return (new Date(date) !== 'Invalid Date') && !isNaN(new Date(date))
  }
  if (birthday.value.length > 0 && isDate(birthday.value)) {
    birthday.parentNode.dataset.errorVisible = false
    return true
  } else {
    birthday.parentNode.dataset.errorVisible = true
  }
}

const validateArrayOfCheckboxes = (checkboxes) => {
  const checkboxeCheck = checkboxes.reduce((acc, curr) => acc || curr.checked, false)
  if (checkboxeCheck) {
    checkboxes[0].parentNode.dataset.errorVisible = false
    return true
  } else {
    checkboxes[0].parentNode.dataset.errorVisible = true
  }
}

const validateOneCheckboxe = (checkboxe) => {
  if (checkboxe.checked) {
    checkboxe.parentNode.dataset.errorVisible = false
    return true
  } else {
    checkboxe.parentNode.dataset.errorVisible = true
  }
}

// Validate form

form.addEventListener('submit', function (e) {
  e.preventDefault()
  if (validateForm()) {
    submitted.classList.remove('none')
    form.classList.add('none')
  } else {
    submitted.classList.add('none')
    form.classList.remove('none')
  }
}
)

// Check every input
function validateForm () {
  const arrayOfFunctions = [
    minTwoChars(firstname),
    minTwoChars(lastname),
    onlyNumber(quantity),
    validateEmail(email),
    validateArrayOfCheckboxes(checkboxes),
    validateOneCheckboxe(condition),
    validateBirthday(birthday)
  ]
  const checkArrayTrue = arrayOfFunctions.every(v => v === true)
  if (checkArrayTrue) {
    return true
  } else {
    return false
  }
}
