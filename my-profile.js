console.log(`Width: ${window.screen.width}px`);
console.log(`Height: ${window.screen.height}px`);

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    location.href = './index.html'
});