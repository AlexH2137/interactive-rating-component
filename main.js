const submit = document.querySelector('.submit');
const container = document.querySelector('.container');
const submitContainer = document.querySelector('.submit-container')
let selected = document.querySelector('#rate')
let rating = document.querySelectorAll('.numbers');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    submitContainer.style.display = 'flex';
    container.style.display = 'none';

    selected.innerText = rating.getAttribute('value');
    
})