// import { Loading } from 'notiflix';

const refs = {
  createButton: document.querySelector('button'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.createButton.addEventListener('click', onHandleClick);

let delay = refs.step.value;
let amount = refs.amount.value;
let firstDelay = refs.delay.value;
function onHandleClick(e, delay, firstDelay, amount) {
  e.preventDefault();

  setTimeout(createPromise(), firstDelay)
    .then((position, delay) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch((position, delay) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  for (let position = 1; i <= amount; i++) {
    let delay = 
    createPromise(position, delay)
      .then((position, delay) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch((position, delay) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve('done');
      } else {
        // Reject
        reject('not');
      }
    });
  });
}
