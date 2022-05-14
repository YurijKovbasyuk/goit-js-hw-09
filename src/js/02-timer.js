// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/themes/dark.css';
const refs = {
  picker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let timer = 0;
let timerId = 0;
let selectedTime = null;
refs.buttonStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate) {
      refs.buttonStart.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      refs.buttonStart.disabled = false;
      selectedTime = selectedDates[0];
      // console.log(selectedTime.getTime());
      return selectedTime;
    }
  },
  onOpen() {
    stopTimer();
  },
};
flatpickr('#datetime-picker', options);

function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

refs.buttonStart.addEventListener('click', onHandleButtonClick);

function startTimer() {
  timerId = setInterval(showTimer, 1000);
  refs.buttonStart.textContent = 'Stop';
}

function stopTimer() {
  clearInterval(timerId);
  refs.buttonStart.textContent = 'Start';
  timerId = 0;
}
function onHandleButtonClick() {
  if (timerId === 0) {
    startTimer(timerId);
  } else {
    stopTimer();
  }
}

function showTimer() {
  timer = new Date(refs.picker.value) - Date.now();
  const { days, hours, minutes, seconds } = convertMs(timer);
  refs.day.textContent = pad(days);
  refs.hours.textContent = pad(hours);
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
