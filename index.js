const Form = document.querySelector("form");
const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const input = document.querySelector('input')
Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    card_1.classList.add('hide');
    card_2.classList.remove('hide');
});
