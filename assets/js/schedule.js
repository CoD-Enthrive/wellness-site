
'use strict';

// show and hide calendar on small screens
const calendar = document.querySelector('.calendar-container');
// Show calendar modal
function showCalendar() {
  calendar.classList.add('display-calendar');
};

// Hide calendar modal
function hideCalendar() {
  calendar.classList.remove('display-calendar');
};

// closing the calendar moddal with Escape key
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && calendar.classList.contains('display-calendar')) {
    hideCalendar();
  }
});

// Adding active class to the Time Schedule buttons
const timeBtns = document.querySelectorAll('.availablity-btn');
// const scheduleBtn = document.querySelector('#schedule-appointment');

timeBtns.forEach(timeBtn => {
  timeBtn.addEventListener('click', () => {

    const activeTimeBtn = document.querySelector('.availablity-times .active');

    if(activeTimeBtn) {
      activeTimeBtn.classList.remove('active');
    }

    timeBtn.classList.add('active');
  })
});

// scheduleBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const urlLink = scheduleBtn.dataset.link;

//   timeBtns.forEach(timeBtn => {
//     if(timeBtn.classList.contains('active')) {
//       window.location = `${urlLink}`;
//     }
//   })

// });

// Code for Calendar
function selectDate(date) {
  $('.calendar-wrapper').updateCalendarOptions({
    date: date
  });
}

const defaultConfig = {
  weekDayLength: 1,
  date: new Date(),
  onClickDate: selectDate,
  showYearDropdown: true,
  startOnMonday: true,
};

$('.calendar-wrapper').calendar(defaultConfig);

$('#calendar').calendar();