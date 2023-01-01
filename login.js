const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#pass');
const button = document.querySelector('button');
const preloader = document.querySelector('.preloader');

button.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(emailInput.value);
    console.log(passInput.value);

    preloader.classList.add('loading')

    setTimeout(
        () => {
            location.href = './my-profile.html';
            document.body.classList.add('loaded');
        },
        2000
    );
})
