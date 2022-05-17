import Notiflix from 'notiflix';

const refs = {
  createButton: document.querySelector('button'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.createButton.addEventListener('click', onHandleClick);

function onHandleClick(e) {
  e.preventDefault();

  // setTimeout(() => {
  let countDelay = 0;
  for (let position = 1; position <= refs.amount.value; position++) {
    if (position === 1) {
      setTimeout(() => {
        createPromise(position)
          .then(position => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${refs.firstDelay.value}ms`,
            );
            console.log(`✅ Fulfilled promise ${position} in ${refs.firstDelay.value}ms`);
          })
          .catch(position => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${refs.firstDelay.value}ms`,
            );
            console.log(`❌ Rejected promise ${position} in ${refs.firstDelay.value}ms`);
          });
      }, refs.firstDelay.value);
    } else {
      const delay = Number(refs.firstDelay.value) + Number(refs.delay.value);
      countDelay = delay + countDelay;
      setTimeout(() => {
        createPromise(position)
          .then(position => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${countDelay}ms`);
            console.log(`✅ Fulfilled promise ${position} in ${countDelay}ms`);
          })
          .catch(position => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${countDelay}ms`);
            console.log(`❌ Rejected promise ${position} in ${countDelay}ms`);
          });
      }, countDelay);
    }
  }
  // }, refs.delay.value);
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    
      if (shouldResolve) {
        // Fulfill

        resolve(`${position}`);
      } else {
        // Reject

        reject(`${position}`);
      }
    
  });
}
