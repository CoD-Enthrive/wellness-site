
'use strict';

// Adding current year to the Footer
document.getElementById('copyright_date').textContent = new Date().getFullYear();

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

// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function(entries) {
//   const [entry] = entries;

//   if(!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// }

// const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});
// headerObserver.observe(header);