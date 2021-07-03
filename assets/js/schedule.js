
'use strict';

const scheduleBtns = document.querySelectorAll('.schedule-btns');
scheduleBtns.forEach(scheduleBtn => {
  scheduleBtn.addEventListener('click', emailPage)
});

function emailPage() {
  window.location = './email-confirmation.html';
}