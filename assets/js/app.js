
'use strict';

// Adding current year to the Footer
(function footerDisplayDate() {
  document.getElementById('copyright_date').textContent = new Date().getFullYear();
})();


// sticky header
(function stickyHeader() {
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
})();

// About us page member popups
(function displayPopups() {
  const members = document.querySelectorAll('.teams-wrapper');
  const memberProfiles = document.querySelectorAll('.member-popups');
  const closeBtn = document.querySelectorAll('.close-members-popup');

  members.forEach(m => {

    m.addEventListener('click', (e) => {
      const member = e.target.closest('.teams-member');

      if(!member) return;
      
      const memberID = member.dataset.id;
      
      memberProfiles.forEach(mp => {
        let profileID = mp.dataset.id;

        if(memberID === profileID) {
          showProfile(mp);
        } 

      });
      console.log(memberID)
      
    })
  });

  hideProfile(closeBtn, memberProfiles);
  
  function showProfile(el) {
    el.classList.add('show-member-popup');
  }

  function hideProfile(elements, container) {

    elements.forEach(el => {
      el.addEventListener('click', () => {
        container.forEach(ct => {
          ct.classList.remove('show-member-popup');
          // closing the popup with Escape key
          document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' && ct.classList.contains('show-member-popup')) {
              ct.classList.remove('show-member-popup');
            }
          });

        })
      })
    });
    
  }

})();
