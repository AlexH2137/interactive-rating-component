const submit = document.querySelector('.submit');
const container = document.querySelector('.container');
const submitContainer = document.querySelector('.submit-container')
let selected = document.querySelector('#rate')
let rating = document.querySelectorAll('.numbers');

const form = document.querySelector('form')

form.addEventListener('submit', e => {
    const formData = new FormData(e.target); 
    const formDataObject = Object.fromEntries(formData);
    selected.innerText = formDataObject.rating;
    e.preventDefault();
    submitContainer.style.display = 'flex';
    container.style.display = 'none'; 
})
