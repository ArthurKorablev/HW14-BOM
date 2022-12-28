const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#pass');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(emailInput.value);
    console.log(passInput.value);

    document.body.classList.add('loaded_hiding');

    setTimeout(
        () => {
            location.href = './my-profile.html';
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        },
        5000
    );
})
