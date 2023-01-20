let menu =document.querySelector('#menu-icon');

const sr =ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text', {delay:200, origin:'left'})
sr.reveal('.about,.services,.portfolio,.contact.copyright',{delay:100, origin:'bottom'})