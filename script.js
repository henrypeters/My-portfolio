const header = document.querySelector("header");

window.addEventListener ('scroll', function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true,
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})