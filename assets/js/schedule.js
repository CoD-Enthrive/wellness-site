
'use strict';

function showCalendar() {
  const calendar = document.querySelector('.calendar-container');
  calendar.classList.add('displa-calendar');
};

function hideCalendar() {
  const calendar = document.querySelector('.calendar-container');
  calendar.classList.remove('displa-calendar');
};

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