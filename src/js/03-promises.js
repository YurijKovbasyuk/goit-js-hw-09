import Notiflix from 'notiflix';

const refs = {
  createButton: document.querySelector('button'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.createButton.addEventListener('click', onHandleClick);

function onHandleClick(e, delay, firstDelay, amount) {
  e.preventDefault();

  setTimeout(() => {
    for (let position = 1; position <= refs.amount.value; position++) {
      
      createPromise(position, delay)
        .then((position, delay) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch((position, delay) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        })
        .finally((position, delay) => {
          position += 1;
        });
    }
  }, refs.delay.value);
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
