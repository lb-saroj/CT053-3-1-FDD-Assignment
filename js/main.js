// LBEF Global Connect Main Script

// Add base tag immediately (before components load)
if (!document.querySelector('base')) {
  const base = document.createElement('base');
  const isGitHub = window.location.hostname.includes('github.io');
  base.href = isGitHub ? '/CT053-3-1-FDD-Assignment/' : '/';
  document.head.appendChild(base);
}

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
