// import { Loading } from 'notiflix';

const refs = {
  createButton: document.querySelector('button'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.createButton.addEventListener('click', onHandleClick);

const delay = 1500;
function onHandleClick(e, delay, firstDelay, amount) {
  e.preventDefault();
  let position;
  for (let position = 1; position <= refs.amount.value; position++) {
    setTimeout(() => {
      createPromise(position, delay)
        .then((position, delay) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch((position, delay) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        })
        .finally((position, delay) => {
          position += 1;
          // delay = delay + 1000;
        });
    }, refs.delay.value);
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill

        resolve(`${position}`);
      } else {
        // Reject

        reject(`${position}`);
      }
    }, refs.firstDelay.value);
  });
}
