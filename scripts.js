var spanEl = document.querySelectorAll("span");

var root = document.querySelector(':root');

spanEl.forEach((span) => {
    span.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.backgroundColor)
    })
})