import Notiflix from 'notiflix';

const refs = {
  createButton: document.querySelector('button'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.createButton.addEventListener('submit', onHandleClick);

function onHandleClick(e, { delay }) {
  for (var i = 0; i <= 10; i++) {
    setTimeout(funcBefore, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
console.log(refs.delay);
