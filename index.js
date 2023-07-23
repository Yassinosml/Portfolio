
/*Nav bar Animation*/
const bar = document.querySelector('.bar');
const navbar = document.querySelector('.navbar');

bar.addEventListener('click',() => {
    if (navbar.style.opacity == '1'){
        navbar.style.right = '-50%';
        navbar.style.opacity = '0';
        bar.classList.replace('fa-xmark','fa-bars')
    }
    else {
        
        navbar.style.right = '-30%';
        navbar.style.opacity = '1';
        bar.classList.replace('fa-bars','fa-xmark')
    }
})
document.querySelector('main').addEventListener('click',() => {
    if (navbar.style.opacity == '1'){
        navbar.style.right = '-50%';
        navbar.style.opacity = '0';
        bar.classList.replace('fa-xmark','fa-bars')
    }
})
