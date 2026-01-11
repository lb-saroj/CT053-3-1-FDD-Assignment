// LBEF Global Connect Main Script
import './components.js';

console.log("Welcome to LBEF Global Connect");

document.addEventListener('DOMContentLoaded', () => {
    // Highlight current page in navigation
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href').includes(currentPath) && currentPath !== "") {
            link.style.borderBottom = "2px solid var(--lbef-gold)";
        }
    });
});
