
'use strict';

// Adding current year to the Footer
const copyrightDate = document.getElementById('copyright_date');
const currentYear = new Date().getFullYear()
copyrightDate.textContent = currentYear;

// sticky header
const navbar = document.querySelector('.header');
const heroContainer = document.querySelector('.main-content')
window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-header');
    heroContainer.style.paddingTop = '5.8em';
  }else {
    navbar.classList.remove('fixed-header');
    heroContainer.style.paddingTop = '2em';
  }
});