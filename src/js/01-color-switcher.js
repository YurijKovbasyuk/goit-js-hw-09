const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

let intervalId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
      console.log(getRandomHexColor());
    }, 1000);
  }
}
function onClickStop() {
  clearInterval(intervalId);
  intervalId = null;
}
