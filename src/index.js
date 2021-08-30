import './sass/main.scss';

const formEl = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', function () {
    formEl.addEventListener('submit', onFormSend);
   
})
async function onFormSend(event) {
    event.preventDefault();

    let formData = new FormData(formEl);
    // console.log(formData);
    event.currentTarget.reset();

    let response = await fetch('https://vk.com/away.php?utf=1&to=https%3A%2F%2F60376bfd5435040017722533.mockapi.io%2Fform', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    });
    if (response.ok) {
        let result = await response.json();
        alert(result.message);
    }
    else {
        alert('Ошибка');
    }
}