// Add current Day time to header

var today = dayjs();
$("#currentDay").text(today.format('dddd, D MMMM  YYYY'));

// Add timeBlock - use day.js library much easier than moment.js - Im all about the easiness

// Save the time block
