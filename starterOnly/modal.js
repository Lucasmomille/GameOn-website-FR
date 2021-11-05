/* function editNav () {
  const x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
} */

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const btnClose = document.querySelectorAll('.btn-close')
const modalCloseBtn = document.querySelectorAll('.close')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal () {
  modalbg.style.display = 'block'
}

// Close modal
modalCloseBtn.forEach((btn) => btn.addEventListener('click', closeModal))
btnClose.forEach((btn) => btn.addEventListener('click', closeModal))

function closeModal (e) {
  e.preventDefault()
  modalbg.style.display = 'none'
}
