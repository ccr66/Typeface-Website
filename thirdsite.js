

const letter = document.getElementById('zebra'); 

window.addEventListener('scroll', function() {

const scrollPos = window.scrollY;


const leftPosition = scrollPos; 
letter.style.left = `${leftPosition}px`;
});