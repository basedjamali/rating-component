const numbers = document.querySelectorAll('.button')
const submitButton = document.getElementById('submit')
const ratingPage = document.querySelector('.rating-page')
const thankYouPage = document.querySelector('.thank-you-page')
const userSelectedStar = document.querySelector('#user-selected-stars')

submitButton.addEventListener('click', () => {
  ratingPage.style.display = 'none'
  thankYouPage.style.display = 'block'
})

numbers.forEach(number => {
  number.addEventListener('click', () => {
    const valueOfButton = number.value
    userSelectedStar.textContent = valueOfButton
  });
});